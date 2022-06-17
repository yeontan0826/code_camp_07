import Link from "next/link";
import { useRouter } from "next/router";

const KakaoMapRoutingPage = () => {
	const router = useRouter();

	const onClickMoveToMap = () => {
		router.push("/29-03-kakao-map-routed");
	};

	return (
		// <button onClick={onClickMoveToMap}>Move to Map</button>)

		// MPA
		// <button>
		// 	<a href="/29-03-kakao-map-routed">Move to map</a>
		// </button>

		// SPA
		<Link href={"/29-03-kakao-map-routed"}>Move to page</Link>
	);
};

export default KakaoMapRoutingPage;
