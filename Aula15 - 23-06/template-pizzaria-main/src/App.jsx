import './App.css'
import { Contact } from './pages/contact'
import Home from './pages/home'
import { Menu } from './pages/menu'
import { Error404 } from 'react-404-error-page';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cardapio' element={<Menu/>}/>
          <Route path='/contato' element={<Contact/>}/>
          <Route path='*' element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
