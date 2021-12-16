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
    //   get the text to display on the page
    let allPeople = this.state.people.map((person)=>{
        return (    
            <div>
                <div>Name: {person.name}</div>
                <div>Age: {person.age}</div>
                <div>Gender: {person.gender}</div>
            </div>
        )
    })  

    return(
        <div className="people">
            <h1>Search for a Person</h1>

            <form>
                <input 
                    type="text"
                    placeholder="Find Your Person"
                />
                <button type="submit">Submit</button>
            </form>

            <div>{allPeople}</div>
        </div>
    )
  }
}

export default People;