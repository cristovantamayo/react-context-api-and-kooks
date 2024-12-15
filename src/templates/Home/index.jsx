import React from "react";
import { useCounterContext } from "../../contexts/CounterContext";

export const Home = () => {
  // eslint-disable-next-line
  const [state, dispatch] = useCounterContext();

  return (
    <div>
      <h1>Oi</h1>
    </div>
  );
};
