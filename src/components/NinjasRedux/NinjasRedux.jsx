import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { getNinjasAction, deleteNinjaAction } from "../../redux/ninjas/actions";

class NinjasRedux extends  Component {


  componentDidMount() {
    this.props.getNinjas()
  }


  render() {
    const {
      history
    } = this.props;

    return (
      <div>
          <div>
            <Link to="/addNinjaRedux">add new ninja</Link>
          <table>
            <caption>Ninjas</caption>
            <thead>
              <tr>
                <th >name</th>
                <th >rank</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.ninjas.map(ninja => 
              (
              <tr key={ninja._id}>
               <th>{ninja.name}</th>
               <th>{ninja.rank}</th>
               <th>
                 <button
                   onClick={() => 
                    history.push(`/editNinjaRedux/${ninja._id}`)
                   }
                  >
                    edit
                  </button>
                 <button onClick={() => {
                   this.props.deleteNinja(ninja._id)
                   }}>delete</button>
               </th>
              </tr>
              )
            )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

}
// bch ymapi les actions w yraja3hom props lil composant
const mapDispatchToProps = (dispatch) => ({
  getNinjas: () => {
    dispatch(getNinjasAction());
  },
  deleteNinja: (id) => {
    dispatch(deleteNinjaAction(id));
  }
 
})

// bch ymapi les states glo w yraja3hom props lil composant
const mapStateToProps = (state) => ({
  ninjas: state.ninjaReducer.ninjas, // bech yejbed state mte3 reducer
});

export default connect(mapStateToProps, mapDispatchToProps)(NinjasRedux);
