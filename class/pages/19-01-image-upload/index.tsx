import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");

  const [uploadFile] = useMutation(UPLOAD_FILE);

  // 이벤트 핸들러 함수
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    try {
      // 1. uploadFile API 요청하기(요청 결과 URL 받아오기)
      const result = await uploadFile({
        variables: {
          file,
        },
      });

      // 2. 요청 결과 URL을 state애 저장하기
      setImageUrl(result.data.uploadFile.url);
    } catch (error) {
      Modal.error({ content: "에러발생!!" });
    }
  };

  return (
    <div>
      <h1>이미지 업로드 연습하기</h1>
      {/* multiple 적용시 여러개 파일 한번에 업로드 */}
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl && `https://storage.googleapis.com/${imageUrl}`} />
    </div>
  );
}
