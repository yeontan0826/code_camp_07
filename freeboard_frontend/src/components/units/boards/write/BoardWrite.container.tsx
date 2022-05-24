import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps, IUpdateBoardInput } from "./BoardWrite.types";

const BoardWrite = (props: IBoardWriteProps) => {
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [isActive, setIsActive] = useState(false);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [address, setAddress] = useState("");
  const [youtube, setYoutube] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [youtubeError, setYoutubeError] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value) {
      setWriterError("");
    }
    setIsActive(event.target.value && password && title && contents !== "");
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value) {
      setPasswordError("");
    }
    setIsActive(writer && event.target.value && title && contents !== "");
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value) {
      setTitleError("");
    }
    setIsActive(writer && password && event.target.value && contents !== "");
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
    if (event.target.value) {
      setContentsError("");
    }
    setIsActive(writer && password && title && event.target.value !== "");
  };

  const onChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
    if (event.target.value) {
      setAddressError("");
    }
  };

  const onChangeYoutube = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutube(event.target.value);
    if (event.target.value) {
      setYoutubeError("");
    }
  };

  const onClickWrite = async () => {
    if (writer === "") setWriterError("작성자를 입력해주세요");
    if (password === "") setPasswordError("비밀번호를 입력해주세요");
    if (title === "") setTitleError("제목을 입력해주세요");
    if (contents === "") setContentsError("내용을 입력해주세요");
    if (youtube === "") setYoutube("링크를 입력해주세요");

    if (
      writer !== "" &&
      password !== "" &&
      title !== "" &&
      contents !== "" &&
      youtube !== ""
    ) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl: youtube,
              boardAddress: {
                zipcode: "",
                address,
                addressDetail: "",
              },
              images: "",
            },
          },
        });
        alert("게시글이 등록되었습니다.");
        router.push(`/boards/detail/${result.data.createBoard._id}`);
      } catch (error) {
        console.error(`!!!!!!   에러발생   !!!!!!\n${error}`);
      }
    }
  };

  const onClickUpdate = async () => {
    if (!title && !contents) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;

    try {
      await updateBoard({
        variables: {
          updateBoardInput,
          password,
          boardId: router.query.page,
        },
      });
      alert("게시글이 수정되었습니다.");
      router.push(`/boards/detail/${router.query.page}`);
    } catch (error) {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeAddress={onChangeAddress}
      onChangeYoutube={onChangeYoutube}
      onClickWrite={onClickWrite}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      isActive={props.isEdit ? true : isActive}
      data={props.data}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      addressError={addressError}
      youtubeError={youtubeError}
    />
  );
};

export default BoardWrite;
