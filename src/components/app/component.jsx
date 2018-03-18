import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageList from 'anchor-ui/message-list';
import Message from 'anchor-ui/message';
import MessageInput from 'anchor-ui/message-input';
import ChannelHeader from 'anchor-ui/channel-header';
import EmojiMenu from 'anchor-ui/emoji-menu';
import Button from 'anchor-ui/button';
import IconEmoji from 'anchor-ui/icons/icon-emoji';
import uuid from 'uuid';
import map from 'lodash/map';
import format from 'date-fns/format';
import beefBot from '../../assets/images/beef-bot.jpg';
import chatBot from '../../assets/images/chat-bot.jpg';
import UserStatus from '../user-status';

const propTypes = {
  messageSend: PropTypes.func.isRequired,
  typingShow: PropTypes.func.isRequired,
  typingHide: PropTypes.func.isRequired,
  sendBeefBotMessage: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(Object).isRequired,
  typing: PropTypes.bool.isRequired,
  style: PropTypes.shape({
    background: PropTypes.object.isRequired,
    input: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired,
    emojiMenu: PropTypes.object.isRequired,
  }).isRequired
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

    this.props.sendBeefBotMessage(message);

    this.messageList.scrollToBottom();

    return this.setState({
      message: '',
      open: false
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
    const { messages, typing, style } = this.props;

    return (
      <main className="app">
        <article className="chat-body" style={style.background}>
          <ChannelHeader
            name="BeefBot"
            secondaryText={typing ? 'aan het typen...' : <UserStatus status="online" />}
          />
          <MessageList
            ref={(node) => { this.messageList = node; }}
            autoScroll
            style={style.messages}
          >
            {map(messages, message => (
              <Message
                key={`message-${message.id}`}
                body={message.body}
                type={message.type}
                createdAt={format(message.createdAt, 'HH:mm')}
                username={message.username}
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
            inputRef={(node) => { this.input = node; }}
          />
        </article>
      </main>
    );
  }
}

App.propTypes = propTypes;

export default App;
