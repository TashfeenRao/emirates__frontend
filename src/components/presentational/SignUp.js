import React, { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const signUp = e => {
    e.preventDefault();
    setUsername('');
    setPassword('');
  };
  return (
    <div>
      <form onSubmit={signUp}>
        <label htmlFor="username">
          Username
          <input
            type="text"
            name="username"
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="username"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <label htmlFor="password">
          Password_Confirmation
          <input
            type="password"
            name="username"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <input type="submit" value="SignUp" />
      </form>
    </div>
  );
};

export default SignUp;
