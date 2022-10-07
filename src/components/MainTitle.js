import ColoredText from './ColoredText';

function MainTitle(props){
	return(
		<h1 className="mainTitle"><ColoredText coloredText={props.coloredText}/> {props.mainTitle}</h1>
	)
}
export default MainTitle;
