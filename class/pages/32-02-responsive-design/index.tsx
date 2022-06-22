import styled from "@emotion/styled";

const ResponsiveDesignPage = () => {
	return <Wrapper>상자</Wrapper>;
};

export default ResponsiveDesignPage;

const Wrapper = styled.div`
	width: 700px;
	height: 700px;
	background-color: red;

	@media (min-width: 768px) and (max-width: 990px) {
		width: 500px;
		height: 500px;
		background-color: green;
	}

	@media (max-width: 767px) {
		width: 200px;
		height: 200px;
		background-color: blue;
		display: none;
	}
`;
