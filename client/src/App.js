import { useEffect, useState } from 'react';
import './styles/App.css';
import LogIn from './pages/login';
import Register from './components/CreateAccount';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Safety from './pages/safety';
import About from './pages/about';
import Navbar from './components/NavBar';
import { CheckSession } from './services/Auth';
import Landingpage from './pages/landingpage';
import Events from './pages/eventPage';
import DisplayProfile from './pages/DisplayProfile'

function App() {

  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])


  const handleLogOut = () => {
    setUser(null);
    toggleAuthenticated(false);
    localStorage.clear();
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Landingpage />} /> */}
        <Route path="/" element={<DisplayProfile/>} />
        <Route path="/newaccount" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
};
export default App;
