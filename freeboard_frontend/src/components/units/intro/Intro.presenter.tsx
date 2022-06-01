import * as S from "./Intro.style";
import { ChromePicker } from "react-color";
import { RightCircleOutlined } from "@ant-design/icons";

interface IIntroUIProps {
  onChangePickerVisible: () => void;
  pickerVisible: boolean;
  selectedColor: string;
  onPickedColor: (event: any) => void;
  onChangedColor: (event: any) => void;
  isDark: boolean;
}

const COLOR_ITEM = [
  { id: "#000000", title: "Black" },
  { id: "#800080", title: "Purple" },
  { id: "#E0FFFF", title: "LightCyan" },
  { id: "#A52A2A", title: "Brown" },
  { id: "#4169E1", title: "RoyalBlue" },
  { id: "#FFFACD", title: "LemonChiffon" },
];

const IntroUI = (props: IIntroUIProps) => {
  return (
    <S.IntroWrapper selectedColor={props.selectedColor}>
      <S.ColorCode>{props.selectedColor}</S.ColorCode>
      <S.MoveToPageButtonBox isDark={props.isDark} href="/home">
        <S.MoveToPageButton>HOME</S.MoveToPageButton>
        <RightCircleOutlined />
      </S.MoveToPageButtonBox>
      <S.IntroTitle isDark={props.isDark}>TO BE DEVELOPER.</S.IntroTitle>
      {props.pickerVisible ? (
        <S.ColorsBox>
          <ChromePicker color={props.selectedColor} onChange={props.onChangedColor} disableAlpha />
        </S.ColorsBox>
      ) : (
        <S.ColorsBox>
          {COLOR_ITEM.map((el) => (
            <S.ColorItem
              key={el.id}
              id={el.id}
              onClick={props.onPickedColor}
              isDark={props.isDark}
              selectedColor={props.selectedColor}
              title={el.title}
            />
          ))}
        </S.ColorsBox>
      )}
      <S.ChangePickerButton isDark={props.isDark} onClick={props.onChangePickerVisible}>
        Change Your Color
      </S.ChangePickerButton>
    </S.IntroWrapper>
  );
};

export default IntroUI;
