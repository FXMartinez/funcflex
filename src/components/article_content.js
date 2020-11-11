function ArticleContent(props) {

    return (
        <div id='test' dangerouslySetInnerHTML={{__html: props.content}} />
    );
}

export default ArticleContent;