import {combineReducers} from 'redux';
import {globalReducer} from "../modules/shared/redux/globalReducer";

export const Reducers = combineReducers({
  GLOBAL: globalReducer,
});
