import { ApolloQueryResult } from "@apollo/client";
import { FieldValues, FormState, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface ICommentItemProps {
    el?: any;
    onDeleteQuestion: (userId: string) => () => void;
    userId: string;
    refetch: (
        variables?:
            | Partial<{
                  useditemId: string | string[] | undefined;
              }>
            | undefined
    ) => Promise<ApolloQueryResult<any>>;
}

export interface ICommentItemUIProps {
    el?: any;
    onDeleteQuestion: (userId: string) => () => void;
    userId: string;
    visible: boolean;
    onChangeVisible: () => void;
    register: UseFormRegister<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    formState: FormState<FieldValues>;
    onClickUpdate: (data: any) => void;
}
