// import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './containers/home';
// import NavBar from './components/nav_bar';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavBar /> */}
        <Home />
      </Router>
    </div>
  );
}

export default App;
