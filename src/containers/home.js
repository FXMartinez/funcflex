import { Button } from 'semantic-ui-react';
import React from 'react';
import Welcome from '../components/welcome'
// import Article from '../components/article';
import {
    // BrowserRouter as Router,
    Route,
    Link,
    // Redirect,
    Switch
} from 'react-router-dom';
import Blog from './blog';
import ArticlePreview from '../components/article_preview';

class Home extends React.Component {

    removeTags = (str) => {
        if ((str===null) || (str===''))
            return false;
        else
        str = str.toString();
        return str.replace( /(<([^>]+)>)/ig, '');
    }

    pushUrl = () => {
        this.props.history.push('/ArticlePreview')
    }

    render() {

        return  <div className="App-header">

                    <header>
                        We Making Sites Boi!
                    </header>

                    <p>
                        <Button 
                            color='black' content='Home' 
                            icon={{ color: 'blue', name: 'like' }}
                            as={ Link }
                            to='/'
                        />
                        <Button 
                            color='black' content='Blog' 
                            icon={{ color: 'red', name: 'like' }}
                            as={ Link }
                            to='/Blog'
                        />
                        <Button 
                            color='black' content='Article' 
                            icon={{ color: 'green', name: 'like' }}
                            as={ Link }
                            to='/Article'
                        />
                    </p>
                <div>
                    <Switch>

                        <Route exact path='/' render={ () => <Welcome /> } />

                        <Route exact path='/ArticlePreview' render={ () => <ArticlePreview /> } />

                        <Route exact path='/Blog' render={ () => <Blog /> }/>

                    </Switch>
                </div>

                </div>

        }
    }

export default Home;