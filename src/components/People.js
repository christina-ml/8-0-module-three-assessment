import { Component } from "react";
import "../App.css";


class People extends Component {
  constructor(){
    super();

    this.state = {
        people: [],
      }
    }
  
    handlePeopleFetch=()=>{
        fetch("https://ghibliapi.herokuapp.com/people")
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({
              people: data,
            })
        })
      }
    
    componentDidMount = () => {
        this.handlePeopleFetch();
    };

  render(){
    return(
      <div className="people">
          <h1>Hello, People page!</h1>
      </div>
    )
  }
}

export default People;