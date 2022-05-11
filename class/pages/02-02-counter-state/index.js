import { useState } from 'react';

export default function CounterStatePage() {

    const[count, setCount] = useState(0);

    const increase = () => { setCount(count + 1) };
    const decrease = () => { if(count !== 0) setCount(count - 1) };

    return (
        <div>
            <div>{count}</div>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}