import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT: {
      state.count++;
      return { ...state };
    }
    case COUNTER_DECREMENT: {
      state.count--;
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
