import React, {
  useLayoutEffect,
  useState,
  useReducer,
} from 'react';
import map from 'lodash/map';
import format from 'date-fns/format';
import classNames from 'classnames';

import MessageInput from './MessageInput';
import getBotResponse from '../utils/getBotResponse';
import beefBot from '../assets/beef-bot.jpg';
import reducer, { actions, initialState } from '../state';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [body, setBody] = useState('');

  useLayoutEffect(() => {
    dispatch(actions.typingSet(true));

    setTimeout(() => {
      dispatch(actions.messageAdd({
        body: 'Wat wil je van me horen? Een uitspraak, wat goed advies of iets vunzigs?',
        bot: true,
        createdAt: new Date(),
      }));

      dispatch(actions.typingSet(false));
    }, 1000);
  }, [dispatch]);

  const handleSubmit = () => {
    setBody('');

    dispatch(actions.messageAdd({
      body,
      createdAt: new Date(),
    }));

    const response = getBotResponse(body);

    setTimeout(() => {
      dispatch(actions.typingSet(true));

      setTimeout(() => {
        dispatch(actions.typingSet(false));

        dispatch(actions.messageAdd({
          body: response,
          bot: true,
          createdAt: new Date(),
        }));
      }, response.length * 25);
    }, 500);
  };

  return (
    <main>
      <section className="app">
        <header>
          <img src={beefBot} alt="BeefBot" />
          <section>
            <h1>BeefBot</h1>
            <h2>{state.typing ? 'aan het typen...' : 'online'}</h2>
          </section>
        </header>
        <section className="messages">
          <section>
            {map(state.messages, (message, index) => (
              <section className={classNames('message', { right: !message.bot })} key={index}>
                <p>
                  <span>{message.body}</span>
                  <span>{format(message.createdAt, 'HH:mm')}</span>
                </p>
              </section>
            ))}
          </section>
        </section>
        <MessageInput
          value={body}
          onChange={setBody}
          onSubmit={handleSubmit}
        />
      </section>
    </main>
  );
};

export default App;
