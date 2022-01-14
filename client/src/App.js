import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>THIS IS THE CREATURE COLLAB-APP</h1>

      </header>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/safety' element={<Safety />} />
      </Routes>

    </div>
  );
}

export default App;
