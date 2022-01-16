import { useEffect, useState } from 'react'
import './styles/App.css';
import Login from './pages/login'
import Register from './components/CreateAccount'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard';
import Safety from './pages/safety';
import About from './pages/about';
import Navbar from './components/NavBar';


function App() {

  return (
    <div className="App">

      <Navbar />

      <div>
        <Routes>
          <Route path='/newaccount' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/safety' element={<Safety />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
