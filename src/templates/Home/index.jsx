import React, { useEffect } from "react";
import { useCounterContext } from "../../contexts/CounterContext";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";

export const Home = () => {
  // eslint-disable-next-line
  const [state, actions] = useCounterContext();

  useEffect(() => {
    actions.asyncIncreaseStart();
  }, [actions]);

  return (
    <div>
      <Heading />
      <div>
        <Button onButtonClick={actions.increase}>+Increase</Button>
      </div>
    </div>
  );
};
