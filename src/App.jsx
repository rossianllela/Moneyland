import './App.css';
import AsideMenu from './components/AsideMenu/AsideMenu';
import Home from './components/Home/Home';
import Trade from './components/Trade/Trade';
import Farm from './components/Farm/Farm';
import Play from './components/Play/Play';
import Perfil from './components/Perfil/Perfil';
import Nft from './components/Nft/Nft';

function App() {

  return (
    <>

<div className='container'>
<AsideMenu />
      <Nft />
</div>
     
    </>
  )
}

export default App