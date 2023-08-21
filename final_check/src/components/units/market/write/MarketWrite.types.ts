import { ChangeEvent } from "react";
import { FieldValues, FormState, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IMarketWriteProps {
    isEdit: boolean;
    data?: any;
}

export interface IMarketWriteUIProps {
    isEdit: boolean;
    data?: any;
    register: UseFormRegister<FieldValues>;
    onChangeFile: (number: number) => (event: ChangeEvent<HTMLInputElement>) => void;
    imageUrls: string[];
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    formState: FormState<FieldValues>;
    onClickSubmit: (data: any) => void;
    onClickUpdate: (data: any) => void;
    onChangeContents: (value: string) => void;
    postCodeModalToggle: () => void;
    postCodeModalVisible: boolean;
    onHandleComplete: (data: any) => void;
    useditemAddress: {
        zipcode: string;
        address: string;
        lat: number;
        lng: number;
    };
    onMoveToBack: () => void;
}
