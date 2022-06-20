import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";

const RefreshTokenSuccessPage = () => {
	const [accessToken] = useRecoilState(accessTokenState);
	console.log(accessToken);
	return <></>;
};

export default RefreshTokenSuccessPage;
