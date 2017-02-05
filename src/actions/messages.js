import { MESSAGE_SEND, TYPING_SHOW, TYPING_HIDE } from './types';

export function messageSend(payload) {
  return {
    type: MESSAGE_SEND,
    payload
  };
}

export function typingShow() {
  return {
    type: TYPING_SHOW
  };
}

export function typingHide() {
  return {
    type: TYPING_HIDE
  };
}
