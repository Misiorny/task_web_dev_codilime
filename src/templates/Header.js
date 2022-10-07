import Navbar     from '../components/Navbar';
import Button     from '../components/Button';
import Logo       from '../components/Logo';
import RightArrow from '../components/RightArrow';

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
