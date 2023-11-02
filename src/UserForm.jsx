import React from 'react';
import { httpService } from './http-service';

const UserForm = (props) => {
  const [username, setUsername] = React.useState('default');
  const [password, setPassword] = React.useState('password');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      username,
      password,
    };

    console.log('form submitted', formData);
    httpService
      .post('posts', formData)
      .then((r) => console.log('response in component', r))
      .catch((error) => console.log('error in component', error));
  };

  const handleInput = (e) => {
    switch (e.target.name) {
      case 'username': {
        setUsername((_) => e.target.value);
        return;
      }

      case 'password': {
        setPassword((_) => e.target.value);
        return;
      }

      default:
        return;
    }
  };

  return (
    <>
      <h4>Please login...</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='username' className='form-label'>
            Username
          </label>
          <input
            type='text'
            className='form-control'
            id='username'
            name='username'
            onChange={handleInput}
            value={username}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            onChange={handleInput}
            value={password}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </>
  );
};

export default UserForm;
