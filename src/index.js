import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import {configureStore} from '@reduxjs/toolkit';
const initialState = {value: 0, name:'ahm', age: '13'};

 function reducer(state = initialState, action){
  switch (action.type) {
    case 'INCREMENT': // eng to'g'ri yo'li shunaqa bo'ladi
      return {
        ...state,
        value: state.value + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        value: state.value - 1
      }
    case 'reset':
      return initialState;
    case 'RANDOM':
      return {
        ...state,
        value: state.value * 0 + action.payload
      }
    default:
      return state;
  }
    
}
const store = configureStore({reducer:reducer});
store.subscribe(() => {
  document.querySelector('h1').textContent = 'Counter ' +store.getState().value;
}
);

  document.querySelector('.i').addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'});
  });

  document.querySelector('.d').addEventListener('click', () => {
    store.dispatch({type: 'DECREMENT'});
  });


  document.querySelector('.r').addEventListener('click', () => {
    store.dispatch({type: 'reset'});
  });
  document.querySelector('.btn-outline-info').addEventListener('click', () => {
    const value =Math.floor(Math.random() * 1000);
    store.dispatch({type: 'RANDOM', payload: value});
  });

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
  </React.StrictMode>
);

