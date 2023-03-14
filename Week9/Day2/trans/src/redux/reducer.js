import { INSERT, UPDATE, DELETE, UPDATE_INDEX, USERS } from "./action";
import { addToLocalStorage, getFromLocalStorage } from "../storage/store";

const initState = {
  currentIndex: -1,
  list: getFromLocalStorage("transactions"),
  users: [],
};

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case "USERS":
      return { ...state, users: action.payload };
    case INSERT:
      //   state.list.push(action.payload);
      const newList = [...state.list];
      newList.push(action.payload);
      addToLocalStorage("transactions", [...state.list]);
      return { ...state, list: newList, currentIndex: -1 };
    case UPDATE:
      state.list[state.currentIndex] = action.payload;
      addToLocalStorage("transactions", [...state.list]);
      return { ...state, list: [...state.list], currentIndex: -1 };
    case DELETE:
      state.list.splice(action.payload, 1);
      addToLocalStorage("transactions", [...state.list]);
      return { ...state, list: [...state.list], currentIndex: -1 };
    case UPDATE_INDEX:
      return { ...state, currentIndex: action.payload };
    default:
      return { ...state };
  }
};
