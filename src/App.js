// import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './containers/home';
import NavBar from './components/nav_bar';
import React from 'react';

class App extends React.Component {
  state = {
    page: 'Home'
  }

  getCurrentPage = (currentPage) => {
    this.setState({
        page: currentPage
    })
  }

  // getArgument = (arg) => {
  //   switch(arg) {
  //     case 0:
  //     if ('http://localhost:3001' === arg) {
  //       return 'Home'
  //     } 
  //     break;
  //     case 1:
  //     if ('http://localhost:3001/Blog' === arg) {
  //       return 'Coding';
  //     }
  //       break;
  //     case 2:
  //     if ('http://localhost:3001/Fitness' === arg) {
  //       return 'Fitness';
  //     }
  //       break;
  //     case 3:
  //     if ('http://localhost:3001/Gaming' === arg) {
  //       return 'Gaming';
  //     }
  //       break;
  //     default:
  //       return 'Home'
  //   }
  // }

  render() {

      return (
        <div className="App">
        <Router>
          <NavBar getPage={this.getCurrentPage} currentPage={this.state.page}/>
          <Home />
        </Router>
      </div>
    );
  }
}

export default App;
