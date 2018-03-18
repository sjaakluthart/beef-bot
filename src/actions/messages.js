import uuid from 'uuid';
import Chance from 'chance';
import toLower from 'lodash/toLower';
import includes from 'lodash/includes';
import oneliners from '../oneliners.json';
import { MESSAGE_SEND, TYPING_SHOW, TYPING_HIDE } from './types';

const chance = new Chance();
const categories = ['filthy', 'life-lessons', 'quotes'];

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

const sendBeefBotMessage = message => (
  (dispatch) => {
    const lowerCaseMessage = toLower(message);

    let category = chance.pickone(categories);

    if (
      includes(lowerCaseMessage, 'vunzig') ||
      includes(lowerCaseMessage, 'vies') ||
      includes(lowerCaseMessage, 'goor')
    ) {
      category = 'filthy';
    }

    if (
      includes(lowerCaseMessage, 'uitspraak') ||
      includes(lowerCaseMessage, 'quote') ||
      includes(lowerCaseMessage, 'citaat')
    ) {
      category = 'quotes';
    }

    if (
      includes(lowerCaseMessage, 'advies') ||
      includes(lowerCaseMessage, 'les') ||
      includes(lowerCaseMessage, 'raad')
    ) {
      category = 'life-lessons';
    }

    const quote = chance.pickone(oneliners[category]);

    setTimeout(() => {
      dispatch(typingShow());

      setTimeout(() => {
        dispatch(typingHide());

        dispatch(messageSend({
          body: quote,
          username: 'BeefBot',
          createdAt: new Date(),
          id: uuid.v4()
        }));
      }, quote.length * 25);
    }, 500);
  }
);

export {
  messageSend,
  typingShow,
  typingHide,
  sendBeefBotMessage
};
