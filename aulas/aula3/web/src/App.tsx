import React from 'react';
import { ToastContainer } from 'react-toastify';

import './styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes/>
    </>    
  );
}

export default App;
