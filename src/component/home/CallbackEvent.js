import React from 'react';

function CallbackEvent() {
  const [message, setMessage] = React.useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <h1>Callback Event Demo</h1>
      <p>Message: {message}</p>
      <ChildComponentOne message={message} onInputChange={handleChange} />
    </div>
  );
}

function ChildComponentOne({ message, onInputChange }) {
  return (
    <div>
      <p>Message: {message}</p>
      <input type="text" onChange={onInputChange} className='border' />
    </div>
  );
}

export default CallbackEvent;
