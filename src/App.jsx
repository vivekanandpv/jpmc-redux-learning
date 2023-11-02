import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterSlice } from './store/counter-slice';

const App = (props) => {
  const counter = useSelector((state) => state.counter);
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
        <h3>Redux Learning: {counter}</h3>
        <hr />
        <button className='btn btn-primary me-3' onClick={increment}>
          Increment
        </button>
        <button className='btn btn-primary me-3' onClick={decrement}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default App;
