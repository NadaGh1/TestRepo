import React from "react";
import axios from "axios";

import { updateNinjaAction, getNinjaActionById } from "../../redux/ninjas/actions";
class EditNinjaRedux extends React.Component {
  state = {
    name: '',
    rank: '',
    loadNinja: true,
  }

  componentDidMount () {
   /* console.log("props", this.props.match.params.id)
    axios.get(`http://localhost:4000/api/ninjas/${this.props.match.params.id}`)
    .then(response => {
      const data = response.data;
      console.log("data", data)
      this.setState({ name: data.ninja.name, rank: data.ninja.rank, loadNinjas: false })
    })*/

    this.props.getNinjaById(ninja._id);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const ninja = {
      name: this.state.name,
      rank: this.state.rank,
    }

    this.props.updateNinja(ninja._id);
   /* axios.put(`http://localhost:4000/api/ninjas/${this.props.match.params.id}`, ninja)
    .then(() => {
      this.props.history.push("/")
    });*/
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

const mapDispatchToProps = (dispatch) => ({
    
    updateNinja: (id) => {
        dispatch(updateNinjaAction(id));
      },
    getNinjaById: (id) => {
        dispatch(getNinjaActionById(id));
    } 
  })

  export default connect(null, mapDispatchToProps)(EditNinjaRedux);
