import { Modal } from "antd";

// 파일이 없을수도 있기때문에 '?' 삽입
export const checkFileValidation = (file?: File) => {
  // 파일 존재 여부 검증
  if (!file?.size) {
    Modal.error({ content: "파일이 없습니다." });
    return false;
  }

  // 파일 사이즈 검증
  if (file.size > 5 * 1024 * 1024) {
    Modal.error({ title: "용량 초과", content: `용량이 너무 큽니다.\n5MB 이하 사이즈의 이미지를 업로드 해주세요.` });
    return false;
  }

  // 파일 확장자 검증
  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    Modal.error({ title: "확장자 오류", content: "jpeg 또는 png 파일만 업로드 가능합니다." });
    return false;
  }
  return true;
};
