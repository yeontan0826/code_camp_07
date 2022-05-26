import { useState } from "react";

const CounterStatePage = () => {

    const [state, setState] = useState(0);

    const sumAll = () => {
        setState((prev) => prev + 1);
        setState((prev) => prev + 1);
        setState((prev) => prev + 1);
        setState((prev) => prev + 1);
    }

    return(
        <>
            <div>결과는: {state}</div>
            <button onClick={sumAll}>실행!</button>
        </>
    )
}

export default CounterStatePage