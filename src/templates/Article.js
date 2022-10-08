import ArticleTitle     from '../components/Typography/ArticleTitle';
import ArticleParagraph from '../components/Typography/ArticleParagraph';
import Picture          from '../components/Pictures/Picture';

function Article() {
	return (
		<article>
			<ArticleTitle articleTitle="Lacinia quis vel eros tempor orci."/>
			<ArticleParagraph/>
			<Picture/>
		</article>
	)
}

export default Article;
