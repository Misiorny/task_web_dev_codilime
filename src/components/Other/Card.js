import ExternalLink from '../Navigation';

function Card(props) {
	return (
		<div className="card">
			{props.icon}
			<ExternalLink href={props.href} />
		</div>
	)
}

export default Card;
