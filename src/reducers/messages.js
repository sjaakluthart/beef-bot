import uuid from 'uuid';
import { MESSAGE_SEND } from '../actions/types';

const INITIAL_STATE = {
  data: [{
    body: 'Hee Dikbil!',
    username: 'BeefBot',
    createdAt: new Date(),
    id: uuid.v4()
  }],
  typing: false
};

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
