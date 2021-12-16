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

    handleShowHide=(event)=>{
        this.setState({
            display: event.target.checked,
        })
    }
    
    componentDidMount=()=>{
        this.handleLocationFetch();
    }

  render(){
    let allLocations = this.state.locations.map((location)=>{
        return (
            <h3>Name: {location.name}</h3>
        )
    })    


    return(
      <div className="locations">
            <h1>List of Locations</h1>

            <button>Show/Hide</button>
            <input 
                type="checkbox" 
                onChange={this.handleShowHide}
                checked={this.state.display}
             />

            { this.state.display && 
                <div>{allLocations}</div>
            }

            { !this.state.display && 
                <div>Thing is hidden</div>
            }



            {/* <button type="button"
                onClick={this.handleShowHide}
                value="Show Locations"
            >{allLocations}
            </button>

            { this.state.display && 
                <div>
                    <button 
                        type="button"
                        onClick={this.handleShowHide}
                        value="Show the Locations">
                    </button>
                    <div>show/hide</div>
                </div>
            }

            { !this.state.display && 
                <div>
                    <button 
                        type="button"
                        onChange={this.handleShowHide}
                        value="Hide the Locations">
                            Hide the Locations
                    </button>
                    <div>Nothing</div>
                </div>
            } */}            
      </div>
    )
  }
}

export default Locations;