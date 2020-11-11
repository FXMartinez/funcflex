// import React from 'react';

import { Component } from "react";

// import { Component } from "react";

class Article extends Component {

    state = {
        content: ''
    }

    componentDidMount(){
        this.setState({
            content: this.props.post.content
        })
    }
      
    render() {

        return ( 
            
            <div className='wp-post' key={this.props.post.ID}>
                    <h1> { this.props.post.title } </h1>

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