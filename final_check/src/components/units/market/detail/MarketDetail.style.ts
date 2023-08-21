import { CloseOutlined, EditFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

export const TopContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
`;

export const ProductImg = styled.img`
    width: 350px;
    height: 350px;
`;

export const TopInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    gap: 10px;
`;

export const NameBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const SellerOptionsDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const EditIcon = styled(EditFilled)`
    font-size: 20px;
    color: #bdbdbd;
    cursor: pointer;
`;

export const DeleteIcon = styled(CloseOutlined)`
    font-size: 20px;
    color: #bdbdbd;
    cursor: pointer;
`;

export const PriceBox = styled.div`
    border-bottom: 2px solid black;
    padding: 5px 0;
`;

export const PriceSpan = styled.span`
    font-size: 24px;
`;

export const WonSpan = styled.span`
    font-size: 15px;
    margin-left: 5px;
`;

export const RemarksDiv = styled.div`
    font-size: 16px;
`;

export const HashtagBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    gap: 8px;
    flex-wrap: wrap;
`;

export const HashTag = styled.div`
    font-size: 1 3px;
    border-radius: 15px;
    background-color: #ffe004;
    padding: 0 10px;
`;

export const NoHashTag = styled.div`
    color: #bbbbbb;
    font-size: 14px;
    font-weight: normal;
`;

export const TopHr = styled.hr`
    height: 1px;
    width: 100%;
    background-color: #c0c0c0;
`;

export const ButtonsBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
`;

export const DetailButton = styled.button`
    border: none;
    height: 70px;
    font-size: 18px;
    font-weight: 500;
    color: white;
    gap: 10px;
    cursor: pointer;
`;

export const PickedBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

export const BottomContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

export const BottomTitleDiv = styled.div`
    line-height: 50px;
    font-size: 24px;
    font-weight: 600;
    border-bottom: 2px solid black;
`;

export const BottomColumnLine = styled.hr`
    height: 100%;
    width: 1px;
    border-width: 0;
    color: #000000;
    background-color: #000000;
`;

export const LeftContainer = styled.div`
    width: 700px;
    display: flex;
    flex-direction: column;
`;

export const ProductInfoContainer = styled.div`
    padding: 20px;
`;

export const ProductContents = styled.div`
    font-size: 16px;
    font-weight: normal;
`;

export const LocationBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 5px;
`;

export const LocationTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 16px;
    gap: 7px;
`;

export const LocationIcon = styled.img`
    height: 20px;
`;

export const KakaoMap = styled.div`
    width: 100%;
    height: 300px;
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const SellerProfileBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100px;
    padding: 0 10px;
    border-bottom: 1px solid #c4c4c4;
`;

export const SellerImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: gray;
`;

export const SellerName = styled.span`
    font-size: 18px;
    font-weight: normal;
    margin-left: 10px;
`;

export const CommentTitleDiv = styled(BottomTitleDiv)`
    margin-top: 50px;
`;
