import React, { useState } from 'react';
import PT from 'prop-types';

const initialFormValues = {
  username: '',
  password: '',
};

export default function LoginForm({ login }) {
  const [values, setValues] = useState(initialFormValues);

  // Handle input changes
  const onChange = (evt) => {
    const { id, value } = evt.target;
    setValues({ ...values, [id]: value });
  };

  // Handle form submission
  const onSubmit = (evt) => {
    evt.preventDefault();

    // Trim inputs to ensure no unnecessary spaces
    const trimmedUsername = values.username.trim();
    const trimmedPassword = values.password.trim();

    // Call the `login` function with trimmed values
    login({ username: trimmedUsername, password: trimmedPassword });
  };

  // Determine if the submit button should be disabled
  const isDisabled = () => {
    const trimmedUsername = values.username.trim();
    const trimmedPassword = values.password.trim();
    return trimmedUsername.length < 3 || trimmedPassword.length < 8;
  };

  return (
    <form id="loginForm" onSubmit={onSubmit}>
      <h2>Login</h2>
      <input
        maxLength={20}
        value={values.username}
        onChange={onChange}
        placeholder="Enter username"
        id="username"
      />
      <input
        maxLength={20}
        type="password"
        value={values.password}
        onChange={onChange}
        placeholder="Enter password"
        id="password"
      />
      <button disabled={isDisabled()} id="submitCredentials">
        Submit credentials
      </button>
    </form>
  );
}

// 🔥 No touchy: LoginForm expects the following props exactly:
LoginForm.propTypes = {
  login: PT.func.isRequired,
};
