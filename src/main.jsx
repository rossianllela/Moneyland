import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Header from './components/Header/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from  './state/store'
import Home from './components/Home/Home';
import Trade from './components/Trade/Trade';
import Farm from './components/Farm/Farm';
import AsideMenu from './components/AsideMenu/AsideMenu';
import Play from './components/Play/Play';
import Lottery from './components/Lottery/Lottery';
import Nft from './components/Nft/Nft';
import Invited from './components/Invited/Invited';
import Perfil from './components/Perfil/Perfil';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Header />
    <AsideMenu />
      <Routes>
        <Route path={ '/' } element={ <Home/> } />
        <Route path={ 'Trade' } element={ <Trade /> } />
        <Route path={ 'Farm' } element={ <Farm /> } />
        <Route path={ 'Banks' } element={ <Farm /> } />
        <Route path={ 'Game' } element={ <Play /> } />
        <Route path={ 'Lottery' } element={ <Lottery /> } />
        <Route path={ 'marketplace' } element={ <Nft /> } />
        <Route path={ 'Invite' } element={ <Invited /> } />
        <Route path={ 'Perfil' } element={ <Perfil/> } />

      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
