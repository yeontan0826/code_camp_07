import styled from "@emotion/styled";
import { breakPoints } from "../../src/commons/styles/media";

const ResponsiveDesignPage = () => {
	return (
		<>
			<MWrapper>
				<button>모바일 전용 버튼</button>
			</MWrapper>
			<Wrapper>상자</Wrapper>
		</>
	);
};

export default ResponsiveDesignPage;

const Wrapper = styled.div`
	width: 43.75;
	height: 700px;
	background-color: red;

	@media (min-width: 768px) and (max-width: 990px) {
		width: 31.25rem;
		height: 500px;
		background-color: green;
	}

	// @media ${breakPoints.mobile} {}
	@media (max-width: 767px) {
		width: 200px;
		height: 200px;
		background-color: blue;
		/* display: none; */
	}
`;

const MWrapper = styled.div`
	display: none;

	@media ${breakPoints.mobile} {
		width: 18.75rem;
		height: 100px;
		background-color: violet;
		display: block;
	}
`;
