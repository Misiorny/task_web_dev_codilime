import ExternalLink from './ExternalLink';

function Card(props) {
	return (
		<div className="card">
			{props.icon}
			<ExternalLink href={props.href} />
		</div>
	)
}

export default Card;
