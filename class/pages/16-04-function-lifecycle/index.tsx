import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CounterPage() {
  const router = useRouter();
  const [count, setCount] = useState(99);

  // render되고 한번은 무조건 실행
  // 의존성 배열안에 있는 것에 따라 다시 실행될수도 있음
  useEffect(() => {
    // componentDidMount
    console.log("마운트됨!!!");
  }, []); // []는 의존성 배열(dependency array)

  // 처음에 한번은 실행됨
  useEffect(() => {
    // componentDidUpdate
    console.log("수정되고 다시그려짐!!!");
  }, [count]);

  useEffect(() => {
    // componentWillUnmount
    return () => {
      console.log("컴포넌트 사라짐!!!");
      // 채팅방 나가기
      // api 요청!!!
    };
  }, []);

  // 2개를 하나도 합칠 수 있다
  // useEffect(() => {
  //   // componentDidMount
  //   console.log("마운트됨!!!");

  //   // componentWillUnmount
  //   return () => {
  //     console.log("컴포넌트 사라짐!!!");
  //     // 채팅방 나가기
  //     // api 요청!!!
  //   };
  // }, []);

  // 1. useEffect의 잘못된 사용 예제
  // 처음 시작할때 componentDidMount 실행되면서 rendering하는데 여기에서
  // setCount로 변동사항이 있어서 state 변경으로 re-rendering으로 시작하자마자 2번 실행됨
  // useEffect(() => {
  //   setCount(10);
  // }, []);

  // 2. useEffect의 잘못된 사용 예제
  // 무한 루프
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);

  const onClickCounter = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <div>
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!!</button>
      <button onClick={onClickMove}>나가기!!!</button>
    </div>
  );
}
