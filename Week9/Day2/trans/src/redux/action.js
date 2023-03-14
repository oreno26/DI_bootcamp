export const INSERT = "INSERT";
export const UPDATE = "UPDATE";
export const UPDATE_INDEX = "UPDATE_INDEX";
export const DELETE = "DELETE";

export const USERS = "USERS";

export const getUsers = () => (dispatch, getState) => {
    console.log(getState);
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: "USERS",
        payload: data,
      });
    });
};

// export const getUsers = (arr) => {
//   return {
//     type: "USERS",
//     payload: arr,
//   };
// };

export const insert_trx = (trx) => {
  return { type: "INSERT", payload: trx };
};

export const update_trx = (trx) => {
  return { type: "UPDATE", payload: trx };
};

export const update_index = (index) => {
  return {
    type: "UPDATE_INDEX",
    payload: index,
  };
};

export const delete_trx = (index) => {
  return { type: "DELETE", payload: index };
};
