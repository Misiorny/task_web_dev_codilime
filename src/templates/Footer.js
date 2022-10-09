import UnorderedList from '../components/UnorderedList';
import { SocialBox }     from '../components/Other';

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__lists">
				<UnorderedList otherTitle="Products"/>
				<UnorderedList otherTitle="Collaboration"/>
			</div>
			<SocialBox/>
			<footer className="footer__footer">
				<p className="footer__footer-company">© 2003 - 2022 Carrot cake sweet pie Sp. z o.o. All rights reserved.</p>
				<p className="footer__footer-legal">Legal</p>
				<p className="footer__footer-policy"><a className="footer__footer-link" href="/overview">Privacy policy</a></p>
				<p className="footer__footer-os">Proud to be Open Source</p>
			</footer>
		</footer>
	)
}

export default Footer;
