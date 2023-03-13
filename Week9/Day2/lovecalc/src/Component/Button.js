import { connect } from "react-redux";
import { result } from "../Redux/actions";
const Button = (props) =>{
 
    const fetcher = () =>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '643f68b632mshf54ed8fea642e08p1b6834jsnb43374ff64d1',
                'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
            }
        };
        fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${props.sname}&fname=${props.fname}`, options)
        .then(response => response.json())
        .then(data => props.results(data))
        .catch(err => console.error(err));
    }

    return(
        <button onClick={fetcher}>Press For Results</button>
    )
}

const mapStateToProps = (state) =>{
    return{
        fname: state.fname,
        sname: state.sname
    }

}

const mapDispatchToProps = (dispatch) =>{
return {
    results: (obj) => dispatch(result(obj))
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)