import React, { useEffect, useState } from "react";
import { useCounterContext } from "../../contexts/CounterContext";

export const Home = () => {
  // eslint-disable-next-line
  const [state, actions] = useCounterContext();

  useEffect(() => {
    actions.asyncIncreaseStart();
  }, [actions]);

  return (
    <div>
      <h1 onClick={() => actions.increase()}>+</h1>
    </div>
  );
};
