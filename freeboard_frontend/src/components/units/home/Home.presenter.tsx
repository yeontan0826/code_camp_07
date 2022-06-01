import * as S from "./Home.style";

const HomeUI = () => {
  return (
    <S.MainWrapper>
      <div
        style={{
          textAlign: "center",
          height: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          fontSize: "30px",
        }}
      >
        HOME PAGE
      </div>
    </S.MainWrapper>
  );
};

export default HomeUI;
