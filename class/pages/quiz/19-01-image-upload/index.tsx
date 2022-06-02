import { LikeOutlined } from "@ant-design/icons";
import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const MyInput = styled.input`
  width: 150px;
  height: 30px;
  margin-bottom: 10px;
  border: 1px solid gray;
  padding: 0 5px;
`;

const ImageUploadPage = () => {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });

      console.log(result.data.uploadFile.url);
      setImageUrl(result.data.uploadFile.url);
    } catch (error) {
      Modal.error({ content: "이미지 업로드 에러 발생!!" });
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onClickRequest = async () => {
    if (!inputs.writer && !inputs.password && !inputs.title && !inputs.contents) {
      Modal.error({ content: "모든 입력창을 입력해주세요" });
      return;
    }

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...inputs,
            images: [imageUrl],
          },
        },
      });
      console.log(result);
      Modal.success({ content: "성공적으로 저장하였습니다." });
    } catch (error) {
      Modal.error({ content: "저장 에러 발생!!!!" });
    }
  };

  return (
    <div style={{ marginLeft: "50px" }}>
      작성자: <MyInput id="writer" onChange={onChangeInputs} />
      <br />
      비밀번호: <MyInput id="password" type={"password"} onChange={onChangeInputs} />
      <br />
      제목: <MyInput id="title" onChange={onChangeInputs} />
      <br />
      내용: <MyInput id="contents" onChange={onChangeInputs} />
      <br />
      <button onClick={onClickRequest}>저장하기</button>
      <input type={"file"} ref={fileRef} style={{ display: "none" }} onChange={onChangeFile} />
      <LikeOutlined style={{ marginTop: "20px", cursor: "pointer", fontSize: "60px" }} onClick={onClickImage} />
      <img src={imageUrl && `https://storage.googleapis.com/${imageUrl}`} />
    </div>
  );
};

export default ImageUploadPage;
