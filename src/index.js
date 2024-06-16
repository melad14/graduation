import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"

import App from './App';

import reportWebVitals from './reportWebVitals';
import AuthContextProvider from './Context/AuthContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthContextProvider>

  <App />
</AuthContextProvider>

);


reportWebVitals();
