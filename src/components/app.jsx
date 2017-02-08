import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { MessageList, Message, MessageInput, Loader, withTheme, ChannelHeader } from 'anchor-ui';
import uuid from 'uuid';
import { messageSend, typingShow, typingHide } from '../actions/messages';
import beefBot from '../assets/images/beef-bot.jpg';
import chatBot from '../assets/images/chat-bot.jpg';
import background from '../assets/images/channel-background.jpg';
import sendBeefBotMessage from '../send-beef-bot-message';
import '../app.css';

class App extends Component {
  static propTypes = {
    messageSend: PropTypes.func.isRequired,
    typingShow: PropTypes.func.isRequired,
    typingHide: PropTypes.func.isRequired,
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

  componentDidMount() {
    this.props.typingShow();

    setTimeout(() => {
      this.props.messageSend({
        body: 'Wat wil je van me horen? Een uitspraak, wat goed advies of iets vunzigs?',
        username: 'BeefBot',
        createdAt: new Date(),
        id: uuid.v4()
      });

      this.props.typingHide();
    }, 1000);
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
      body: message,
      username: 'Dikbil',
      createdAt: new Date(),
      id: uuid.v4()
    });

    sendBeefBotMessage(message);

    this.messageList.scrollDown();

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
          <MessageList addRef={ref => (this.messageList = ref)} autoScroll>
            {messages.map(message => (
              <Message
                message={message} key={`message-${message.id}`}
                myMessage={message.username !== 'BeefBot'}
                avatar={message.username === 'BeefBot' ? beefBot : chatBot}
                emoji
              />
            ))}
          </MessageList>
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

export default connect(mapStateToProps, { messageSend, typingShow, typingHide })(withTheme(App, '#8991AF'));
