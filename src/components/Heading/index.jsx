import P from "prop-types";
import React from "react";
import { useCounterContext } from "../../contexts/CounterContext";

export const Heading = () => {
  const [state, actions] = useCounterContext();
  return <h1 style={{ fontSize: "60px" }}>{state.counter}</h1>;
};

Heading.propTypes = {
  children: P.node.isRequired,
};
