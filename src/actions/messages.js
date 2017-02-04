import { MESSAGE_SEND } from './types';

export default function messageSend(payload) {
  return {
    type: MESSAGE_SEND,
    payload
  };
}
