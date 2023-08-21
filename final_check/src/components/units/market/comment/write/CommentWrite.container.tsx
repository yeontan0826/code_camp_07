import { useMutation } from "@apollo/client";
import CommentWriteUI from "./CommentWrite.presenter";
import { CREATE_USED_ITEM_QUESTION } from "./CommentWrite.queries";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ICommentWriteProps } from "./CommentWrite.types";

const schema = yup.object({
    contents: yup.string().required("댓글을 작성해주세요"),
});

const CommentWrite = (props: ICommentWriteProps) => {
    const router = useRouter();

    const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);

    const { register, handleSubmit, setValue, formState } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onClickWriteComment = async (data: any) => {
        try {
            await createUseditemQuestion({
                variables: {
                    createUseditemQuestionInput: {
                        contents: data.contents,
                    },
                    useditemId: router.query.id,
                },
            });

            setValue("contents", "");
            props.refetch();
        } catch (error: any) {
            Modal.error({
                title: "댓글 작성 실패",
                content: error.message,
            });
        }
    };

    return <CommentWriteUI register={register} formState={formState} handleSubmit={handleSubmit} onClickWriteComment={onClickWriteComment} />;
};

export default CommentWrite;
