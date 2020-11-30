import { Button } from 'semantic-ui-react';
import React from 'react';
import Welcome from '../components/welcome'
import Axios from 'axios';
import Article from '../components/article';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Blog from './blog';

class Home extends React.Component {

    state = {
        posts: [],
        post: {}
    }

    componentDidMount() {
        Axios
            .get(
                "https://public-api.wordpress.com/rest/v1/sites/dopeshift.wordpress.com/posts"
            )
            .then (res => {
                this.setState({ posts: res.data.posts });
                // console.log('componentdidmount', this.state.posts);
            })
            .catch(error => console.log(error));
    }

    // getPost = (ID) => {
    //     Axios
    //         .get(
    //             `http://public-api.wordpress.com/rest/v1/sites/dopeshift.wordpress.com/posts/${ID}`
    //         )
    //         .then (res => {
    //             this.setState({ post: res.data });
    //             // console.log('componentdidmount', this.state.post);
    //         })
    //         .then(res => console.log('inside getPost', res.data))
    //         .catch(error => console.log(error));
    // }

    getPost = (ID) => {
        return this.state.posts.find((post) => {
            return post.ID === ID ? this.setState({ post: {...post} }) : null
        })
    }

    removeTags = (str) => {
        if ((str === null) || (str === ''))
            return false;
        else
        str = str.toString();
        return str.replace( /(<([^>]+)>)/ig, '');
    }

    pushUrl = () => {
        this.props.history.push('/ArticlePreview')
    }

    render() {

        // console.log('home rendered')

        return  <div className="App-header">
            
                    <div className='nav'>
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
                    </div>

                    <header>
                        We Making Sites Boi!
                    </header> <br/>

                    <div>
                        <Switch>

                            <Route exact path='/' render={ () => <Welcome /> } />

                            <Route exact path='/Blog' render={ () => <Blog 
                                                                        posts={this.state.posts}
                                                                        getPost={this.getPost}
                                                                        removeTags={this.removeTags} 
                                                                        /> }/>

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