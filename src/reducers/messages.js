import { MESSAGE_SEND } from '../actions/types';

const INITIAL_STATE = { data: [], typing: false };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case MESSAGE_SEND: {
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    }
    default: return state;
  }
}
