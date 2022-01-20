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

function App() {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      checkToken();
    }
  }, []);

  console.log(user);

  const handleLogOut = () => {
    setUser(null);
    toggleAuthenticated(false);
    localStorage.clear();
  };

  return (
    <div className="App">
      <Navbar
        user={user}
        authenticated={authenticated}
        handleLogOut={handleLogOut}
      />
      {/* {user && authenticated && (
        <ProtectedRoute
          authenticated={authenticated}
          user={user}
          path="/dashboard"
          element={<Dashboard />}
        />
      )} */}

      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route
          path="/login"
          element={
            <LogIn
              setUser={setUser}
              user={user}
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
            <Dashboard user={user} checkToken={checkToken} setUser={setUser} />
          }
        />
        <Route path="/safety" element={<Safety />} />
        <Route
          path="/events"
          element={
            <Events user={user} checkToken={checkToken} setUser={setUser} />
          }
        />
      </Routes>
    </div>
  );
}
export default App;
