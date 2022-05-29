import * as S from "./LayoutHeader.style";

const LayoutHeaderUI = () => {
  return (
    <S.HeaderWrapper>
      <a href="/boards/list">
        <img src="/image/header/logo.svg" />
      </a>
      <S.HeaderSpan href="">LOGIN</S.HeaderSpan>
    </S.HeaderWrapper>
  );
};

export default LayoutHeaderUI;
