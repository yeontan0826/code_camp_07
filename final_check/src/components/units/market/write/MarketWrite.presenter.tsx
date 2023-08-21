import { Modal } from "antd";
import * as W from "./MarketWrite.style";
import { IMarketWriteUIProps } from "./MarketWrite.types";
import DaumPostcode from "react-daum-postcode";
import ErrorDiv from "../../../commons/typeface/error/ErrorDiv";
import UploadImg from "../../../commons/uploadImg/UploadImg";
import { v4 as uuidv4 } from "uuid";

const MarketWriteUI = (props: IMarketWriteUIProps) => {
    return (
        <W.Wrapper>
            <W.Title>상품 {props.isEdit ? "수정" : "등록"}</W.Title>
            <W.InputWrapper onSubmit={props.isEdit ? props.handleSubmit(props.onClickUpdate) : props.handleSubmit(props.onClickSubmit)}>
                <W.InputBox>
                    <W.InputTitle>상품명</W.InputTitle>
                    <W.WriteInputBox>
                        <W.WriteInput
                            type={"text"}
                            placeholder={"상품명을 작성해주세요"}
                            defaultValue={props.data?.fetchUseditem.name}
                            {...props.register("name")}
                        />
                        <ErrorDiv errorText={props.formState.errors.name?.message} />
                    </W.WriteInputBox>
                </W.InputBox>
                <W.InputBox>
                    <W.InputTitle>상품 요약</W.InputTitle>
                    <W.WriteInputBox>
                        <W.WriteInput
                            type={"text"}
                            placeholder={"상품요약을 작성해주세요"}
                            defaultValue={props.data?.fetchUseditem.remarks}
                            {...props.register("remarks")}
                        />
                        <ErrorDiv errorText={props.formState.errors.remarks?.message} />
                    </W.WriteInputBox>
                </W.InputBox>
                <W.InputBox style={{ alignItems: "self-start" }}>
                    <W.InputTitle>상품 내용</W.InputTitle>
                    <W.WriteInputBox>
                        <W.ContentsEditor onChange={props.onChangeContents} defaultValue={props.data?.fetchUseditem.contents} />
                        <ErrorDiv errorText={props.formState.errors.contents?.message} />
                    </W.WriteInputBox>
                </W.InputBox>
                <W.InputBox>
                    <W.InputTitle>판매 가격</W.InputTitle>
                    <W.WriteInputBox>
                        <W.WriteInput
                            type={"string"}
                            placeholder={"판매 가격을 입력해주세요"}
                            defaultValue={props.data?.fetchUseditem.price}
                            {...props.register("price")}
                        />
                        <ErrorDiv errorText={props.formState.errors.price?.message} />
                    </W.WriteInputBox>
                </W.InputBox>
                <W.InputBox>
                    <W.InputTitle>태그 입력</W.InputTitle>
                    <W.WriteInputBox>
                        <W.WriteInput
                            type={"text"}
                            placeholder={"#태그 #태그 #태그"}
                            defaultValue={props.data?.fetchUseditem.tags.join(" ")}
                            {...props.register("tags")}
                        />
                        <ErrorDiv errorText={props.formState.errors.tags?.message} />
                    </W.WriteInputBox>
                </W.InputBox>
                <W.LocationContainer>
                    <W.InputTitle>거래 위치</W.InputTitle>
                    <W.LocationBox>
                        <W.KakaoMap id="map" />
                        <W.LocationInputBox>
                            <W.ZipCodeBox>
                                <W.ZipCodeInput
                                    placeholder="07250"
                                    value={props.useditemAddress.zipcode}
                                    defaultValue={props.data?.fetchUseditem.useditemAddress.zipcode}
                                    readOnly
                                />
                                <W.SearchPostCodeButton type="button" onClick={props.postCodeModalToggle}>
                                    우편번호 검색
                                </W.SearchPostCodeButton>
                            </W.ZipCodeBox>
                            <W.WriteInput value={props.useditemAddress.address} defaultValue={props.data?.fetchUseditem.useditemAddress.address} readOnly />
                            <W.WriteInputBox>
                                <W.WriteInput
                                    type={"text"}
                                    defaultValue={props.data?.fetchUseditem.useditemAddress.addressDetail}
                                    {...props.register("addressDetail")}
                                />
                                <ErrorDiv errorText={props.formState.errors.addressDetail?.message} />
                            </W.WriteInputBox>
                        </W.LocationInputBox>
                    </W.LocationBox>
                </W.LocationContainer>
                <W.PhotoBox>
                    <W.InputTitle>사진첨부</W.InputTitle>
                    <W.PhotoListBox>
                        {props.imageUrls.map((url: string, index: number) => (
                            <UploadImg key={uuidv4()} index={index} imageUrl={url} onChangeFile={props.onChangeFile} />
                        ))}
                    </W.PhotoListBox>
                </W.PhotoBox>
                <W.BottomHr />
                <W.ButtonsContainer>
                    <W.CancelButton onClick={props.onMoveToBack}>취소</W.CancelButton>
                    <W.SubmitButton>{props.isEdit ? "수정" : "등록"}</W.SubmitButton>
                </W.ButtonsContainer>
            </W.InputWrapper>
            {props.postCodeModalVisible && (
                <Modal visible={true} onCancel={props.postCodeModalToggle}>
                    <DaumPostcode onComplete={props.onHandleComplete} />
                </Modal>
            )}
        </W.Wrapper>
    );
};

export default MarketWriteUI;
