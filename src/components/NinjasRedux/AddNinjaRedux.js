import React, { Component} from "react";
import axios from "axios";

import { addNinjaAction } from "../../redux/ninjas/actions";

class AddNinjaRedux extends Component {
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
// dipatch action te5ou en parametre ninja
// this.props.history.push("/")
   /* axios.post('http://localhost:4000/api/ninjas', ninja)
    .then(() => { 
      this.props.history.push("/")
    });*/
    this.props.addNinja(ninja);
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
      <form onSubmit={this.onSubmit}>
        <input type="text" name="name" value={name} onChange={this.handleInputChange}/>
        <input type="text" name="rank" value={rank} onChange={this.handleInputChange}/>
        <button variant="success" type="submit"> add ninja</button> 
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
    
    addNinja: (ninja) => {
      dispatch(addNinjaAction(ninja));
    }
  })
  
export default connect(null, mapDispatchToProps)(AddNinjaRedux);
