import { useApolloClient, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import LoginUI from "./Login.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./Login.queries";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store/States";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

const schema = yup
    .object({
        email: yup.string().email("유효한 이메일을 입력해주세요.").required("이메일을 입력해주세요."),
        password: yup
            .string()
            .min(8, "영문, 숫자 8~16자리의 비밀번호를 입력해주세요.")
            .max(16, "영문, 숫자 8~16자리의 비밀번호를 입력해주세요.")
            .required("비밀번호를 입력해주세요."),
    })
    .required();

const Login = () => {
    const { onReplaceToPage } = useMoveToPage();

    const [loginUser] = useMutation(LOGIN_USER);
    const client = useApolloClient();

    const [, setAccessToken] = useRecoilState(accessTokenState);

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onClickSubmit = async (data: any) => {
        try {
            const result = await loginUser({
                variables: {
                    ...data,
                },
            });

            const accessToken = result.data?.loginUser.accessToken;

            const resultUserInfo = await client.query({
                query: FETCH_USER_LOGGED_IN,
                context: {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                },
            });

            const userInfo = resultUserInfo.data.fetchUserLoggedIn;
            const { __typename, ...newUserInfo } = userInfo;

            console.log("userInfo" + newUserInfo);

            setAccessToken(result.data?.loginUser.accessToken);
            localStorage.setItem("accessToken", accessToken);

            onReplaceToPage(`/`)();
        } catch (error: any) {
            Modal.error({
                title: "로그인 실패",
                content: error.message,
            });
        }
    };

    return <LoginUI register={register} formState={formState} handleSubmit={handleSubmit} onClickSubmit={onClickSubmit} />;
};

export default Login;
