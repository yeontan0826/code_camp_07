import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

export const HeaderSpan = styled.a`
  font-size: 16px;
  font-weight: 600;
  color: black;
  cursor: pointer;
  :hover {
    color: purple;
  }
`;
