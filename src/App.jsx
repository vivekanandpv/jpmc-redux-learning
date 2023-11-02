import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterSlice } from './store/counter-slice';
import Login from './Login';
import Sample from './Sample';

const App = (props) => {
  const counter = useSelector((state) => state.counter);
  const currentTheme = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  const increment = () => {
    console.log('increment');
    dispatch(counterSlice.actions.increment());
  };

  const decrement = () => {
    console.log('decrement');
    dispatch(counterSlice.actions.decrement());
  };

  return (
    <>
      <div className='p-5'>
        <h3>
          Redux Learning: {counter} :: {currentTheme}
        </h3>
        <hr />
        <button className='btn btn-primary me-3' onClick={increment}>
          Increment
        </button>
        <button className='btn btn-primary me-3' onClick={decrement}>
          Decrement
        </button>

        <hr />
        <Login />

        <hr />
        <Sample />
      </div>
    </>
  );
};

export default App;
