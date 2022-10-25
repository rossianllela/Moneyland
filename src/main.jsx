import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Header from './components/Header/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from  './state/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path={ '/' } element={ <App /> } />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
