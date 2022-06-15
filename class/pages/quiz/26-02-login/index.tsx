import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useState } from "react";

const LOGIN_USER = gql`
	mutation loginUser($email: String!, $password: String!) {
		loginUser(email: $email, password: $password) {
			accessToken
		}
	}
`;

const schema = yup.object({
	email: yup.string().email("유효한 이메일을 입력해주세요").required("이메일을 입력해주세요."),
	password: yup.string().min(4, "비밀번호는 최소 4자리 이상입니다.").required("비밀번호를 입력해주세요."),
});

const LoginPage = () => {
	const router = useRouter();

	const [loginUser] = useMutation(LOGIN_USER);

	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(schema),
		mode: "onChange",
	});

	const [modalVisible, setModalVisible] = useState(false);

	const onModalVisibleToggle = () => {
		setModalVisible((prev) => !prev);
	};

	const onClickSubmit = async (data: any) => {
		try {
			await loginUser({
				variables: data,
			});

			const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
			if (baskets.length > 0) {
				onModalVisibleToggle();
			}
		} catch (error: any) {
			console.log(error.message);
			Modal.error({
				content: "올바른 계정으로 로그인해주세요.",
			});
		}
	};

	const onOkHandler = () => {
		router.push("/quiz/26-01-baskets");
	};

	const onCancelHandler = () => {
		onModalVisibleToggle();
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onClickSubmit)}>
				<MyInput type={"email"} placeholder={"이메일"} {...register("email")} autoComplete={"off"} />
				<ErrorMessage>{formState.errors.email?.message}</ErrorMessage>
				<MyInput type={"password"} placeholder={"비밀번호"} {...register("password")} />
				<ErrorMessage>{formState.errors.password?.message}</ErrorMessage>
				<MyButton>로그인</MyButton>
			</form>
			{/* Modal */}
			{modalVisible && (
				<Modal
					visible={true}
					title={"로그인 성공"}
					okText={"이동하기"}
					cancelText={"취소"}
					onOk={onOkHandler}
					onCancel={onCancelHandler}
				>
					<div>
						비회원으로 담긴 게시물 장바구니가 존재합니다.
						<br />
						이동하시겠습니까?
					</div>
				</Modal>
			)}
		</div>
	);
};

export default LoginPage;

const ErrorMessage = styled.div`
	color: red;
	font-size: 13px;
	margin-bottom: 12px;
`;

const MyInput = styled.input`
	width: 200px;
	height: 40px;
	padding: 0 10px;
`;

const MyButton = styled.button`
	width: 200px;
	height: 40px;
	margin-top: 10px;
`;
