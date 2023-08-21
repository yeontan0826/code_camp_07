import styled from "@emotion/styled";
import { ChangeEvent, useRef } from "react";

interface IUploadImgPrps {
    index: number;
    imageUrl: string;
    onChangeFile: (number: number) => (event: ChangeEvent<HTMLInputElement>) => void;
}

const UploadImg = (props: IUploadImgPrps) => {
    const inputRef = useRef();

    const handleFileButton = () => {
        inputRef.current?.click();
    };

    return (
        <>
            <PhotoImg src={props.imageUrl ? props.imageUrl : "/images/market/write/upload_image.webp"} onClick={handleFileButton} />
            <input style={{ display: "none" }} type={"file"} onChange={props.onChangeFile(props.index)} ref={inputRef} />
        </>
    );
};

export default UploadImg;

const PhotoImg = styled.img`
    width: 125px;
    height: 125px;
    cursor: pointer;
`;
