import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ComponentLifecyclePage = () => {
  const router = useRouter();
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    // componentDidMount - onStart
    Modal.warning({ content: "Rendered!" });

    // componentWillUnMount - onDestroy
    return () => {
      Modal.warning({ content: "Bye!!" });
    };
  }, []);

  // componentDidUpdate - 변경에 의한 re-rendering
  useEffect(() => {
    Modal.warning({ content: "Changed!!" });
  }, [isChange]);

  const onChangeState = () => {
    setIsChange((prev) => !prev);
  };

  const onClickToMove = () => {
    router.push("/");
  };

  return (
    <div>
      <button onClick={onChangeState}>변경</button>
      <button onClick={onClickToMove}>이동</button>
    </div>
  );
};

export default ComponentLifecyclePage;
