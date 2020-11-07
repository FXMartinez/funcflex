// import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
// import { Button } from 'semantic-ui-react';
import Home from './containers/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
