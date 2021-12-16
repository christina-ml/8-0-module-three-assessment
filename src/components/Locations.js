import { Component } from "react";
import "../App.css";

class Locations extends Component {
  constructor(){
    super();

    this.state = {
      locations: [],
      display: false,
    }
  }

  handleLocationFetch=()=>{
      fetch("https://ghibliapi.herokuapp.com/locations")
      .then((res)=> res.json())
      .then((data)=>{
          this.setState({
            locations: data,
          })
      })
    }

    handleShowHide=()=>{
        this.setState({
            display: !this.state.display,
        })
    }
    
    componentDidMount=()=>{
        this.handleLocationFetch();
    }

  render(){
    let allLocations = this.state.locations.map((location)=>{
        return (
            <li>
                <h2>Name: {location.name}</h2>
                <h2>Climate: {location.climate}</h2>
                <h2>Terrain: {location.terrain}</h2>
            </li>
        )
    })    


    return(
      <div className="locations">
            <h1>List of Locations</h1>

            <button onClick={this.handleShowHide}>
                {this.state.display ? "Hide Locations" : "Show Locations"}
            </button>

            { this.state.display && 
                <ul>{allLocations}</ul>
            }

            { !this.state.display && 
                <div></div>
            }          
      </div>
    )
  }
}

export default Locations;