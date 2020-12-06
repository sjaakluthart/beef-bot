import * as actionTypes from './actionTypes';

import { MessageType, MessageAddActionType, TypingSetActionType } from './types';

const typingSet = (payload: boolean): TypingSetActionType => ({
  type: actionTypes.TYPING_SET,
  payload,
});

const messageAdd = (payload: MessageType): MessageAddActionType => ({
  type: actionTypes.MESSAGE_ADD,
  payload,
});

export {
  typingSet,
  messageAdd,
};
