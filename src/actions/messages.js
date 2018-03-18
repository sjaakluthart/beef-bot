import { MESSAGE_SEND, TYPING_SHOW, TYPING_HIDE } from './types';

const messageSend = payload => ({
  type: MESSAGE_SEND,
  payload
});

const typingShow = () => ({
  type: TYPING_SHOW
});

const typingHide = () => ({
  type: TYPING_HIDE
});

export {
  messageSend,
  typingShow,
  typingHide
};
