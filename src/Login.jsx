import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSlice } from './store/user-slice';

const Login = (props) => {
  const user = useSelector((state) => state.user);
  const currentTheme = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  const login = () => {
    dispatch(
      userSlice.actions.login({
        user: 'john_doe',
        roles: 'admin',
      })
    );
  };

  const logout = () => {
    dispatch(userSlice.actions.logout());
  };

  return (
    <>
      <h4>Login Component {currentTheme}</h4>
      {user.user && (
        <p>
          User: {user.user} Roles: {user.roles}
        </p>
      )}
      <button className='btn btn-primary mt-3 me-3' onClick={login}>
        Login
      </button>
      <button className='btn btn-primary mt-3 me-3' onClick={logout}>
        Logout
      </button>
    </>
  );
};

export default Login;
