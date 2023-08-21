import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Modal } from "antd";
import RegisterUI from "./Register.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./Register.queries";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

const schema = yup
    .object({
        email: yup.string().email("유효한 이메일을 입력해주세요.").required("이메일을 입력해주세요"),
        password: yup
            .string()
            .min(8, "영문, 숫자 8~16자리의 비밀번호를 입력해주세요.")
            .max(16, "영문, 숫자 8~16자리의 비밀번호를 입력해주세요.")
            .required("비밀번호를 입력해주세요."),
        passwordConfirm: yup
            .string()
            .min(8, "영문, 숫자 8~16자리의 비밀번호를 입력해주세요.")
            .max(16, "영문, 숫자 8~16자리의 비밀번호를 입력해주세요.")
            .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
            .required("비밀번호를 입력해주세요."),
        name: yup
            .string()
            .min(2, "한글, 영문, 숫자 2~10자리의 이름을 입력해주세요.")
            .max(10, "한글, 영문, 숫자 2~10자리의 이름을 입력해주세요.")
            .required("이름을 입력해주세요."),
    })
    .required();

const Register = () => {
    const { onReplaceToPage } = useMoveToPage();

    const [createUser] = useMutation(CREATE_USER);

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onClickSubmit = async (data: any) => {
        const { passwordConfirm, ...createUserInput } = data;
        try {
            const result = await createUser({
                variables: {
                    createUserInput,
                },
            });
            console.log(result);
        } catch (error: any) {
            console.log(error.message);
            Modal.error({
                title: "회원가입 실패",
                content: error.message,
            });
        }

        Modal.success({
            content: "회원가입을 축하드립니다!",
            onOk() {
                onReplaceToPage(`/login`)();
            },
            onCancel() {
                onReplaceToPage(`/login`)();
            },
        });
    };

    return <RegisterUI register={register} formState={formState} handleSubmit={handleSubmit} onClickSubmit={onClickSubmit} />;
};

export default Register;
