
import axios from "axios";
import { SET_NINJAS, SUCCES_DELETE_NINJA, SET_CURRENT_NINJA, SET_ADDED_NINJA } from "./actionsTypes";
const apiUrl = 'http://localhost:4000/api/ninjas';

export const setNinjasAction = (ninjas) => {
  return {
    type : SET_NINJAS,
    payload : {
      ninjas
    }
   }
  }

  export const succesDeleteNinja = (id) => {
    return {
      type : SUCCES_DELETE_NINJA,
      payload : {
        id
      }
     }
    }

    export const setCurrentNinjaAction = (currentNinja) => {
      return {
        type : SET_CURRENT_NINJA,
        currentNinja,
       }
      }
    
      export const setAddedNinjaAction = (newNinja) => {
        return {
          type : SET_ADDED_NINJA,
          newNinja,
         }
        }
  

export const getNinjasAction = () => {
  return(dispatch) => {
      axios.get(apiUrl)
      .then( async(response) => {
        dispatch(setNinjasAction(response.data.ninjas));
      })
      .catch(error=> { 
        // dispatch(searchUserFailed(error));
        throw(error);
      });
    };
  }
  /*console.log("props", this.props.match.params.id)
  axios.get(`http://localhost:4000/api/ninjas/${this.props.match.params.id}`)
  .then(response => {
    const data = response.data;
    console.log("data", data)
    this.setState({ name: data.ninja.name, rank: data.ninja.rank, loadNinjas: false })*/

  export const getNinjaActionById = (id) => {
    return(dispatch) => {
        axios.get(`${apiUrl}/${id}`)
        .then( async(response) => {
          dispatch(setCurrentNinjaAction(response.data.ninja));
        })
        .catch(error=> { 
          // dispatch(searchUserFailed(error));
          throw(error);
        });
      };
    }


export const deleteNinjaAction = (id) => {
  return(dispatch) => {
      axios.delete(`${apiUrl}/${id}`)
      .then( async() => {
        dispatch(succesDeleteNinja(id));
      })
      .catch(error=> { 
        // dispatch(searchUserFailed(error));
        throw(error);
      });
    };
  }

  export const addNinjaAction = (ninja) => {
    return(dispatch) => {
        axios.post(apiUrl,ninja)
        .then( async(reponse) => {
         // this.props.history.push("/")
         dispatch(setAddedNinjaAction(reponse.data));
        })
        .catch(error=> { 
          // dispatch(searchUserFailed(error));
          throw(error);
        });
      };
    }

    export const updateNinjaAction = (id, ninja) => {

      return(dispatch) => {
          axios.put(`${apiUrl}/${id}`,ninja)
          .then( async(reponse) => {
            // console.log("")
           // dispatch(setNinjasAction(reponse.data.ninjas));
          })
          .catch(error=> { 
            // dispatch(searchUserFailed(error));
            throw(error);
          });
        };
      }