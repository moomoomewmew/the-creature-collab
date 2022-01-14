
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import logo from './logo.svg';
import './styles/App.css';
import Login from './pages/login'
import Register from './components/CreateAccount'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Safety from './pages/Safety';
import About from './pages/About';


function App() {

  return (
    <div className="App">

    <Register/>

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/safety' element={<Safety />} /> */}
      </Routes>

    </div>
  );
}

export default App;
