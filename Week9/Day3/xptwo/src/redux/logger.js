export const logger = (store) => (next) => (action) => {
  
  next(action);
  const Age = store.getState().age;

  console.log(`youre age is ${Age}`);

};
