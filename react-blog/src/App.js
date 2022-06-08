import './App.css';
import Navbar from './comps/Navbar';
import Home from './comps/Home';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <div className="main">
        <Home />
      </div>
    </div>
  );
}

export default App;
