import './App.css';
import AsideMenu from './components/AsideMenu/AsideMenu';
import Home from './components/Home/Home';
import Trade from './components/Trade/Trade';
import Farm from './components/Farm/Farm';

function App() {

  return (
    <>

<div className='container'>
<AsideMenu />
      <Farm />
</div>
     
    </>
  )
}

export default App