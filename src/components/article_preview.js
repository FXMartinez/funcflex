// import { render } from '@testing-library/react';
import { Link } from 'react-router-dom';
import React from 'react';

class ArticlePreview extends React.Component {
    
    render() {

        // console.log('article preview rendered', this.props)

        if (this.props.post) {
        
            return (

                <div className='article-preview'>

                    {/* <a href={`/Coding/${this.props.post.ID}`} className="blackLink"> */}
                    <div>

                        {this.props.post.featured_image 
                        ?
                        (  <img
                            className="img-responsive webpic"
                            alt="article header"
                            src={this.props.post.featured_image}
                            />
                            ) 
                            : ( "" ) }

                        <h1 className="article-preview-title"> {this.props.post.title} </h1>

                        <div className="content"> 
                            {this.props.removeTags(this.props.post.excerpt)} 
                        </div> <br/>
                    </div>

                    {/* </a> */}
                    
                    <p>
                        <Link to={`/Coding/${this.props.post.ID}`}>
                            <button 
                                as={ Link } 
                                to='/Coding/:id' 
                                onClick={ () => this.props.getPost(this.props.post.ID) }> Read More 
                            </button>  {/* get this link and to path to work and render an article */}
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