const initState = {
  age: 20,
};

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case "OLDER":
      return { ...state, age: state.age + 1 };
    case "YOUNGER":
      return { ...state, age: state.age - 1 };
    default:
      return { ...state };
  }
};
