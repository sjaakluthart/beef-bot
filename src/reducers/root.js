import { combineReducers } from 'redux';
import messagesReducer from './messages';

const rootReducer = combineReducers({
  messages: messagesReducer
});

export default rootReducer;
