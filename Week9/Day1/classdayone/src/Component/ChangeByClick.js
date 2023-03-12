import { connect } from "react-redux"
//
import { changeOneToTwo } from "../Redux/actions"


const ChangeByClick = (props) =>{
    return(
        <div>
            <button onClick={() => props.dispatch({type:'PROP_CHANGE'})}>change Prop one to prop two</button>
        </div>
    )
}


// const mapDispatchToProps = (dispatch) =>{
//     return{
//         changeOne: () => dispatch(changeOneToTwo())
//     }

// }

export default connect()(ChangeByClick)