import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Select from './select/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Select elements={[1,2,3]} />
  </React.StrictMode>
);

