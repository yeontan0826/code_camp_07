import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps, IUpdateBoardInput } from "./BoardWrite.types";

const BoardWrite = (props: IBoardWriteProps) => {
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [isWriteActive, setIsWriteActive] = useState(false);
  const [isEditActive, setIsEditActive] = useState(false);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [youtubeUrlError, setYoutubeUrlError] = useState("");

  /* Daum Post Code Start */
  const [postCodeModalVisible, setPostCodeModalVisible] = useState(false);

  const postCodeModalToggle = () => {
    setPostCodeModalVisible((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    postCodeModalToggle();
  };
  /* Daum Post Code End */

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value) {
      setWriterError("");
    }
    setIsWriteActive(
      Boolean(
        event.target.value &&
          password &&
          title &&
          contents &&
          zipcode &&
          addressDetail &&
          youtubeUrl
      )
    );
    setIsEditActive(
      Boolean(
        event.target.value ||
          password ||
          title ||
          contents ||
          zipcode ||
          addressDetail ||
          youtubeUrl
      )
    );
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value) {
      setPasswordError("");
    }
    setIsWriteActive(
      Boolean(
        writer && event.target.value && title && contents && zipcode && addressDetail && youtubeUrl
      )
    );
    setIsEditActive(
      Boolean(
        writer || event.target.value || title || contents || zipcode || addressDetail || youtubeUrl
      )
    );
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value) {
      setTitleError("");
    }
    setIsWriteActive(
      Boolean(
        writer &&
          password &&
          event.target.value &&
          contents &&
          zipcode &&
          addressDetail &&
          youtubeUrl
      )
    );
    setIsEditActive(
      Boolean(
        writer ||
          password ||
          event.target.value ||
          contents ||
          zipcode ||
          addressDetail ||
          youtubeUrl
      )
    );
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (event.target.value) {
      setContentsError("");
    }
    setIsWriteActive(
      Boolean(
        writer && password && title && event.target.value && zipcode && addressDetail && youtubeUrl
      )
    );
    setIsEditActive(
      Boolean(
        writer || password || title || event.target.value || zipcode || addressDetail || youtubeUrl
      )
    );
  };

  const onChangeZipcode = (event: ChangeEvent<HTMLInputElement>) => {
    setZipcode(event.target.value);
    if (event.target.value) {
      setAddressError("");
    }
    setIsWriteActive(
      Boolean(
        writer && password && title && contents && event.target.value && addressDetail && youtubeUrl
      )
    );
    setIsEditActive(
      Boolean(
        writer || password || title || contents || event.target.value || addressDetail || youtubeUrl
      )
    );
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
    if (event.target.value) {
      setAddressError("");
    }
    setIsWriteActive(
      Boolean(
        writer && password && title && contents && zipcode && event.target.value && youtubeUrl
      )
    );
    setIsEditActive(
      Boolean(
        writer || password || title || contents || zipcode || event.target.value || youtubeUrl
      )
    );
  };

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
    if (event.target.value) {
      setYoutubeUrlError("");
    }
    setIsWriteActive(
      Boolean(
        writer && password && title && contents && zipcode && addressDetail && event.target.value
      )
    );
    setIsEditActive(
      Boolean(
        writer || password || title || contents || zipcode || addressDetail || event.target.value
      )
    );
  };

  const onClickWrite = async () => {
    if (writer && password && title && contents && zipcode && addressDetail && youtubeUrl) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
              images: "",
            },
          },
        });
        Modal.success({
          title: "게시글 등록 완료",
          content: "게시글 등록이 완료되었습니다.",
          onOk() {
            router.push(`/boards/detail/${result.data.createBoard._id}`);
          },
        });
      } catch (error) {
        Modal.error({
          title: "비밀번호 오류",
          content: "비밀번호가 일치하지 않습니다.",
        });
      }
    }
  };

  const onClickUpdate = async () => {
    if (!title && !contents && !zipcode && !addressDetail && !youtubeUrl) {
      Modal.warning({
        content: "수정한 내용이 없습니다.",
      });
      return;
    }

    if (!password) {
      Modal.error({
        content: "비밀번호를 입력해주세요.",
      });
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (zipcode) updateBoardInput.zipecode = zipcode;
    if (addressDetail) updateBoardInput.addressDetail = addressDetail;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;

    try {
      await updateBoard({
        variables: {
          updateBoardInput,
          password,
          boardId: router.query.page,
        },
      });
      Modal.success({
        content: "게시글 수정이 완료되었습니다.",
        onOk() {
          router.push(`/boards/detail/${router.query.page}`);
        },
      });
    } catch (error) {
      Modal.error({
        title: "비밀번호 불일치",
        content: error,
      });
    }
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeZipcode={onChangeZipcode}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onClickWrite={onClickWrite}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      isWriteActive={isWriteActive}
      isEditActive={isEditActive}
      data={props.data}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      addressError={addressError}
      youtubeUrlError={youtubeUrlError}
      // Daum Post Code
      postCodeModalToggle={postCodeModalToggle}
      postCodeModalVisible={postCodeModalVisible}
      handleComplete={handleComplete}
      zipcode={zipcode}
      address={address}
    />
  );
};

export default BoardWrite;
