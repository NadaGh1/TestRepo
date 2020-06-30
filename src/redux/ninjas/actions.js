
import axios from "axios";
import { SET_NINJAS, SUCCES_DELETE_NINJA } from "./actionsTypes";
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