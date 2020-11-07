import { Button } from 'semantic-ui-react';
import React from 'react';
// import Article from '../components/article';
// import {
//     BrowserRouter as Router,
//     Route
//     // Link,
//     // Switch
// } from 'react-router-dom';
import Blog from './blog';

class Home extends React.Component {

    removeTags = (str) => {
        if ((str===null) || (str===''))
            return false;
        else
        str = str.toString();
        return str.replace( /(<([^>]+)>)/ig, '');
    }

    render() {

        return  <div className="App-header">

                    <header>
                        We Making Sites Boi!
                    </header>

                    <p>
                        <Button color='black' content='Dope' icon={{ color: 'blue', name: 'like' }} />
                    </p>
                    <div>
                        <Blog />
                    </div>
                </div>

        }
    }

export default Home;