// 스크립트 컴포넌트
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";

const BoardWrite = () => {
  const [isActive, setIsActive] = useState(false);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [data, setData] = useState("");
  const [callGraphql] = useMutation(CREATE_BOARD);

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (writer && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (writer && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickGraphqlApi = async () => {
    if (!writer) {
      alert("작성자를 입력해주세요");
      return;
    }
    if (!title) {
      alert("제목을 입력해주세요");
      return;
    }
    if (!contents) {
      alert("내용을 입력해주세요");
      return;
    }

    try {
      // const result = await axios.get("https://koreanjson.com/posts/1")
      const result = await callGraphql({
        variables: {
          writer,
          title,
          contents,
        },
      });

      console.log(result);
      setData(result.data.createBoard.message);
    } catch (error) {
      console.error(`!!!!! 에러발생 !!!!!\n${error}`);
    }
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickGraphqlApi={onClickGraphqlApi}
      data={data}
      isActive={isActive}
    />
  );
};

export default BoardWrite;
