import { Quote, ArticleTitle, ColoredText } from '../components/Typography';
import { QuoteDown, QuoteUp }               from '../components/Icons';
import { InvisionLogo }                     from '../components/Pictures';

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
