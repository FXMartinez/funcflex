// import { Button } from 'semantic-ui-react';
import React from 'react';
import Welcome from '../components/welcome'
import Axios from 'axios';
import Article from '../components/article';
import Blog from './blog';
// import NavBar from '../components/nav_bar'
import {
    Route,
    // Link,
    Switch
} from 'react-router-dom';

class Home extends React.Component {

    state = {
        posts: [],
        post: {},
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

        return  <div className="App-header, Body">

                    <div className="Body">
                        <Switch>

                            <Route exact path='/' render={ () => <Welcome /> } />

                            <Route exact path='/Coding' render={ () => <Blog 
                                                                        posts={this.state.posts}
                                                                        getPost={this.getPost}
                                                                        removeTags={this.removeTags} 
                                                                        /> }/>

                            <Route exact path='/Coding/:id' render={ () => <Article 
                                                                            post={this.state.post}
                                                                            removeTags={this.removeTags}
                                                                        /> } />

                        </Switch>
                    </div>

                </div>

        }
    }

export default Home;