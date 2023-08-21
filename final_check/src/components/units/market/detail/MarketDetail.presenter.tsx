import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { priceComma } from "../../../../commons/libraries/priceComma";
import Title from "../../../commons/typeface/title/Title";
import * as D from "./MarketDetail.style";
import { IMarketDetailUIProps } from "./MarketDetail.types";
import { v4 as uuidv4 } from "uuid";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { useRouter } from "next/router";
import Comment from "../comment/Comment";

const MarketDetailUI = (props: IMarketDetailUIProps) => {
    const router = useRouter();
    const { onMoveToPage } = useMoveToPage();

    return (
        <D.Wrapper>
            <D.TopContainer>
                <D.ProductImg
                    src={
                        props.data.fetchUseditem.images.length === 0 || props.data.fetchUseditem.images[0] === ""
                            ? "/images/market/detail/no_image_350.webp"
                            : `https://storage.googleapis.com/${props.data.fetchUseditem.images[0]}`
                    }
                />
                <D.TopInfoContainer>
                    <D.NameBox>
                        <Title text={props.data.fetchUseditem.name} />
                        <D.SellerOptionsDiv>
                            {props.userId?.fetchUserLoggedIn._id === props.data.fetchUseditem.seller._id && (
                                <>
                                    <D.EditIcon onClick={onMoveToPage(`/detail/${router.query.id}/edit`)} />
                                    <D.DeleteIcon onClick={props.onClickDelete} />
                                </>
                            )}
                        </D.SellerOptionsDiv>
                    </D.NameBox>
                    <D.PriceBox>
                        <D.PriceSpan>{priceComma(props.data.fetchUseditem.price)}</D.PriceSpan>
                        <D.WonSpan>원</D.WonSpan>
                    </D.PriceBox>
                    <D.RemarksDiv>{props.data.fetchUseditem.remarks}</D.RemarksDiv>
                    <D.HashtagBox>
                        {props.data.fetchUseditem.tags.length === 0 ? (
                            <D.NoHashTag>태그가 존재하지 않습니다.</D.NoHashTag>
                        ) : (
                            <>
                                {props.data.fetchUseditem.tags.map((tag: string) => (
                                    <D.HashTag key={uuidv4()}>{tag}</D.HashTag>
                                ))}
                            </>
                        )}
                    </D.HashtagBox>
                    <D.TopHr />
                    <D.ButtonsBox>
                        <D.DetailButton style={{ flexGrow: "1", backgroundColor: "#C9C9C9" }} onClick={props.onClickPick}>
                            <D.PickedBox>
                                {props.data.fetchUseditem.pickedCount > 0 ? <HeartFilled style={{ color: "#FFE004" }} /> : <HeartOutlined />}찜
                                {props.data.fetchUseditem.pickedCount}
                            </D.PickedBox>
                        </D.DetailButton>
                        {props.userId?.fetchUserLoggedIn._id !== props.data.fetchUseditem.seller._id && (
                            <>
                                <D.DetailButton style={{ flexGrow: "2", backgroundColor: "#A0A0A0" }} onClick={props.onClickBasket}>
                                    장바구니
                                </D.DetailButton>
                                <D.DetailButton style={{ flexGrow: "3", backgroundColor: "black" }} onClick={props.onClickBuying}>
                                    바로구매
                                </D.DetailButton>
                            </>
                        )}
                    </D.ButtonsBox>
                </D.TopInfoContainer>
            </D.TopContainer>
            <D.BottomContainer>
                <D.LeftContainer>
                    <D.BottomTitleDiv>상품정보</D.BottomTitleDiv>
                    <D.ProductInfoContainer>
                        <D.ProductContents
                            dangerouslySetInnerHTML={{
                                __html: String(props.data && props.data.fetchUseditem.contents),
                            }}
                        />
                        <D.LocationBox>
                            <D.LocationTitle>
                                <D.LocationIcon src="/images/icons/ic_location.webp" />
                                거래지역
                            </D.LocationTitle>
                            {props.isAddressNotNull ? <D.KakaoMap id="map" /> : <div>등록된 거래지역 정보가 없습니다.</div>}
                        </D.LocationBox>
                    </D.ProductInfoContainer>
                </D.LeftContainer>
                <D.BottomColumnLine />
                <D.RightContainer>
                    <D.BottomTitleDiv>상점정보</D.BottomTitleDiv>
                    <D.SellerProfileBox>
                        <D.SellerImg />
                        <D.SellerName>{props.data.fetchUseditem.seller.name}</D.SellerName>
                    </D.SellerProfileBox>
                    <D.CommentTitleDiv>댓글</D.CommentTitleDiv>
                    <Comment />
                </D.RightContainer>
            </D.BottomContainer>
        </D.Wrapper>
    );
};

export default MarketDetailUI;
