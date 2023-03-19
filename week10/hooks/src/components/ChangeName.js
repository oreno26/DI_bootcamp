import { useContext } from "react";
import { AppContext } from "../App";






const ChangeName = (props) => {
    const {setName} = useContext(AppContext)

  return (
    <>
      <input onChange={(e)=>setName(e.target.value)}/>
    </>
  );
};

export default ChangeName;
