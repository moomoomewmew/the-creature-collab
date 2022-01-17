import { useEffect, useState } from 'react'
import './styles/App.css';
import LogIn from './pages/login'
import Register from './components/CreateAccount'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard';
import Safety from './pages/safety';
import About from './pages/about';
import Navbar from './components/NavBar';
import { CheckSession} from './services/Auth'
import Landingpage from './pages/landingpage';


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
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }
  return (
    <div className="App">

      <Navbar />


      <Routes>
        <Route path='/newaccount' element={<Register />} />
        <Route path="/login" element= {<LogIn/>} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/safety' element={<Safety />} />
        <Route path='/welcome' element={<Landingpage />} />
      </Routes>

    </div>
  );
}

export default App;
