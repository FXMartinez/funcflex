// import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './containers/home';
import NavBar from './components/nav_bar';
import React from 'react';

class App extends React.Component {
  state = {
    page: ''
  }

  getCurrentPage = (currentURL) => {
    this.setState({
        page: currentURL
    })
  }

  render() {

      return (
        <div className="App">
        <Router>
          <NavBar getPage={this.getCurrentPage}/>
          <Home />
        </Router>
      </div>
    );
  }
}

export default App;
