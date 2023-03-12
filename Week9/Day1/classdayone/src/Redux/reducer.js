const initState = {
  property_one: "prop one",
  prop_two: "prop two",
};

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case "PROP_ONE":
      return { ...state, property_one: action.payload };
    case "PROP_TWO":
      return { ...state, prop_two: action.payload };
    case "PROP_CHANGE":
      return { ...state, property_one: state.prop_two, prop_two: state.property_one};
    default:
      return { ...state };
  }
};
