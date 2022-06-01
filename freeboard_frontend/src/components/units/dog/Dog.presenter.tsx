import * as S from "./Dog.style";

const DogUI = (props: { onClickButton: () => void; dogUrl: string }) => {
  return (
    <S.DogWrapper>
      <S.ChangeButton onClick={props.onClickButton}>이미지 변경</S.ChangeButton>
      {props.dogUrl ? (
        <S.DogImg src={props.dogUrl} title={props.dogUrl} />
      ) : (
        <S.LoadingBox>Loading...</S.LoadingBox>
      )}
    </S.DogWrapper>
  );
};

export default DogUI;
