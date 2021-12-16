import { Component } from "react";
import "../App.css";


class People extends Component {
  constructor(){
    super();

    this.state = {
        people: [],
        searchValue: '',
        person: [],
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
            person: this.state.searchValue,
        }) 
    }

  render(){
    let filteredPeople = this.state.people.filter((person)=>{
        return (
            person.name === this.state.person
        )
    }) 

    let allPeople = filteredPeople.map((person)=>{
        return (  
            <div>
                <h3>Name: {person.name}</h3>
                <h3>Age: {person.age}</h3>
                <h3>Gender: {person.gender}</h3>
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
                    onChange={this.handleInput}
                />
                <button type="submit">Submit</button>
            </form>
            {filteredPeople.length ? allPeople : <h2>Not Found</h2>}
        </div>
    )
  }
}

export default People;