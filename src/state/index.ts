import reducer from './reducer';
import * as actionTypes from './actionTypes';
import * as actions from './actions';

import { StateType } from './types';

const initialState: StateType = {
  messages: [
    {
      body: 'Hee Dikbil!',
      bot: true,
      createdAt: new Date(),
    },
  ],
  typing: false,
};

export {
  actionTypes,
  actions,
  initialState,
};

export default reducer;
