import { useEffect, useState } from "react";
import IntroUI from "./Intro.presenter";

const Intro = () => {
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [isDark, setIsDark] = useState(false);

  const [pickerVisible, setPickerVisible] = useState(false);

  const onChangePickerVisible = () => {
    setPickerVisible((prev) => !prev);
  };

  const onPickedColor = (event: any) => {
    setSelectedColor(event.target.id);
  };

  const onChangedColor = (color: any) => {
    setSelectedColor(color.hex);
  };

  useEffect(() => {
    isColorDark(selectedColor);
  }, [selectedColor]);

  const isColorDark = (hexColor: string) => {
    const c = hexColor.substring(1);
    const rgb = parseInt(c, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    setIsDark(luma < 127.5);
  };

  return (
    <IntroUI
      onChangePickerVisible={onChangePickerVisible}
      pickerVisible={pickerVisible}
      selectedColor={selectedColor}
      onPickedColor={onPickedColor}
      onChangedColor={onChangedColor}
      isDark={isDark}
    />
  );
};

export default Intro;
