import * as S from "./LayoutNavigation.style";

const LayoutNavigationUI = () => {
  return (
    <S.NavigationWrapper>
      <S.NavigationItem>홈</S.NavigationItem>
      <S.NavigationItem href="/boards/list">자유게시판</S.NavigationItem>
      <S.NavigationItem>고객센터</S.NavigationItem>
    </S.NavigationWrapper>
  );
};

export default LayoutNavigationUI;
