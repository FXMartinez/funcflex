import { Button } from 'semantic-ui-react';
import React from 'react';
import Welcome from '../components/welcome'
import Axios from 'axios';
import Article from '../components/article';
// import ArticlePreview from '../components/article_preview';
import {
    // BrowserRouter as Router,
    Route,
    Link,
    // Redirect,
    Switch
} from 'react-router-dom';
import Blog from './blog';

class Home extends React.Component {

    state = {
        post: {}
    }

    getPost = (ID) => {
        Axios
            .get(
                `http://public-api.wordpress.com/rest/v1/sites/dopeshift.wordpress.com/posts/${ID}`
            )
            .then (res => {
                this.setState({ post: res.data });
                console.log('componentdidmount', this.state.post);
            })
            // .then(res => console.log(res.data))
            .catch(error => console.log(error));
    }

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

                    <header>
                        We Making Sites Boi!
                    </header> <br/>

                    <div>
                        <Switch>

                            <Route exact path='/' render={ () => <Welcome /> } />

                            <Route exact path='/Blog' render={ () => <Blog getPost={this.getPost} /> }/>

                            <Route exact path='/Blog/:id' render={ () => <Article 
                                                                            post={this.state.post}
                                                                            removeTags={this.removeTags}
                                                                        /> } />

                        </Switch>
                    </div>

                </div>

        }
    }

export default Home;