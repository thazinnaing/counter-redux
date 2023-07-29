import React from "react";
import { useDispatch } from "react-redux";
import { incrementAction, decrementAction, resetAction } from "../Action";
import "./CounterInput.css";

const CounterInput=()=>{
    const dispatch=useDispatch();

    return(
        <>
        <button onClick={() => dispatch(incrementAction())}>+</button>
        <button onClick={() => dispatch(decrementAction())}>-</button>
        <button onClick={() => dispatch(resetAction())}>Reset</button>
        </>
    )

}

export default CounterInput;