import { connect } from 'react-redux';
import App from './component';
import { messageSend, typingShow, typingHide, sendBeefBotMessage } from '../../actions/messages';
import getStyle from './style';

const makeMapStateToProps = () => {
  const style = getStyle();

  return state => ({
    messages: state.messages.data,
    typing: state.messages.typing,
    style
  });
};

const mapDispatchToProps = dispatch => ({
  typingShow: () => dispatch(typingShow()),
  typingHide: () => dispatch(typingHide()),
  messageSend: message => dispatch(messageSend(message)),
  sendBeefBotMessage: text => dispatch(sendBeefBotMessage(text))
});

export default connect(makeMapStateToProps, mapDispatchToProps)(App);
