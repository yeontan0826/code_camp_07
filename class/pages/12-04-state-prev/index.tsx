import { useState } from "react";

const CounterStatePage = () => {
    const [count, setCount] = useState(0);

    const counter = () => {
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    };

    return (
        <div>
            <div>{count}</div>
            <button onClick={counter}>카운트 올리기!!</button>
        </div>
    );
};

export default CounterStatePage;
