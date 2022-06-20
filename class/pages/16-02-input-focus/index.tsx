import { useEffect, useRef } from "react";

const InputFocusPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("MOUNT");
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input type={"password"} ref={inputRef} />
    </div>
  );
};

export default InputFocusPage;
