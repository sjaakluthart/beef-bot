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
    width: '100%',
    marginBottom: '0',
    marginLeft: '0',
    marginRight: '0',
    boxShadow: 'none',

    '@media(min-width: 768px)': {
      width: 'calc(100% - 32px)',
      marginBottom: '16px',
      marginLeft: '16px',
      marginRight: '16px',
      borderRadius: '4px',
      boxShadow: styles.depthShadows[0]
    }
  },
  messages: {
    height: 'calc(100% - 96px)',

    '@media(min-width: 768px)': {
      height: 'calc(100% - 112px)'
    }
  },
  emojiMenu: {
    width: 'calc(100% - 32px)',
    position: 'absolute',
    bottom: '80px',
    left: '16px'
  }
});
