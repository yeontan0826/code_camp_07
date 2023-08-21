import ErrorDiv from "../../../../commons/typeface/error/ErrorDiv";
import * as W from "./CommentWrite.styles";
import { ICommentWriteUIProps } from "./CommentWrite.types";

const CommentWriteUI = (props: ICommentWriteUIProps) => {
    return (
        <W.CommentWriteBox onSubmit={props.handleSubmit(props.onClickWriteComment)}>
            <W.CommentInput {...props.register("contents")} />
            <ErrorDiv errorText={props.formState.errors.contents?.message} />
            <W.CommentWriteButton>작성하기</W.CommentWriteButton>
        </W.CommentWriteBox>
    );
};

export default CommentWriteUI;
