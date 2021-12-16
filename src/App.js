import { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(){
    super();

    this.state = {

    }
  }

  render(){
    return(
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies}/>
          <Route path="/people" component={People}/>
          <Route path="/locations" component={Locations}/>
        </Switch>
      </div>
    )
  }
}

export default App;