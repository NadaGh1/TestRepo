
import { combineReducers } from 'redux';
import ninjaReducer from './redux/ninjas/reducer';

const rootReducer = combineReducers({
  ninjaReducer,
});

export default rootReducer;