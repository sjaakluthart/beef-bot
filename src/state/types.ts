import * as actionTypes from './actionTypes';

export type MessageType = {
  body: string;
  bot?: boolean;
  createdAt: Date;
};

export type StateType = {
  messages: MessageType[];
  typing: boolean;
};

export type MessageAddActionType = {
  type: typeof actionTypes.MESSAGE_ADD;
  payload: MessageType;
};

export type TypingSetActionType = {
  type: typeof actionTypes.TYPING_SET;
  payload: boolean;
};

export type ActionTypes = MessageAddActionType | TypingSetActionType;
