import Axios from 'axios';
import React, { Component } from 'react';
import ArticlePreview from '../components/article_preview';
// import {
//     BrowserRouter as Router,
//     Route
//     // Link,
//     // Switch
// } from 'react-router-dom';

class Blog extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        Axios
            .get(
                "http://public-api.wordpress.com/rest/v1/sites/dopeshift.wordpress.com/posts"
            )
            .then (res => {
                this.setState({ posts: res.data.posts });
                console.log('componentdidmount', this.state.posts);
            })
            .catch(error => console.log(error));
    }

    render() {

        console.log('after render', this.state.posts)

        return (

            <>
                { this.state.posts.map((post) => { 
                    return <p className='article preview'> 
                                <ArticlePreview post={post}/> 
                            </p> 
                    }) 
                }
            </>

        )
    }

}

export default Blog;