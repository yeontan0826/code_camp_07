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

export const BoardProfileBox = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;
`;

export const BoardProfileInnerBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

export const ProfileImg = styled.img`
  width: 55px;
`;

export const BoardWriter = styled.span`
  color: black;
  font-size: 20px;
`;

export const BoardCreatedAt = styled.span`
  color: #828282;
  font-size: 14px;
`;

export const FunctionImg = styled.img`
  width: 30px;
  margin-left: 12px;
  cursor: pointer;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export const ContentsTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

export const ContentsImg = styled.img`
  width: 100%;
  margin-top: 30px;
`;

export const Contents = styled.div`
  font-size: 18px;
  margin-top: 40px;
`;

export const YoutubeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 100px;
`;

export const YoutubeImg = styled.img`
  width: 500px;
`;

export const ThumbBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 100px;
`;

export const LikeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #a77ee9;
`;

export const DisLikeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  text-align: center;
  color: #828282;
`;

export const Thumb = styled.img`
  width: 24px;
  cursor: pointer;
`;

export const ThumbCount = styled.span`
  font-size: 18px;
  margin-top: 6px;
`;

export const PageSettingsBox = styled.div`
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 60px 0;
`;

export const PageSettingsButton = styled.button`
  margin: 10px;
  background-color: white;
  border: 1px solid #bdbdbd;
  padding: 12px 50px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    border: 1px solid #a77ee9;
    color: #a77ee9;
    transition: 0.5s;
  }
`;
