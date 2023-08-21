import InfiniteScroll from "react-infinite-scroller";
import CommentItem from "../item/CommentItem.container";
import { ICommentListUIProps } from "./CommentList.types";
import { v4 as uuidv4 } from "uuid";

const CommentListUI = (props: ICommentListUIProps) => {
    return (
        <>
            {props.data && (
                <>
                    {props.data?.fetchUseditemQuestions.length === 0 ? (
                        <div>댓글이 없습니다</div>
                    ) : (
                        <InfiniteScroll pageStart={0} loadMore={props.loadMoreProducts} hasMore={true} useWindow={true}>
                            {props.data?.fetchUseditemQuestions.map((el: any) => (
                                <CommentItem key={uuidv4()} el={el} userId={props.userId} onDeleteQuestion={props.onDeleteQuestion} refetch={props.refetch} />
                            ))}
                        </InfiniteScroll>
                    )}
                </>
            )}
        </>
    );
};

export default CommentListUI;
