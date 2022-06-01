import styled from "@emotion/styled";

export const DogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  margin: auto;
  padding: 80px;
`;
export const ChangeButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: #a77ee9;
  color: white;
  font-weight: bold;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    transition: 0.5s;
    background-color: #653780;
  }
`;

export const LoadingBox = styled.div`
  height: 400px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 30px;
`;

export const DogImg = styled.img`
  height: 400px;
  margin-top: 50px;
  border-radius: 20px;
`;
