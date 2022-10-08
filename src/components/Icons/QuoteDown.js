import quoteDown from '../../img/png/quotedown.png';

function QuoteDown(props) {
	return (
		<picture className="quotedown">
			<img className="quotedown__content" src={quoteDown} alt={props.alt} width={32} height={32}/>
		</picture>
	)
}

export default QuoteDown;
