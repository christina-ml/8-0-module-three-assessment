import { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";


class People extends Component {
  constructor(){
    super();

    this.state = {
        people: [],
        searchValue: '',
      }
    }
  
    handlePeopleFetch=()=>{
        fetch("https://ghibliapi.herokuapp.com/people")
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({
              people: data,
              searchValue: '',
            })
        })
      }
    
    componentDidMount = () => {
        this.handlePeopleFetch();
    };

    handleInput=(event)=>{
        this.setState({
            searchValue: event.target.value,
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({
            searchValue: '',
        }) 
    }

  render(){
    //   get the text to display on the page
    let allPeople = this.state.people.map((person)=>{
        return (  
            <div>
                <div>Name: {person.name}</div>
                <div>Age: {person.age}</div>
                <div>Gender: {person.gender}</div>
                <br />
            </div>
        )
    })

    return(
        <div className="people">
            <h1>Search for a Person</h1>

            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    placeholder="Find Your Person"
                    value={this.state.searchValue}
                    onInput={this.handleInput}
                />
                <button type="submit">Submit</button>
            </form>
        
            <div>{allPeople}</div>
        </div>
    )
  }
}

export default People;