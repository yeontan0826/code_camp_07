import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
	kakao: any;
};

const KakaoMapLoutedPage = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=5939817084cc558ca481f80f662f813a&autoload=false";
		document.head.appendChild(script);

		script.onload = () => {
			window.kakao.maps.load(() => {
				const container = document.getElementById("map");
				const options = {
					center: new window.kakao.maps.LatLng(37.3266, 126.8321),
					level: 3,
				};

				const map = new window.kakao.maps.Map(container, options);

				const imageSrc = "/image/29-kakao-map/ic_marker.svg";
				const imageSize = new window.kakao.maps.Size(40);
				const imageOption = { offset: new window.kakao.maps.Point(20, 60) };

				const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

				// 최초 포지션
				const position = new window.kakao.maps.LatLng(37.3266, 126.8321);

				// 마커 설정
				const marker = new window.kakao.maps.Marker({
					map,
					image: markerImage,
					title: "오늘 운동을 진행할 배드민턴 체육관",
					position,
					clickable: true,
				});

				const content = `<div style="width: 150px;padding: 10px;text-align: center;">오늘 운동을 진행할 배드민턴 체육관</div>`;

				const infoWindow = new window.kakao.maps.InfoWindow({
					content,
				});

				// mouse가 말풍선에 hover일때
				window.kakao.maps.event.addListener(marker, "mouseover", () => {
					infoWindow.open(map, marker);
				});

				// hover 해지
				window.kakao.maps.event.addListener(marker, "mouseout", () => {
					infoWindow.close();
				});

				// 맵 클릭하면 해당 위치에 마커 생성
				window.kakao.maps.event.addListener(map, "click", (event: any) => {
					infoWindow.close();
					const latlng = event.latLng;
					marker.setPosition(latlng);
					infoWindow.setContent(
						`<div style="width: 300px;height: 70px;padding: 7px;">위도: ${latlng.getLat()}<br/>경도: ${latlng.getLng()}</div>`
					);
					map.panTo(latlng);
				});
			});
		};
	}, []);
	return (
		<>
			<div>
				<div id="map" style={{ width: "100vw", height: "100vh" }}></div>
			</div>
		</>
	);
};

export default KakaoMapLoutedPage;
