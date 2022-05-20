import styled from "@emotion/styled";
import { IWriteInputProps } from "./BoardWrite.types";

export const WriteInput = styled.input`
  width: 100px;
  height: 30px;
  background-color: ${(props: IWriteInputProps) => props.backgroundColor };
`