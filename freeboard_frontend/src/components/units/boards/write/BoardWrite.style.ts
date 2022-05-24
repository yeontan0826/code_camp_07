import styled from "@emotion/styled";
import { IStyleProps } from "./BoardWrite.types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 200px;
  background-color: gray;
  text-align: center;
  font-weight: bold;
`;

export const Container = styled.div`
  margin: auto;
  padding: 50px 0;
`;

export const Box = styled.div`
  width: 1000px;
  background-color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 50px 80px;
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 40px;
  color: black;
  font-weight: 500;
  font-size: 25px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const InputColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 410px;
`;

export const Label = styled.div`
  color: black;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  border: 1px solid #bdbdbd;
  height: 35px;
  padding: 0 10px;
  outline: none;
  margin-bottom: 10px;
`;

export const InputArea = styled.input`
  height: 200px;
  border: 1px solid #bdbdbd;
  padding: 0 10px;
  outline: none;
  resize: none;
  padding: 12px;
  font-size: 15px;
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 14px;
`;

export const AddressBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;
export const AddressInput = styled.input`
  width: 80px;
  border: 1px solid #bdbdbd;
  height: 35px;
  text-align: center;
  padding: 0 10px;
  outline: none;
`;
export const AddressFindButton = styled.button`
  width: 110px;
  height: 35px;
  border: none;
  margin-left: 10px;
  cursor: pointer;
  background-color: black;
  color: white;
`;
export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;
export const PhotoBox = styled.div`
  width: 78px;
  height: 78px;
  margin-right: 10px;
  background-color: #bdbdbd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PhotoText = styled.div`
  color: #4f4f4f;
`;

export const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 45px;
  background-color: gray;
  color: white;
  border: none;
  margin: auto;
  cursor: ${(props: IStyleProps) => (props.isActive ? "pointer" : "default")};
  background-color: ${(props) => (props.isActive ? "#FFD600" : "gray")};
`;
