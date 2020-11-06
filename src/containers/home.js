import { Button } from 'semantic-ui-react';
import React from 'react';
// import Post from '../components/post';
// import {
//     BrowserRouter as Router,
//     Route
//     // Link,
//     // Switch
// } from 'react-router-dom';
import Blog from './blog';

class Home extends React.Component {

    render() {

        return  <div className="App-header">

                    <header>
                        We Making Sites Boi!
                    </header>

                    <p>
                        <Button color='black' content='Dope' icon={{ color: 'blue', name: 'like' }} />
                    </p>
                    <p>
                        <Blog />
                    </p>

                </div>

        }
    }

export default Home;