import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    line-height: 75px;
    border-bottom: 2px solid black;
    font-size: 22px;
    font-weight: 600;
`;

export const InputWrapper = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    gap: 25px;
`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const InputTitle = styled.div`
    width: 250px;
    font-size: 17px;
    font-weight: normal;
`;

export const WriteInputBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const WriteInput = styled.input`
    width: 100%;
    background-color: #e9e9e9;
    height: 40px;
    border: none;
    padding: 0 10px;
    outline: none;
`;

export const ContentsEditor = styled(ReactQuill)`
    width: 100%;
    .ql-container {
        height: 400px;
    }
`;

export const LocationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const LocationBox = styled.div`
    display: flex;
    flex-direction: row;
    height: 250px;
    gap: 30px;
`;

export const KakaoMap = styled.div`
    width: 30%;
    height: 100%;
`;

export const LocationInputBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    gap: 20px;
`;

export const ZipCodeBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const ZipCodeInput = styled.input`
    width: 70px;
    height: 40px;
    outline: none;
    border: 1px solid #bdbdbd;
    padding: 0 10px;
    ::placeholder {
        color: #bdbdbd;
    }
`;

export const SearchPostCodeButton = styled.button`
    width: 100px;
    height: 40px;
    border: none;
    color: white;
    background-color: black;
    cursor: pointer;
`;

export const PhotoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const PhotoListBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
`;

export const PhotoImg = styled.img`
    width: 125px;
    height: 125px;
`;

export const BottomHr = styled.hr`
    width: 100%;
    height: 2px;
    background-color: black;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
`;

export const buttonStyle = styled.button`
    width: 150px;
    height: 50px;
    border: none;
    cursor: pointer;
`;

export const CancelButton = styled(buttonStyle)`
    background-color: #fee004;
`;

export const SubmitButton = styled(buttonStyle)`
    background-color: black;
    color: white;
`;
