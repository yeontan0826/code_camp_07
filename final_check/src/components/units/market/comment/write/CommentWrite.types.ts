import { ApolloQueryResult } from "@apollo/client";
import { FieldValues, FormState, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface ICommentWriteProps {
    refetch: (
        variables?:
            | Partial<{
                  useditemId: string | string[] | undefined;
              }>
            | undefined
    ) => Promise<ApolloQueryResult<any>>;
}

export interface ICommentWriteUIProps {
    register: UseFormRegister<FieldValues>;
    formState: FormState<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    onClickWriteComment: (data: any) => Promise<void>;
}
