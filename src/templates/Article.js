import ArticleParagraph, {ArticleTitle} from '../components/Typography';
import Picture          from '../components/Pictures';

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
