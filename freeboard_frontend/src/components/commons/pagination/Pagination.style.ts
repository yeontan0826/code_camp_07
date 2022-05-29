import styled from "@emotion/styled";

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
`;

export const pageArrow = styled.span`
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;
`;

export const FirstPageArrow = styled(pageArrow)`
  margin-right: 10px;
  display: ${(props: { isFirst: boolean }) => (props.isFirst ? "none" : "block")};
`;

export const LastPageArrow = styled(pageArrow)`
  margin-left: 10px;
  display: ${(props: { isLast: boolean }) => (props.isLast ? "none" : "block")};
`;

export const PrevArrow = styled(pageArrow)`
  margin-right: 10px;
  display: ${(props: { isFirst: boolean }) => (props.isFirst ? "none" : "block")};
`;

export const NextArrow = styled(pageArrow)`
  margin-left: 10px;
  display: ${(props: { isLast: boolean }) => (props.isLast ? "none" : "block")};
`;

export const PageNum = styled.span`
  height: 25px;
  font-size: 16px;
  line-height: 16px;
  margin: 0 8px;
  cursor: pointer;
  transition: 0.5s;
  border-bottom: ${(props: { isSelected: boolean }) =>
    props.isSelected ? "2px solid purple" : "none"};
  color: ${(props: { isSelected: boolean }) => (props.isSelected ? "purple" : "black")};
  :hover {
    transition: 0.5s;
    color: purple;
  }
`;
