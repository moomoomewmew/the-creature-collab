import { useEffect, useState } from 'react';
import './styles/App.css';
import './styles/profiles.css'
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
import ProtectedRoute from './components/ProtectedRoute';
import ProfileView from './components/UserProfile';
import DisplayProfile from './pages/displayProfile';
import axios from 'axios';
import { BASE_URL } from './globals/index';

function App() {
  
    const [authenticated, toggleAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [authUser, setAuthUser]= useState({})
    const [loading, setLoading] = useState(true)

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  };
  const getAuthUser = async  () => {
    const id = localStorage.getItem('id')
    axios.get(`${BASE_URL}/users/${id}`)
    .then(res => {
      setAuthUser(res.data)
      setLoading(false)
    })
 
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      checkToken();
      getAuthUser()
    }
  }, []);


  const handleLogOut = () => {
      setUser(null);
    toggleAuthenticated(false);
    localStorage.clear();
  };
  if (loading) {
    return (
      <div> loading...</div>
    )
  }
    return (
    <div className="App">
      <Navbar
        user={authUser}
        authenticated={authenticated}
        handleLogOut={handleLogOut}
      />

      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route
          path="/login"
          element={
            <LogIn
              setAuthUser={setAuthUser}
              authUser={authUser}
              toggleAuthenticated={toggleAuthenticated}
              authenticated={authenticated}
            />
          }
        />
        <Route path="/profiles" element={<DisplayProfile />} />
        <Route exact path="/users/info/:userId" element={<ProfileView />} />
        <Route path="/newaccount" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard authUser={authUser} checkToken={checkToken} setUser={setUser} />
          }
        />
        <Route path="/safety" element={<Safety />} />
        <Route
          path="/events"
          element={
            <Events user={authUser} checkToken={checkToken} setUser={setUser} />
          }
        />
      </Routes>
    </div>
    );
 
}
export default App;
