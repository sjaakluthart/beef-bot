import uuid from 'uuid';
import Chance from 'chance';
import oneliners from './oneliners.json';
import store from './store';
import { messageSend, typingShow, typingHide } from './actions/messages';

const chance = new Chance();

function sendBeefBotMessage() {
  const quote = chance.pickone(oneliners);

  setTimeout(() => {
    store.dispatch(typingShow());

    setTimeout(() => {
      store.dispatch(typingHide());

      store.dispatch(messageSend({
        body: quote,
        username: 'BeefBot',
        createdAt: new Date(),
        id: uuid.v4()
      }));
    }, quote.length * 40);
  }, 500);
}

export default sendBeefBotMessage;
