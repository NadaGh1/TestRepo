import React from "react";
import axios from "axios"
class EditNinja extends React.Component {
  state = {
    name: '',
    rank: '',
    loadNinja: true,
  }

  componentDidMount () {
    axios.get(`http://localhost:4000/api/ninjas/${this.props.match.params.id}`)
    .then(response => {
      const data = response.data;
      this.setState({ name: data.ninja.name, rank: data.ninja.rank, loadNinjas: false })
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const ninja = {
      name: this.state.name,
      rank: this.state.rank,
    }

    axios.put(`http://localhost:4000/api/ninjas/${this.props.match.params.id}`, ninja)
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
    return (
      <div>

       <form onSubmit={this.onSubmit}>
        <input type="text" name="name" value={name} onChange={this.handleInputChange}/>
        <input type="text" name="rank" value={rank} onChange={this.handleInputChange}/>
        <button variant="success" type="submit"> edit ninja</button> 
      </form>
      </div>
    )
  }
}

export default EditNinja;
