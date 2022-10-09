import { Navbar } from '../components/Navigation';
import Button     from '../components/Form';
import Logo       from '../components/Pictures';
import RightArrow from '../components/Icons';

function Header() {
	return (
		<header className="header">
			<div className="header__head">
				<Navbar/>
				<Button btnText="Contact Us " icon={<RightArrow/>}/>
			</div>
			<Logo/>
		</header>
	)
}

export default Header;
