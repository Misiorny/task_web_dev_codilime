function ArticleParagraph(props) {
	return (
		<article className="article">
			<p className="article__text">{props.articleText}</p>
		</article>
	)
}

export default ArticleParagraph;
