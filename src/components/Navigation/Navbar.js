
function Navbar(){
	return(
		<ul className="navbar">
			<li className='navbar__item'><a className='navbar__item__link' href="/overview">Overview</a></li>
			<li className='navbar__item'><a className='navbar__item__link' href="/about">About</a></li>
			<li className='navbar__item'><a className='navbar__item__link' href="/resources">Resources</a></li>
			<li className='navbar__item'><a className='navbar__item__link' href="/network">Network</a></li>
			<li className='navbar__item'><a className='navbar__item__link' href="/cloud">Cloud</a></li>
			<li className='navbar__item'><a className='navbar__item__link' href="/download">Download</a></li>
			<li className='navbar__item'><a className='navbar__item__link' href="/contact">Contact</a></li>
		</ul>
	)
}
export default Navbar;
