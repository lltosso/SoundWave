import Header from './components/Moleculas/Header/header'
import Nav from './components/Atomos/Nav/Nav'
import Paginasound from './components/PaginaSound/Paginasound'
import './App.css'
import Button from './components/Atomos/Button/button'
import SectionDiscover from './components/Organismos/SectionDiscover/SectionDiscover'


function App() {

  return (
    <div className='body'>
    <Header title="Soundwave"/>
   
  <Paginasound/>
  <SectionDiscover/>
  
    </div>
  )
}

export default App
