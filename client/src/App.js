import './styles/App.css';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/login';
import Safety from './pages/Safety';
import About from './pages/About';


function App() {

  return (
    <div className="App">
    <h1>This is the Creature Collab app</h1>

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/safety' element={<Safety />} />
      </Routes>

    </div>
  );
}

export default App;
