// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import './index.css';
// import App from './App';

//   ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';

// Use createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



