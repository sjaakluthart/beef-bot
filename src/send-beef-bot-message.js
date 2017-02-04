import uuid from 'uuid';
import oneliners from './oneliners.json';
import store from './store';
import messageSend from './actions/messages';

function sendBeefBotMessage() {
  const quote = oneliners[Math.floor(Math.random() * oneliners.length)];

  store.dispatch(messageSend({
    body: quote,
    username: 'BeefBot',
    createdAt: new Date(),
    id: uuid.v4()
  }));
}

export default sendBeefBotMessage;
