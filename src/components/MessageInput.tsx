import React, { FormEvent } from 'react';

import send from '../assets/send.svg';
import sendAccent from '../assets/send-accent.svg';
import '../css/MessageInput.css';

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

const MessageInput = (props: Props) => {
  const { value, onChange, onSubmit } = props;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    onSubmit();
  };

  const disabled = !value;

  return (
    <form onSubmit={handleSubmit} className="message-input">
      <input
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        placeholder="Type een bericht..."
      />
      <button type="submit" disabled={disabled}>
        <img src={disabled ? send : sendAccent} alt="send" />
      </button>
    </form>
  );
};

export default MessageInput;
