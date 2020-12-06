import union from 'lodash/union';

import * as actionTypes from './actionTypes';
import { StateType, ActionTypes } from './types';

const reducer = (state: StateType, action: ActionTypes) => {
  switch (action.type) {
    case actionTypes.TYPING_SET:
      return {
        ...state,
        typing: action.payload,
      };
    case actionTypes.MESSAGE_ADD:
      return {
        ...state,
        messages: union(state.messages, [action.payload]),
      };
    default: return state;
  }
};

export default reducer;
