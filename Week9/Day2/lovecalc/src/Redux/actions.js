export const changeFName = (fname) => {
  return {
    type: "NAME",
    payload: fname,
  };
};

export const changeSName = (sname) => {
  return {
    type: "SNAME",
    payload: sname,
  };
};

export const result = (obj) =>{
    return{
        type:"RES",
        payload:obj
    }
}
