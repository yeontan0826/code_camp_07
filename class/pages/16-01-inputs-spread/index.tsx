import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

const MyInput = styled.input`
  height: 30px;
  outline: none;
  border: 1px solid gray;
`;

const GraphqlMutationPage = () => {
  const [data, setData] = useState("");
  const [callGraphql] = useMutation(CREATE_BOARD);

  // Global State
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  // Key가 중복되니 spread 연산자를 이용
  const onChangeInputs = (event: any) => {
    // setWriter(event.target.value);
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const onClickGraphqlApi = async () => {
    const result = await callGraphql({
      variables: { ...inputs },
    });
    setData(result.data.createBoard.message);
  };

  return (
    <div>
      작성자: <MyInput type={"text"} id="writer" placeholder={"작성자"} onChange={onChangeInputs} />
      <br />
      제목: <MyInput type={"text"} id="title" placeholder={"제목"} onChange={onChangeInputs} />
      <br />
      내용: <MyInput type={"text"} id="contents" placeholder={"내용"} onChange={onChangeInputs} />
      <br />
      <div>{data}</div>
      <button onClick={onClickGraphqlApi}>GraphQL-API 요청하기</button>
    </div>
  );
};

export default GraphqlMutationPage;
