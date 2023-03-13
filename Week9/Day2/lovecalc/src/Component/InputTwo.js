import { connect } from "react-redux";
import { changeSName } from "../Redux/actions";

//onChange
const InputTwo = (props) => {
  return (
    <>
      <p>Partner name name here</p>
      <input onChange={props.changeName}  type="text" name="sname" placeholder={props.sname} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    sname: state.sname,
  };
};

const mapDispatchToProps = (dispatch) =>{
    return {
        changeName: (e) => dispatch(changeSName(e.target.value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputTwo);
