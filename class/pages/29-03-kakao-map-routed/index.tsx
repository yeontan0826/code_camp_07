import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
	kakao: any;
};

const KakaoMapRoutedPage = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=5939817084cc558ca481f80f662f813a&autoload=false";
		document.head.appendChild(script);

		script.onload = () => {
			window.kakao.maps.load(() => {
				const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
				const options = {
					// 지도를 생성할 때 필요한 기본 옵션
					center: new window.kakao.maps.LatLng(37.4849, 126.8964), // 지도의 중심좌표.
					level: 3, // 지도의 레벨(확대, 축소 정도)
				};

				const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

				const position = [
					{
						title: "1",
						latlng: new kakao.maps.LatLng(37.4854, 126.8959),
					},
					{
						title: "2",
						latlng: new kakao.maps.LatLng(37.4849, 126.8964),
					},
				];

				for (let i = 0; i < position.length; i++) {
					const marker = new kakao.maps.Marker({
						map, // map: map
						title: position[i].title,
						position: position[i].latlng,
						clickable: true,
					});
				}

				const iwContent = '<div style={{padding: "35px"}}>Hello World!</div>';

				const infoWindow = new kakao.maps.InfoWindow({
					content: iwContent,
					removable: true,
				});

				kakao.maps.event.addListener(marker, "click", () => {
					infoWindow.open(map, marker);
				});
			});
		};
	}, []);

	return (
		<>
			{/* <Head>
				<script
					type="text/javascript"
					src="//dapi.kakao.com/v2/maps/sdk.js?appkey=5939817084cc558ca481f80f662f813a"
				></script>
			</Head> */}
			<div id={"map"} style={{ width: "100vw", height: "100vh" }}></div>
		</>
	);
};

export default KakaoMapRoutedPage;
