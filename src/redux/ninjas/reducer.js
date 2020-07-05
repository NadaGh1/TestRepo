import { SET_NINJAS, SUCCES_DELETE_NINJA, SET_CURRENT_NINJA, SET_ADDED_NINJA } from './actionsTypes';

const initialState = {
  ninjas: [],
  loadNinjas: true,
  currentNinja: {},
};

function ninjaReducer(state = initialState, action) {
  switch (action.type) {
    
    case SET_NINJAS:
      return { ...state, ninjas: action.payload.ninjas };  

    case SUCCES_DELETE_NINJA:
      return { ...state, ninjas: state.ninjas.filter(nin => nin._id !== action.payload.id )}

      case SET_CURRENT_NINJA:
        return { ...state, currentNinja: action.currentNinja };

        case SET_ADDED_NINJA:
          return { ...state, ninjas: [action.newNinja, ...state.ninjas] };  

    default:
      return state;
  }
}

export default ninjaReducer;