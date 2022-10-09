import { OtherTitle } from '../Typography';
import { ListItem }   from '../Navigation';

function UnorderedList(props) {
	return (
		<div className="productsList">
			<OtherTitle otherTitle={props.otherTitle}/>
			<ul className="list">
				<ListItem listText="Tiramisu chocolate"/>
				<ListItem listText="Pastry tart"/>
				<ListItem listText="Pllipop brownie"/>
			</ul>
		</div>
	)
}

export default UnorderedList;

