import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

export const PencilIcon = styled.img``;

export const Button = styled.button`
  width: 170px;
  height: 50px;
  border: none;
  background-color: #a77ee9;
  transition: 0.5s;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  :hover {
    transition: 0.5s;
    background-color: #653780;
  }
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  font-size: 14px;
  font-weight: bold;
  line-height: 52px;
  border-bottom: 1px solid gray;
`;

export const BoardsRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  transition: 0.5s;
  font-size: 14px;
  line-height: 52px;
  border-bottom: 1px solid gray;
  :hover {
    transition: 0.5s;
    background-color: #f9eefe;
    font-weight: bold;
  }
  cursor: pointer;
`;

export const ColumnHeaderNumber = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 60%;
  text-align: center;
`;

export const columnHeaderWriter = styled.div`
  width: 15%;
  text-align: center;
`;

export const ColumnHeaderDate = styled.div`
  width: 15%;
  text-align: center;
`;

export const ColumnNumber = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 60%;
  padding-left: 30px;
`;

export const columnWriter = styled.div`
  width: 15%;
  text-align: center;
`;

export const columnDate = styled.div`
  width: 15%;
  text-align: center;
`;
