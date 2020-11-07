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

        console.log('article preview', this.props)

        // return ( null );

        if (this.props.post) {
        
            return (

                <div className='article'>

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

                    <h1 className="text-center"> {this.props.post.title} </h1>

                    <div className="content"> {this.removeTags(this.props.post.excerpt)} </div>
                </a>

                <Link to={`/blog/${this.props.post.ID}`}>
                    <button className="btn"> Read More </button>
                </Link>

            </div>

            );
        } else {

            return ( null );

        } // if else statement end

    } // render end

} // class end

export default ArticlePreview;