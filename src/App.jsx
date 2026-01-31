import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import AddMusic from './pages/AddMusic';
import Landing from './pages/Landing';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <BrowserRouter> 
    <div>
      <NavBar></NavBar>
      <div>
        <div>
          <Routes>
            <Route path="/" element={ <Landing/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/add" element={<AddMusic/>}/>
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  )
};

export default App
