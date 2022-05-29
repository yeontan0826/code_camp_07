import styled from "@emotion/styled";

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 70px;
  padding: 0 100px;
  background-color: white;
  box-shadow: 0 1px 10px 0 #cccccc;
`;

export const NavigationItem = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  color: black;
  padding: 0 30px;
  margin: 0 10px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    transition: 0.5s;
    color: purple;
  }
`;
