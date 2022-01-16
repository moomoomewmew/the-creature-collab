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
      <div className='welcome'>
        <div className='1'>
          <h1>Creature Collab</h1>
          <p>Login as your character and find video game, board game, LARP, cosplay, and other fun events near you! You can also host an event and get connected to the perfect characters to join your campaign. </p>
        </div>
        {/* <img src='bard_in_pub.jpg'></img> */}
      </div>

      <Routes>
        <Route path='/newaccount' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/safety' element={<Safety />} />
      </Routes>

    </div>
  );
}

export default App;
