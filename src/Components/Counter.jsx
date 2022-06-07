import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, substract } from "../Redux/action";

const Counter = () => {
  const dispatch = useDispatch(); // This useDispatch is used to call reducer function in other component
  const count = useSelector((state) => state.count); ///This useSelectore take initial value of state and updated state
  return (
    <div>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={() => dispatch(add())}>-</button>
        <button onClick={() => dispatch(substract())}>+</button>
      </div>
    </div>
  );
};

export default Counter;
