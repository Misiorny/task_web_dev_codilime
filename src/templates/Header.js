import Navbar from '../components/Navigation/Navbar';
import Button     from '../components/Form/Button';
import Logo       from '../components/Pictures/Logo';
import RightArrow from '../components/Icons/RightArrow';

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
