const initState = {
  fname: "<3 ",
  sname: "<3 ",
  percentage: "",
  result: "",
};

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case "NAME":
      console.log(action.payload);
      return { ...state, fname: action.payload };
    case "SNAME":
      console.log(action.payload);
      return { ...state, sname: action.payload };
    case "RES":
        console.log(action.payload)
        return{...state = action.payload};  
    default:
      return { ...state };
  }
};
