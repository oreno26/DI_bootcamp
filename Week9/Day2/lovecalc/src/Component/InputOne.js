import { connect } from "react-redux"
import { changeFName } from "../Redux/actions"


//onChange
const InputOne = (props) =>{
    return(
        <>
        <p>your name</p>
        <input onChange={props.changeName}  type="text" name="fname" placeholder={props.fname}/>
        </>
    )

}

const mapStateToProps = (state) =>{
    return{
        fname: state.fname
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
     changeName: (e) => dispatch(changeFName(e.target.value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputOne)