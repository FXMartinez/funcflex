// import React from 'react';

import { Component } from "react";

class Article extends Component {

    // state = {
    //     post: ''
    // }

    // componentDidMount() {
    //     Axios
    //         .get(
    //             `http://public-api.wordpress.com/rest/v1/sites/dopeshift.wordpress.com/posts/${this.props.match.params.id}`
    //         )
    //         .then (res => {
    //             this.setState({ post: res.data.posts });
    //             console.log('componentdidmount', this.state.posts);
    //         })
    //         .catch(error => console.log(error));
    //     }

    render() {

        console.log('article', this.props.post)
      
        return (
                <div className='wp-post'>
                    <h1> This is a full Article </h1>

                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

                    <script src="getWordpress.js"></script>
                </div>
        );
    };
}

export default Article;