import plusSign from '../img/png/plus.png';

function PlusSign(props) {
	return (
		<img className="plusSign" src={plusSign} alt={props.alt} width={44} height={44}/>
	)
}

export default PlusSign;
