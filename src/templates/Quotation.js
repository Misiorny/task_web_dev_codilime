import Quote        from '../components/Quote';
import ArticleTitle from '../components/ArticleTitle';
import QuoteDown    from '../components/QuoteDown';
import QuoteUp      from '../components/QuoteUp';
import ColoredText  from '../components/ColoredText';
import InvisionLogo from '../components/InvisionLogo';

function Quotation() {
	return (
		<section className="quotation">
			<ColoredText
				coloredText={<ArticleTitle articleTitle="Bibendum at varius vel pharetra vel turpis nunc eget lorem."/>}
			/>
			<section className="quotation__text">
				<QuoteDown/>
				<Quote/>
				<QuoteUp/>
				<InvisionLogo alt="invisonLogo"/>
			</section>
		</section>
	)
}

export default Quotation;
