import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../redux/counter/counterSlice";

function Counter() {
  const [amount, setAmount] = useState(0);
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "100px",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#7B8FA1",
          width: "400px",
          height: "500px",
        }}
      >
        <h1 style={{ fontSize: "100px", color: "white" }}>{countValue}</h1>

        <button
          style={{
            backgroundColor: "#CFB997",
            border: "none",
            color: "white",
            padding: "10px",
            margin: "10px",
            cursor: "pointer",
          }}
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          style={{
            backgroundColor: "#CFB997",
            border: "none",
            color: "white",
            padding: "10px",
            margin: "10px",
            cursor: "pointer",
          }}
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <br />
        <br />

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{
            padding: "10px",
            margin: "10px",
            width: "130px",
          }}
        />
        <button
          style={{
            backgroundColor: "#CFB997",
            border: "none",
            color: "white",
            padding: "10px",
            margin: "10px",
            cursor: "pointer",
          }}
          onClick={() => dispatch(incrementByAmount(amount))}
        >
          Increment by Amount
        </button>
      </div>
    </div>
  );
}

export default Counter;
