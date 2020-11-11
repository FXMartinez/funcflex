// import React from 'react';

import { Component } from "react";

// import { Component } from "react";

class Article extends Component {
      
    render() {

        const content = this.props.post.content

        return ( 
            // { content = this.props.post.content },
            
            <div className='wp-post' key={this.props.post.ID}>
                    <h1> {this.props.post.title} </h1>

                    <p>
                        {/* {props.post} */}
                    </p>
                    <p>
                        { this.props.removeTags(this.props.post.content) }

                    </p>

                </div>
        );
    }
}

export default Article;