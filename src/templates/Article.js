import ArticleTitle     from '../components/ArticleTitle';
import ArticleParagraph from '../components/ArticleParagraph';
import Picture          from '../components/Picture';

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
