import React from "react";
import { useState } from "react";

export default function Count() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter+1);
        setCounter(prevCounter=>prevCounter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={()=>increment()}>+1</button>
            <button onClick={()=>decrement()}>-1</button>
        </div>
    );
}