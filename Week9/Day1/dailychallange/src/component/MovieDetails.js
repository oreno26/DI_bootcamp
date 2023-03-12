import { connect, Connect } from "react-redux";

function MovieDetails(props) {
  console.log(props);
  if (!props.selectedMovie ) {
    return (<div>SELECT A FIlM</div>);
  } else {
    return (
      <>
        <div>MOVIE</div>
        <p>title: {props.selectedMovie.title}</p>
        <p>relese Date: {props.selectedMovie.releaseDate}</p>
        <p>Rating: {props.selectedMovie.rating}</p>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps)(MovieDetails);
