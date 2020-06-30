import { SET_NINJAS, SUCCES_DELETE_NINJA } from './actionsTypes';

const initialState = {
  ninjas: [],
  loadNinjas: true,
};

function ninjaReducer(state = initialState, action) {
  switch (action.type) {
    
    case SET_NINJAS:
      return { ...state, ninjas: action.payload.ninjas };  

    case SUCCES_DELETE_NINJA:
      return { ...state, ninjas: state.ninjas.filter(nin => nin._id !== action.payload.id )}

    default:
      return state;
  }
}

export default ninjaReducer;