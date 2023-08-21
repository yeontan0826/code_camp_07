import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store/States";
import PositiveButton from "../../../commons/account/button/PositiveButton";
import AccountInput from "../../../commons/account/input/AccountInput";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import ErrorDiv from "../../../commons/typeface/error/ErrorDiv";
import * as L from "./Login.style";
import { ILoginUIProps } from "./Login.types";

const LoginUI = (props: ILoginUIProps) => {
    const [accessToken] = useRecoilState(accessTokenState);
    const { onMoveToPage } = useMoveToPage();
    return (
        <L.Wrapper>
            <L.HeaderContainer>
                <L.Logo src={"/images/logo/logo_white.webp"} onClick={onMoveToPage(`/`)} />
            </L.HeaderContainer>
            <L.Container>
                {accessToken ? (
                    <L.LoggedInBox>이미 로그인 상태입니다.</L.LoggedInBox>
                ) : (
                    <L.ContainerBox onSubmit={props.handleSubmit(props.onClickSubmit)}>
                        <L.TitleContainer>
                            <L.TitleSpan>로그인</L.TitleSpan>
                            <L.SubTitleSpan>Login</L.SubTitleSpan>
                        </L.TitleContainer>
                        <L.InputsContainer>
                            <L.InputsBox>
                                <AccountInput placeholder={"이메일"} register={props.register("email")} />
                                <ErrorDiv errorText={props.formState.errors.email?.message} />
                            </L.InputsBox>
                            <L.InputsBox>
                                <AccountInput type={"password"} placeholder={"비밀번호"} register={props.register("password")} />
                                <ErrorDiv errorText={props.formState.errors.password?.message} />
                            </L.InputsBox>
                        </L.InputsContainer>
                        <L.BottomContainer>
                            <PositiveButton text={"로그인"} />
                            <L.RegisterContainer>
                                <L.RegisterDescSpan>아직 계정이 없으신가요?</L.RegisterDescSpan>
                                <L.RegisterSpan onClick={onMoveToPage(`/register`)}>회원가입</L.RegisterSpan>
                            </L.RegisterContainer>
                        </L.BottomContainer>
                    </L.ContainerBox>
                )}
            </L.Container>
        </L.Wrapper>
    );
};

export default LoginUI;
