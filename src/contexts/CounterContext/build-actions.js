import * as actionTypes from "./actions-types";

export const buildActions = (dispatch) => {
  return {
    increment: () => dispatch({ type: actionTypes.INCREASE }),
    decrement: () => dispatch({ type: actionTypes.DECREASE }),
    reset: () => dispatch({ type: "CounterContext/RESET" }),
    setCounter: (payload) =>
      dispatch({ type: "CounterContext/SET_COUNTER", payload }),
    asyncIncreaseStart: () =>
      dispatch({ type: "CounterContext/ASYNC_INCREASE_START" }),
    asyncIncreaseEnd: () =>
      dispatch({ type: "CounterContext/ASYNC_INCREASE_END" }),
    asyncIncreaseError: () =>
      dispatch({ type: "CounterContext/ASYNC_INCREASE_ERROR" }),
  };
};