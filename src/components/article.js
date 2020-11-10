// import React from 'react';

import { Component } from "react";

class Article extends Component {

    // state = {
    //     post: ''
    // }

    removeTags = (str) => {
        if ((str===null) || (str===''))
            return false;
        else
        str = str.toString();
        return str.replace( /(<([^>]+)>)/ig, '');
    }

    render() {

        // console.log('article')
      
        return (
                <div className='wp-post' key={this.props.post.ID}>
                    <h1> {this.props.post.title} </h1>

                    <p>
                        {this.props.post.content}
                    </p>

                    {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

                    <script src="getWordpress.js"></script> */}


                </div>
        );
    };
}

export default Article;