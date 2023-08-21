import { useMutation } from "@apollo/client";
import { useState } from "react";
import CommentItemUI from "./CommentItem.presenter";
import { UPDATE_USED_ITEM_QUESTSION } from "./CommentItem.queries";
import { ICommentItemProps } from "./CommentItem.types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useForm } from "react-hook-form";

const schema = yup.object({
    contents: yup.string().required("댓글을 작성해주세요."),
});

const CommentItem = (props: ICommentItemProps) => {
    const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTSION);

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const [visible, setVisible] = useState(false);
    const onChangeVisible = () => {
        setVisible((prev) => !prev);
    };

    const onClickUpdate = async (data: any) => {
        if (props.el.contents === data.contents) {
            Modal.error({
                content: "수정사항이 없습니다.",
            });
            return;
        }

        console.log(props.el);
        try {
            await updateUseditemQuestion({
                variables: {
                    updateUseditemQuestionInput: {
                        contents: data.contents,
                    },
                    useditemQuestionId: props.el._id,
                },
            });

            onChangeVisible();
            props.refetch();
            Modal.success({
                content: "댓글을 수정했습니다.",
            });
        } catch (error: any) {
            Modal.error({
                title: "댓글 수정 실패",
                content: error.message,
            });
        }
    };

    return (
        <CommentItemUI
            {...props}
            visible={visible}
            onChangeVisible={onChangeVisible}
            register={register}
            handleSubmit={handleSubmit}
            formState={formState}
            onClickUpdate={onClickUpdate}
        />
    );
};

export default CommentItem;
