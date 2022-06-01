import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

interface IColorItem {
  id: string;
  selectedColor: string;
  isDark: boolean;
}

const FadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1}  
`;

const bounce = keyframes`
  from, 10%, 53%, 70%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

export const IntroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  animation: ${FadeIn} 4s ease-in;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props: { selectedColor: string }) => props.selectedColor};
`;

export const ColorCode = styled.div`
  position: absolute;
  font-size: 19vw;
  font-weight: bold;
  opacity: 0.07;
`;

export const MoveToPageButtonBox = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  margin: 30px;
  font-size: 30px;
  align-items: center;
  cursor: pointer;
  color: ${(props: { isDark: boolean }) => (props.isDark ? "white" : "black")};
  transition: 0.5s;
  :hover {
    transition: 0.5s;
    font-weight: bold;
    color: ${(props: { isDark: boolean }) => (props.isDark ? "white" : "black")};
  }
`;

export const MoveToPageButton = styled.span`
  margin-right: 6px;
`;

export const IntroTitle = styled.div`
  font-size: 120px;
  color: black;
  font-weight: bold;
  color: ${(props: { isDark: boolean }) => (props.isDark ? "white" : "black")};
  z-index: 1;
`;

export const ColorsBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  z-index: 1;
`;

export const ColorItem = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  margin: 0 12px;
  cursor: pointer;
  background-color: ${(props: IColorItem) => props.id};
  border: ${(props: IColorItem) => (props.id === props.selectedColor ? "2px solid" : "none")};
  border-color: ${(props: IColorItem) => (props.isDark ? "white" : "black")};
  :hover {
    animation: ${bounce} 1s ease infinite;
  }
`;

export const ChangePickerButton = styled.button`
  width: 200px;
  height: 60px;
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;
  border: 1px solid black;
  margin-top: 60px;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.5s;
  border: 2px solid ${(props: { isDark: boolean }) => (props.isDark ? "white" : "black")};
  color: ${(props: { isDark: boolean }) => (props.isDark ? "white" : "black")};
  z-index: 1;
  :hover {
    font-weight: bold;
    color: ${(props: { isDark: boolean }) => (props.isDark ? "white" : "black")};
  }
`;
