import { Component } from "react";
import "../App.css";


class Movies extends Component {
  constructor(){
    super();

    this.state = {
        movies: [],
      }
    }
  
    handleMovieFetch=()=>{
        fetch("https://ghibliapi.herokuapp.com/films")
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({
              movies: data,
              currentMovie: null,
            })
        })
      }
    
    componentDidMount = () => {
        this.handleMovieFetch();
    };

    handleDropdownChange = (event) => {
        let currentMovieObject = this.state.movies.find((movie) => {
          return movie.title === event.target.value;
        });
        this.setState({
            currentMovie: currentMovieObject,
        });
      };

  render(){

   let allMovies = this.state.movies.map((movie)=>{
        return (    
            <option>{movie.title}</option>
        )
    })  

    return(
        <div className="movies">
            <h1>Select a Movie</h1>
            <div>
                <select onChange={this.handleDropdownChange}>
                    <option></option>
                    {allMovies}
                </select>
        
                {  this.state.currentMovie ?
                <div>
                    <h3>Title: {this.state.currentMovie?.title}</h3>
                    <div>Release Date: {this.state.currentMovie?.release_date}</div>
                    <div>Release Date: {this.state.currentMovie?.description}</div>
                </div>
                : <h2>No movie selected</h2>}
            </div>
        </div>
    )
  }
}

export default Movies;