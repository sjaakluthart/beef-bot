import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { List, Message } from 'anchor-ui';
import uuid from 'uuid';
import messageSend from '../actions/messages';
import beefBot from '../assets/beef-bot.jpg';
import background from '../assets/background.jpg';
import sendBeefBotMessage from '../utils/send-beef-bot-message';

class App extends Component {
  static propTypes = {
    messageSend: PropTypes.func.isRequired,
    messages: PropTypes.arrayOf(Object).isRequired
  }

  constructor() {
    super();

    this.handleMessageSend = this.handleMessageSend.bind(this);
  }

  handleMessageSend() {
    this.props.messageSend({
      body: 'hi',
      username: 'Sjaak',
      createdAt: new Date(),
      id: uuid.v4()
    });

    sendBeefBotMessage();
  }

  render() {
    const { messages } = this.props;

    const style = {
      list: {
        overflow: 'auto',
        width: '100%',
        height: 'auto',
        maxHeight: '100%',
        padding: '16px',
        paddingBottom: '0',
        background: 'none',
        position: 'absolute',
        bottom: '0',
      },
      messages: {
        background: 'none',
        height: 'inherit',
        position: 'relative'
      },
      background: {
        backgroundImage: `url(${background})`,
        backgroundSize: '500px',
        height: '500px'
      },
      input: {
        background: 'none'
      }
    };

    return (
      <main className="App">
        <h1>BeefBot</h1>
        <p onClick={this.handleMessageSend}>send</p>
        <article className="chat-body" style={style.background}>
          <section style={style.messages}>
            <List
              listRef={messagesContainer => (this.messagesContainer = messagesContainer)}
              style={style.list}
            >
              {messages.map(message => (
                <Message
                  message={message} key={`message-${message.id}`}
                  myMessage={message.username !== 'BeefBot'}
                  avatar={beefBot}
                  emoji
                  enableLinks
                />
              ))}
            </List>
          </section>
        </article>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages.data
  };
}

export default connect(mapStateToProps, { messageSend })(App);
