import ExternalLink from '../Navigation/ExternalLink';

function Card(props) {
	return (
		<div className="card">
			{props.icon}
			<ExternalLink href={props.href} />
		</div>
	)
}

export default Card;
