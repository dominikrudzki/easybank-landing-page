import styles from './footer.module.css'
import logo_f from '../../assets/logo-footer.svg'
import fb from '../../assets/icon-facebook.svg'
import yt from '../../assets/icon-youtube.svg'
import tw from '../../assets/icon-twitter.svg'
import pr from '../../assets/icon-pinterest.svg'
import ig from '../../assets/icon-instagram.svg'
import { Button } from "../../shared/components/button";

export const Footer = () => {
	const socials = [
		{ path: '#', icon: fb },
		{ path: '#', icon: yt },
		{ path: '#', icon: tw },
		{ path: '#', icon: pr },
		{ path: '#', icon: ig },
	]

	return (
		<div className={ styles.wrapper }>
			<footer className={ styles.footer }>
				<div>
					<img src={ logo_f } alt=""/>
					<div className={ styles.socials }>
						{ socials.map((social, i) => (
							<a key={ i } href={ social.path }>
								<img src={ social.icon } alt=""/>
							</a>)) }
					</div>
				</div>
				<div className={ styles.links }>
					<ul>
						<li><a href='#'>About Us</a></li>
						<li><a href='#'>Contact</a></li>
						<li><a href='#'>Blog</a></li>
					</ul>
					<ul>
						<li><a href='#'>Careers</a></li>
						<li><a href='#'>Support</a></li>
						<li><a href='#'>Privacy Policy</a></li>
					</ul>
				</div>
				<div>
					<div className={ styles.button }>
						<Button/>
					</div>
					<p className={ styles.copy }>&copy; Easybank. All Rights Reserver</p>
				</div>
				<div className={ styles.attribution }>
					Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
					Coded by <a href="https://github.com/dominikrudzki">Dominik Rudzki</a>.
				</div>
			</footer>
		</div>
	)
}
