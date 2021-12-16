import { Component } from "react";
import "../App.css";

class Locations extends Component {
  constructor(){
    super();

    this.state = {
      locations: [],
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
    
    componentDidMount=()=>{
        this.handleLocationFetch();
    }

  render(){
    let allLocations = this.state.locations.map((location)=>{
        return (
            <div>Name: {location.name}</div>
        )
    })    


    return(
      <div className="locations">
          <h1>Hello, Locations page!</h1>
          {allLocations}
      </div>
    )
  }
}

export default Locations;