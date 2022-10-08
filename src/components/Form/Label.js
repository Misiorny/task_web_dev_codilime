function Label(props) {
	return (
		<label className="label" htmlFor={props.for}>{props.label}</label>
	)
}

export default Label;
