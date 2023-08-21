import * as R from "./Register.style";
import { IRegisterUIProps } from "./Register.types";
import ErrorDiv from "../../../commons/typeface/error/ErrorDiv";
import NegativeButton from "../../../commons/account/button/NagativeButton";
import PositiveButton from "../../../commons/account/button/PositiveButton";
import AccountInput from "../../../commons/account/input/AccountInput";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

const RegisterUI = (props: IRegisterUIProps) => {
    const { onMoveToPage } = useMoveToPage();
    return (
        <R.Wrapper>
            <R.HeaderContainer>
                <R.Logo src={"/images/logo/logo_white.webp"} onClick={onMoveToPage(`/`)} />
            </R.HeaderContainer>
            <R.Container>
                <R.ContainerBox onSubmit={props.handleSubmit(props.onClickSubmit)}>
                    <R.TitleContainer>
                        <R.TitleSpan>회원가입</R.TitleSpan>
                        <R.SubTitleSpan>Sign up</R.SubTitleSpan>
                    </R.TitleContainer>
                    <R.InputsContainer>
                        <R.InputsRow>
                            <R.InputsTitle>이메일</R.InputsTitle>
                            <R.InputsBox>
                                <AccountInput placeholder={"이메일을 입력해주세요"} register={props.register("email")} />
                                <ErrorDiv errorText={props.formState.errors.email?.message} />
                            </R.InputsBox>
                        </R.InputsRow>
                        <R.InputsRow>
                            <R.InputsTitle>비밀번호</R.InputsTitle>
                            <R.InputsBox>
                                <AccountInput type={"password"} placeholder={"비밀번호를 입력해주세요"} register={props.register("password")} />
                                <ErrorDiv errorText={props.formState.errors.password?.message} />
                            </R.InputsBox>
                        </R.InputsRow>
                        <R.InputsRow>
                            <R.InputsTitle>비밀번호 확인</R.InputsTitle>
                            <R.InputsBox>
                                <AccountInput type={"password"} placeholder={"비밀번호를 다시 입력해주세요"} register={props.register("passwordConfirm")} />
                                <ErrorDiv errorText={props.formState.errors.passwordConfirm?.message} />
                            </R.InputsBox>
                        </R.InputsRow>
                        <R.InputsRow>
                            <R.InputsTitle>이름</R.InputsTitle>
                            <R.InputsBox>
                                <AccountInput placeholder={"이름을 입력해주세요"} register={props.register("name")} />
                                <ErrorDiv errorText={props.formState.errors.name?.message} />
                            </R.InputsBox>
                        </R.InputsRow>
                    </R.InputsContainer>
                    <R.BottomContainer>
                        <R.ButtonsContainer>
                            <PositiveButton text={"회원가입"} />
                            <NegativeButton onClick={onMoveToPage(`/`)} text={"취소"} />
                        </R.ButtonsContainer>
                        <R.RegisterContainer>
                            <R.RegisterDescSpan>이미 계정이 있으신가요?</R.RegisterDescSpan>
                            <R.RegisterSpan onClick={onMoveToPage(`/login`)}>로그인</R.RegisterSpan>
                        </R.RegisterContainer>
                    </R.BottomContainer>
                </R.ContainerBox>
            </R.Container>
        </R.Wrapper>
    );
};

export default RegisterUI;
