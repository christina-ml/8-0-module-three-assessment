import { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";


class Navbar extends Component {
  constructor(){
    super();

    this.state = {
      
    }
  }

  render(){
    return(
      <div className="navbar">
        <nav>
            <Link to="/">
                <img 
                    className="navbar-logo"
                    src="https://pbs.twimg.com/profile_images/1306342719703441410/4YXmIvpE_400x400.jpg" 
                    alt="Studio Ghibli Logo" 
                />
            </Link>
            <Link to="/movies"><h3>Movies</h3></Link>
            <Link to="/people"><h3>People</h3></Link>
            <Link to="/locations"><h3>Locations</h3></Link>
        </nav>
      </div>
    )
  }
}

export default Navbar;