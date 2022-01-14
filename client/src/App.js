import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import logo from './logo.svg';
import './styles/App.css';
import Login from './pages/login'

function App() {

  return (
    <div className="App">
    <Login/>

      <Routes>
        {/* <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/safety' element={<Safety />} /> */}
      </Routes>

    </div>
  );
}

export default App;
