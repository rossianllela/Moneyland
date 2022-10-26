import './App.css';
import AsideMenu from './components/AsideMenu/AsideMenu';
import Home from './components/Home/Home';
import Trade from './components/Trade/Trade';

function App() {

  return (
    <>

<div className='container'>
<AsideMenu />
      <Trade />
</div>
     
    </>
  )
}

export default App