import { Link } from "react-router-dom"

const BTN = (props) =>{
  const q = `/search/${props.inp}`;
  console.log(props);
    return (
      
        <button>
          <Link to={q}>search</Link>
        </button>
    )
}

export default BTN