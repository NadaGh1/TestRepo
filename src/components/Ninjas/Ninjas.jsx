import React, { Component } from "react";
import axios from "axios";
// bch tadhreb 3al les api (get ...)
import { Link } from "react-router-dom";
// withRouter va retourner history comme props lil composant
class Ninjas extends  Component {
  state = {
    ninjas: [],
    loadNinjas: true,
  }

  componentDidMount() {
    axios.get("http://localhost:4000/api/ninjas")
    .then(response => {
      const data = response.data;
      this.setState({ ninjas: data.ninjas, loadNinjas: false })
    })
  }

  deleteNinja = (id) => {
    axios.delete(`http://localhost:4000/api/ninjas/${id}`)
      .then(() => {
        const newNinjas = this.state.ninjas.filter(nin => nin._id !== id)
        this.setState({ ninjas: newNinjas })
      })
  }

  render() {
    const {
      loadNinjas,
      ninjas,
    } = this.state;
    const {
      history
    } = this.props;
    // object destruction js

    return (
      <div>
        {
          loadNinjas ? 
            <p>loading.....</p>
          : 
          <div>
            <Link to="/addNinja">add new ninja</Link>
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
              {ninjas.map(ninja => 
              (
              <tr key={ninja._id}>
               <th>{ninja.name}</th>
               <th>{ninja.rank}</th>
               <th>
                 <button
                   onClick={() => history.push(`/editNinja/${ninja._id}`)}
                  >
                    edit
                  </button>
                 <button onClick={() => {
                   this.deleteNinja(ninja._id)
                   }}>delete</button>
               </th>
              </tr>
              )
            )}
            </tbody>
          </table>
        </div>
        }
      </div>
    )

  }

}

export default Ninjas;
