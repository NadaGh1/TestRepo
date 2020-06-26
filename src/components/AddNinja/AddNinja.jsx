import React, { Component} from "react";
import axios from "axios";

class AddNinja extends Component {
  state = {
    name: '',
    rank: '',
    available: false
  }

  onSubmit = (e) => {
    e.preventDefault();

    const ninja = {
      name: this.state.name,
      rank: this.state.rank,
      available: this.state.available,
    }

    axios.post('http://localhost:4000/api/ninjas', ninja)
    .then(() => { 
      this.props.history.push("/")
    });
  }

   handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      name,
      rank,
    } = this.state;

    console.log("name", name);
    console.log("rank", rank);
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="name" value={name} onChange={this.handleInputChange}/>
        <input type="text" name="rank" value={rank} onChange={this.handleInputChange}/>
        <button variant="success" type="submit"> add ninja</button> 
      </form>
    )
  }
}

export default AddNinja;
