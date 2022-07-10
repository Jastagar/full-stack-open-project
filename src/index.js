import React from 'react';
import ReactDOM from 'react-dom/client';
import AppU from './unicafe/AppU';
import ComplexUseState from './components/ComplexUseState';
import Anecdotes from './unicafe/anecdotes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Anecdotes />
  </React.StrictMode>
);