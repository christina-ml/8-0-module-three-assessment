import { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "../App.css";

class Locations extends Component {
  constructor(){
    super();

    this.state = {
      locations: [],
      display: true,
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

        {/* <Switch>
          <Route exact path="/locations/">
            <Redirect to="/locations/show" />
          </Route>

          <Route path="/locations/show">
          </Route>

          <Route path="/locations/hide">
          </Route>
        </Switch> */}


            {/* <div className="all-locations">
            <ul>
                <li>
                    <button>See All Locations ({allLocations.length})</button>
                    <div>hello locations</div>
                </li>
                <li>
                    <button>Hide All Locations ({allLocations.length})</button>
                    <div>Hello locations</div>
                </li>
            </ul>
            </div> */}



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
                <div>Locations are hidden</div>
            }



            {/* <button type="button"
                onClick={this.handleShowHide}
                value="Show Locations"
            >
                Show Locations
            </button>

            { this.state.display && 
                <div>
                    <button 
                        type="button"
                        onClick={this.handleShowHide}
                        value="Show the Locations">
                    </button>
                    <div>Showing the locations</div>
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
                    <div>Nothing here.</div>
                </div>
            }   */}
      </div>
    )
  }
}

export default Locations;