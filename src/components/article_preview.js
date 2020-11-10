// import { render } from '@testing-library/react';
import { Link } from 'react-router-dom';
import React from 'react';

class ArticlePreview extends React.Component {

    removeTags = (str) => {
        if ((str===null) || (str===''))
            return false;
        else
        str = str.toString();
        return str.replace( /(<([^>]+)>)/ig, '');
    }
    
    render() {

        console.log('article preview', this.props.post.ID)

        if (this.props.post) {
        
            return (

                <div className='article-preview'>

                    <a href={`/blog/${this.props.post.ID}`} className="blackLink">
                        {this.props.post.featured_image ? (
                            <img
                            className="img-responsive webpic"
                            alt="article header"
                            src={this.props.post.featured_image}
                            />
                            ) : (
                            ""
                            )}

                        <h1 className="article-preview-title"> {this.props.post.title} </h1>

                        <div className="content"> 
                            {this.removeTags(this.props.post.excerpt)} 
                        </div> <br/>

                    </a>
                    
                    <p>
                        <Link to={`/blog/${this.props.post.ID}`}>
                            <button as={ Link } to='/blog/:id' onClick={ () => this.props.getPost(this.props.post.ID) }> Read More </button>  {/* get this link and to path to work and render an article */}
                        </Link>
                    </p>

                </div>

            );
        } else {

            return ( null );

        } // if else statement end

    } // render end

} // class end

export default ArticlePreview;