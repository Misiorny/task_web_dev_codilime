import invisionLogo from '../img/png/logo.png';

function InvisionLogo(props) {
	return (
		<picture className="invisionLogo">
			<img className="invisionLogo" src={invisionLogo} alt={props.alt}/>
		</picture>
	)
}

export default InvisionLogo;
