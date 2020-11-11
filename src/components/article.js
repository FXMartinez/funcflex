import React from "react";
import ArticleContent from "./article_content";

class Article extends React.Component {

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

                    <div className='post-body'>

                        <ArticleContent removeTags={this.props.removeTags} content={ this.state.content } />

                    </div>

                </div>
        );
    }
}

export default Article;