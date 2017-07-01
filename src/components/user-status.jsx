import React from 'react';
import PropTypes from 'prop-types';
import getStyles from 'anchor-ui/avatar/get-styles';

const propTypes = {
  status: PropTypes.oneOf(['online', 'away', 'offline']).isRequired
};

const style = {
  status: {
    position: 'static',
    border: 'none',
    display: 'inline-block'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    position: 'relative',
    top: '-1px',
    marginLeft: '4px'
  }
};

const UserStatus = ({ status }) => (
  <div style={style.container}>
    <span style={getStyles.status(status, style.status)} />
    <span style={style.text}>{status}</span>
  </div>
);

UserStatus.propTypes = propTypes;

export default UserStatus;
