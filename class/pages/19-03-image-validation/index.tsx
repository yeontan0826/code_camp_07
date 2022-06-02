import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import { checkFileValidation } from "../../src/commons/libraries/fileValidation";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  // useRef() => 특정 태그를 가르키는 함수(태그를 변수에 넣는다고 생각하면 됨)
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);

  // 이벤트 핸들러 함수
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    // files는 있을수도 있고, 없을수도 있기때문에 옵셔널 체이닝을 사용
    const file = event.target.files?.[0];
    console.log(file);

    // 사진파일 검증
    const isValid = checkFileValidation(file);
    if (!isValid) return;

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

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <div>
      <h1>이미지 업로드 연습하기</h1>
      {/* multiple 적용시 여러개 파일 한번에 업로드 */}
      <div style={{ width: "50px", height: "50px", backgroundColor: "gray", cursor: "pointer" }} onClick={onClickImage}>
        이미지 선택
      </div>
      {/* accept="image/jpeg 속성을 사용하면 애초에 사진을 선택하는 창에서 jpeg파일만 고르게 보여준다" */}
      <input style={{ display: "none" }} type="file" ref={fileRef} onChange={onChangeFile} />
      <img src={imageUrl && `https://storage.googleapis.com/${imageUrl}`} />
    </div>
  );
}
