import { connect, useDispatch } from "react-redux";
import { useParams,Link } from "react-router-dom";
import { useState, useEffect, } from "react";
import { remove } from "../Redux/Actions";

const Post = (props) =>{
    const params = useParams()
    const ident = params.id -1
    const post = props.post[params.id -1]
    const dispatch = useDispatch();
const Remove = () =>{
    console.log(ident);
}

    return(
        <div style={{border:'10px red solid', padding:'10px'}}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button onClick={()=>dispatch(remove(ident))}><Link to={"/Home"}>REMOVE Post</Link>.</button>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
     post: state.Posts
    }
}


export default connect(mapStateToProps)(Post)