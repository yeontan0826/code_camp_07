import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import CommentListUI from "./CommentList.presenter";
import { DELETE_USED_ITEM_QUESTION, FETCH_USER_LOGGED_IN } from "./CommentList.queries";
import { ICommentListProps } from "./CommentList.types";

const CommentList = (props: ICommentListProps) => {
    const { data } = useQuery(FETCH_USER_LOGGED_IN);
    const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

    const onDeleteQuestion = (userId: string) => async () => {
        try {
            await deleteUseditemQuestion({
                variables: {
                    useditemQuestionId: userId,
                },
            });

            props.refetch();
            Modal.success({
                content: "댓글을 삭제했습니다.",
            });
        } catch (error: any) {
            Modal.error({
                title: "댓긇 삭제 실패",
                content: error.message,
            });
        }
    };

    return (
        <CommentListUI
            data={props.data}
            loadMoreProducts={props.loadMoreProducts}
            userId={data?.fetchUserLoggedIn._id}
            onDeleteQuestion={onDeleteQuestion}
            refetch={props.refetch}
        />
    );
};

export default CommentList;
