import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-styles.css';
// import { Home } from './templates/Home';
import { ContextAPI } from './templates/ContextAPI';
import { CounterContextProvider } from './contexts/CounterContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterContextProvider>
      <ContextAPI />
    </CounterContextProvider>
  </React.StrictMode>,
);
