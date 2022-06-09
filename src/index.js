import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FormValidation from './FormValidation';
import OnchangeValidation from './OnchangeValidation';
import Valid from './Valid';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <FormValidation /> */}
    {/* <OnchangeValidation /> */}
    {/* <App /> */}
    <Valid />
  </React.StrictMode>
);

