

function Button(props){
	return(
		<button className="btn">
			<p className="btn__text" >{props.btnText}{props.icon}</p>
		</button>
	)
}
export default Button;
