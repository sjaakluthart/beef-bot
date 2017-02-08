import uuid from 'uuid';
import Chance from 'chance';
import oneliners from './oneliners.json';
import store from './store';
import { messageSend, typingShow, typingHide } from './actions/messages';

const chance = new Chance();
const categories = ['filthy', 'life-lessons', 'quotes'];

function sendBeefBotMessage(message) {
  let category = chance.pickone(categories);

  if (message.includes('vunzig') || message.includes('vies') || message.includes('goor')) {
    category = 'filthy';
  }

  if (message.includes('uitspraak') || message.includes('quote') || message.includes('citaat')) {
    category = 'quotes';
  }

  if (message.includes('advies') || message.includes('les') || message.includes('raad')) {
    category = 'life-lessons';
  }

  const quote = chance.pickone(oneliners[category]);

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
    }, quote.length * 25);
  }, 500);
}

export default sendBeefBotMessage;
