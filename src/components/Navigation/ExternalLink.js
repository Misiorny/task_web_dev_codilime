function ExternalLink(props) {
	return (
		<p className="externalLink__text">
			<a className="externalLink" href={props.href} target="_blank" rel="noopener noreferrer">View details</a> &#8250;
		</p>
	)
}

export default ExternalLink;
