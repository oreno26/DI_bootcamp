import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Home = (props) => {
  const Posts = props.posts
  
  return (
    <>
      <h1>Home</h1>
      {Posts.map((elem,i) =>{
        return(
          <div key={elem.id} style={{border:'10px double red', margin:'10px'}}>
            <Link to={`/${elem.id}`}><h4 style={{color:'red'}}> {elem.title}</h4> </Link>
            <p>{elem.body}</p>
          </div>
        )
      })}
    </>
  );
};

const mapStateToProps = (state) =>{
  return{
    posts: state.Posts,
    
  }
}


export default connect(mapStateToProps)(Home)