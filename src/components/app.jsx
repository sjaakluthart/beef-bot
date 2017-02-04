import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import messageSend from '../actions/messages';

class App extends Component {
  static propTypes = {
    messageSend: PropTypes.func.isRequired
  }

  constructor() {
    super();

    this.handleMessageSend = this.handleMessageSend.bind(this);
  }

  handleMessageSend() {
    this.props.messageSend({
      body: 'hi'
    });
  }

  render() {
    return (
      <main className="App">
        <h1>BeefBot</h1>
        <p onClick={this.handleMessageSend}>send</p>
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
