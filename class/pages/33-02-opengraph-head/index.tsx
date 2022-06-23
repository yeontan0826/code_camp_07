import Head from "next/head";

const OpenGraphPage = () => {
	return (
		<div>
			<Head>
				<meta property="og:title" content="나만의 웹사이트" />
				<meta property="og:description" content="나만의 사이트에 오신 것을 환영합니다." />
				<meta
					property="og:image"
					content="https://images.velog.io/images/sparklingwater/post/94a75508-011b-494a-b995-603723428875/reactjs-logo-sticker.jpeg"
				/>
			</Head>
			<h1>오픈그래프 연습 페이지</h1>
		</div>
	);
};

export default OpenGraphPage;
