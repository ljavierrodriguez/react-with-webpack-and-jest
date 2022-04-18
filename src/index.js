import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.scss';

import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';

import App from './App.jsx';

ReactDOM.createRoot(document.querySelector('#root')).render(<App />);