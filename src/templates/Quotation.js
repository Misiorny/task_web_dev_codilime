import Quote        from '../components/Typography/Quote';
import ArticleTitle from '../components/Typography/ArticleTitle';
import QuoteDown    from '../components/Icons/QuoteDown';
import QuoteUp      from '../components/Icons/QuoteUp';
import ColoredText  from '../components/Typography/ColoredText';
import InvisionLogo from '../components/Pictures/InvisionLogo';

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
