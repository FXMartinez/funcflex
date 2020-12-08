function ArticleContent(props) {

    return (
        <div id='article-preview' dangerouslySetInnerHTML={{__html: props.content}} />
    );
}

export default ArticleContent;