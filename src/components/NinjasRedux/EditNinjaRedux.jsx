import React from "react";
import { connect } from 'react-redux';

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
    this.props.getNinjaById(this.props.match.params.id);
  }

  onSubmit = async (e) => {
    e.preventDefault();

    const ninja = {
      name: this.state.name || this.props.currentNinja.name,
      rank: this.state.rank || this.props.currentNinja.rank,
    }

    await this.props.updateNinja(this.props.match.params.id, ninja);
    window.location.href= "/ninjasRedux"
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
         {/* ken name vide nekhou valeur mte3 this.props.currentNinja.name */}
          <input type="text" name="name" value={name || this.props.currentNinja.name} onChange={this.handleInputChange}/>
        <input type="text" name="rank" value={rank || this.props.currentNinja.rank} onChange={this.handleInputChange}/>
        <button variant="success" type="submit"> edit ninja</button> 
      </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentNinja: state.ninjaReducer.currentNinja, // bech yejbed state mte3 reducer
});


const mapDispatchToProps = (dispatch) => ({
    
    updateNinja: (id, ninja) => {
        dispatch(updateNinjaAction(id, ninja));
      },
    getNinjaById: (id) => {
        dispatch(getNinjaActionById(id));
    } 
  })

  export default connect(mapStateToProps, mapDispatchToProps)(EditNinjaRedux);
