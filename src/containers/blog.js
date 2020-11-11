import ArticlePreview from '../components/article_preview';

function Blog(props) {

    return (

        <>

            { props.posts.map((post) => { 
                return <div className='article preview' key={ post.ID }> 
                            <ArticlePreview post={post} getPost={ props.getPost } removeTags={ props.removeTags } /> 
                        </div> 
                }) 
            }

        </>

    );
}

export default Blog;