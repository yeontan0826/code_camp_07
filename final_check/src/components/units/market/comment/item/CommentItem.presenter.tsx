import * as I from "./CommentItem.style";
import { ICommentItemUIProps } from "./CommentItem.types";
import { CloseOutlined, EditFilled } from "@ant-design/icons";
import ErrorDiv from "../../../../commons/typeface/error/ErrorDiv";

const CommentItemUI = (props: ICommentItemUIProps) => {
    return (
        <I.Container>
            <I.TopDiv>
                <I.UserImg />
                <I.UserInfoDiv>
                    <I.UserName>
                        {props.el.user.name}
                        {props.userId === props.el.user._id && (
                            <I.IconDiv>
                                <EditFilled onClick={props.onChangeVisible} style={{ cursor: "pointer" }} />
                                <CloseOutlined onClick={props.onDeleteQuestion(props.el._id)} style={{ cursor: "pointer" }} />
                            </I.IconDiv>
                        )}
                    </I.UserName>
                    <div>{String(props.el.createdAt).slice(0, 10)}</div>
                </I.UserInfoDiv>
            </I.TopDiv>
            <I.ContentsDiv>{props.el.contents}</I.ContentsDiv>
            {props.visible && (
                <I.EditContainer onSubmit={props.handleSubmit(props.onClickUpdate)}>
                    <I.CommentEdit defaultValue={props.el.contents} {...props.register("contents")} />
                    <ErrorDiv errorText={props.formState.errors.contents?.message} />
                    <I.EditButtonContainer>
                        <I.EditCancelButton onClick={props.onChangeVisible}>취소하기</I.EditCancelButton>
                        <I.EditSubmitButton>수정하기</I.EditSubmitButton>
                    </I.EditButtonContainer>
                </I.EditContainer>
            )}
        </I.Container>
    );
};

export default CommentItemUI;
