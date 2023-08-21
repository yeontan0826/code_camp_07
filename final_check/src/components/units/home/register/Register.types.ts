import { FieldValues, FormState, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IRegisterUIProps {
    register: UseFormRegister<FieldValues>;
    formState: FormState<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    onClickSubmit: (data: any) => void;
}
