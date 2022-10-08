import quoteUp from '../../img/png/quoteup.png';

function QuoteUp(props) {
	return (
		<picture className="quoteup">
			<img className="quoteup__content" src={quoteUp} alt={props.alt} width={32} height={32}/>
		</picture>
	)
}

export default QuoteUp;
