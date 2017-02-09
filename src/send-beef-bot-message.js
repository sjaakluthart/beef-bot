import uuid from 'uuid';
import Chance from 'chance';
import oneliners from './oneliners.json';
import store from './store';
import { messageSend, typingShow, typingHide } from './actions/messages';

const chance = new Chance();
const categories = ['filthy', 'life-lessons', 'quotes'];

function sendBeefBotMessage(message) {
  const lowerCaseMessage = message.toLowerCase();

  let category = chance.pickone(categories);

  if (lowerCaseMessage.includes('vunzig') || lowerCaseMessage.includes('vies') || lowerCaseMessage.includes('goor')) {
    category = 'filthy';
  }

  if (lowerCaseMessage.includes('uitspraak') || lowerCaseMessage.includes('quote') || lowerCaseMessage.includes('citaat')) {
    category = 'quotes';
  }

  if (lowerCaseMessage.includes('advies') || lowerCaseMessage.includes('les') || lowerCaseMessage.includes('raad')) {
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
