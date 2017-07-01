import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MessageList from 'anchor-ui/message-list';
import Message from 'anchor-ui/message';
import MessageInput from 'anchor-ui/message-input';
import ChannelHeader from 'anchor-ui/channel-header';
import EmojiMenu from 'anchor-ui/emoji-menu';
import Button from 'anchor-ui/button';
import IconEmoji from 'anchor-ui/icons/icon-emoji';
import styles from 'anchor-ui/settings/styles';
import uuid from 'uuid';
import { messageSend, typingShow, typingHide } from '../actions/messages';
import beefBot from '../assets/images/beef-bot.jpg';
import chatBot from '../assets/images/chat-bot.jpg';
import background from '../assets/images/channel-background.jpg';
import sendBeefBotMessage from '../send-beef-bot-message';
import UserStatus from './user-status';
import '../app.css';

const propTypes = {
  messageSend: PropTypes.func.isRequired,
  typingShow: PropTypes.func.isRequired,
  typingHide: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(Object).isRequired,
  typing: PropTypes.bool.isRequired
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: '',
      open: false
    };

    this.handleMessageSend = this.handleMessageSend.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.scrollDown = this.scrollDown.bind(this);
    this.toggleEmojiMenu = this.toggleEmojiMenu.bind(this);
    this.sendEmoji = this.sendEmoji.bind(this);
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

  toggleEmojiMenu() {
    this.setState({
      open: !this.state.open
    });
  }

  sendEmoji(event, emoji) {
    const { message } = this.state;

    let messageWithEmoji = emoji.shortname;

    if (message) {
      messageWithEmoji = `${message}${emoji.shortname}`;
    }

    this.setState({
      message: messageWithEmoji
    });

    return this.input.focus();
  }

  render() {
    const { messages, typing } = this.props;

    const style = {
      background: {
        backgroundImage: `url(${background})`,
        backgroundSize: '500px',
        position: 'relative',
        boxShadow: styles.depthShadows[0]
      },
      input: {
        width: 'calc(100% - 32px)'
      },
      messages: {
        height: 'calc(100% - 124px)'
      },
      emojiMenu: {
        width: 'calc(100% - 32px)',
        position: 'absolute',
        bottom: '80px',
        left: '16px'
      }
    };

    return (
      <main className="app">
        <article className="chat-body" style={style.background}>
          <ChannelHeader
            name="BeefBot"
            secondaryText={typing ? 'aan het typen...' : <UserStatus status="online" />}
          />
          <MessageList addRef={ref => (this.messageList = ref)} autoScroll style={style.messages}>
            {messages.map(message => (
              <Message
                key={`message-${message.id}`}
                message={message}
                myMessage={message.username !== 'BeefBot'}
                avatar={message.username === 'BeefBot' ? beefBot : chatBot}
                emoji
              />
            ))}
          </MessageList>
          <EmojiMenu
            open={this.state.open}
            hideMenu={this.toggleEmojiMenu}
            sendEmoji={this.sendEmoji}
            style={style.emojiMenu}
          />
          <MessageInput
            onChange={this.handleMessageChange}
            placeholder="Type een bericht..."
            value={this.state.message}
            sendMessage={this.handleMessageSend}
            style={style.input}
            leftButton={
              <Button
                className="ignore-react-onclickoutside"
                iconButton
                onClick={this.toggleEmojiMenu}
              >
                <IconEmoji />
              </Button>
            }
            inputRef={node => (this.input = node)}
          />
        </article>
      </main>
    );
  }
}

App.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    messages: state.messages.data,
    typing: state.messages.typing
  };
}

export default connect(mapStateToProps, { messageSend, typingShow, typingHide })(App);
