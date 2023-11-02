import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { themeSlice } from './store/theme-slice';

const Sample = (props) => {
  const currentTheme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(themeSlice.actions.toggle());
  };

  return (
    <>
      <h4>Sample Component: {currentTheme}</h4>
      <button className='btn btn-primary mt-3' onClick={toggleTheme}>
        Toggle Theme
      </button>
    </>
  );
};

export default Sample;
