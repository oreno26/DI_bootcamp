const initState = {
  counter: 0,
  title: "COUNTER",
  startBtn: "reset"
};

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case "ADD":
      return { ...state, counter: state.counter + 1 };
    case "REDUCE":
      return { ...state, counter: state.counter - 1 };
    case "RESET":
      return { ...state, counter: 0 };
    default:
      return { ...state };
  }
};
