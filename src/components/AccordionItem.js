import OtherTitle       from './OtherTitle';
import ArticleParagraph from './ArticleParagraph';

function AccordionItem(props) {
	return (
		<section className="accordionItem">
			<div className="accordionItem__text">
				<OtherTitle otherTitle={props.otherTitle}/>
				<ArticleParagraph articleText={props.articleText}/>
			</div>
			<div className="accordionIcon">
				{props.sign}
			</div>
		</section>
	)
}

export default AccordionItem;
