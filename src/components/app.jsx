import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { List, Message, MessageInput, Loader, withTheme, ChannelHeader } from 'anchor-ui';
import uuid from 'uuid';
import { messageSend } from '../actions/messages';
import beefBot from '../assets/images/beef-bot.jpg';
import chatBot from '../assets/images/chat-bot.jpg';
import background from '../assets/images/channel-background.jpg';
import sendBeefBotMessage from '../send-beef-bot-message';
import '../app.css';

class App extends Component {
  static propTypes = {
    messageSend: PropTypes.func.isRequired,
    messages: PropTypes.arrayOf(Object).isRequired,
    typing: PropTypes.bool.isRequired
  }

  constructor() {
    super();

    this.state = {
      message: ''
    };

    this.handleMessageSend = this.handleMessageSend.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.scrollDown = this.scrollDown.bind(this);
  }

  componentDidUpdate() {
    this.scrollDown();
  }

  scrollDown() {
    setTimeout(() => {
      if (this.messagesContainer) {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
      }
    }, 100);
  }

  handleMessageSend() {
    const { message } = this.state;

    if (!message) {
      return false;
    }

    this.props.messageSend({
      body: this.state.message,
      username: 'Dikbil',
      createdAt: new Date(),
      id: uuid.v4()
    });

    sendBeefBotMessage();

    return this.setState({
      message: ''
    });
  }

  handleMessageChange(event) {
    this.setState({
      message: event.currentTarget.value
    });
  }

  render() {
    const { messages, typing } = this.props;

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
        height: 'calc(100% - 112px)',
        position: 'relative'
      },
      background: {
        backgroundImage: `url(${background})`,
        backgroundSize: '500px',
        position: 'relative'
      },
      input: {
        background: 'none'
      }
    };

    return (
      <main className="app">
        <article className="chat-body" style={style.background}>
          <ChannelHeader name="BeefBot" />
          <section style={style.messages}>
            <List
              listRef={messagesContainer => (this.messagesContainer = messagesContainer)}
              style={style.list}
            >
              {messages.map(message => (
                <Message
                  message={message} key={`message-${message.id}`}
                  myMessage={message.username !== 'BeefBot'}
                  avatar={message.username === 'BeefBot' ? beefBot : chatBot}
                  emoji
                  enableLinks
                />
              ))}
            </List>
          </section>
          {typing ? <div className="loader"><Loader /></div> : null}
          <MessageInput
            onChange={this.handleMessageChange}
            placeholder="Type something..."
            value={this.state.message}
            sendMessage={this.handleMessageSend}
            style={style.input}
          />
        </article>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages.data,
    typing: state.messages.typing
  };
}

export default connect(mapStateToProps, { messageSend })(withTheme(App, '#8991AF'));
