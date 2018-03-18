import styles from 'anchor-ui/settings/styles';
import background from '../../assets/images/channel-background.jpg';

export default () => ({
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
    height: 'calc(100% - 112px)'
  },
  emojiMenu: {
    width: 'calc(100% - 32px)',
    position: 'absolute',
    bottom: '80px',
    left: '16px'
  }
});
