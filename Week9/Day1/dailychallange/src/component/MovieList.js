import { connect, Connect } from "react-redux"
import { movieSelect } from "../redux/action"



function MovieList (props){
    return(
        <ul>
        {props.movie.map((elem,)=>{
           return (
           <>
           <li>{elem.title}</li>
           <button onClick={() => props.dispatch({type:'SELECT', payload: elem})}>MORE INFO</button>
           </>
           )
        })}
        </ul>
    )
}

const mapStateToProps = (state) =>{
    return{
      movie: state.movies
    }
  }



export default connect(mapStateToProps)(MovieList)