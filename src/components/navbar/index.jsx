import logo from '../../assets/logo.svg'
import hamburger from '../../assets/icon-hamburger.svg'
import close from '../../assets/icon-close.svg'
import styles from './navbar.module.css'
import { useEffect, useState } from "react";
import { Button } from "../../shared/components/button";

export const Navbar = () => {
	const navLinks = [
		{ path: '#', name: 'Home' },
		{ path: '#', name: 'About' },
		{ path: '#', name: 'Contact' },
		{ path: '#', name: 'Blog' },
		{ path: '#', name: 'Careers' },
	]
	const [open, setOpen] = useState(false)

	window.addEventListener('resize', () => {
		window.screen.width >= 1024 && setOpen(false)
	})

	return (
		<>
			<div className={ styles.wrapper }>
				<header className={ styles.nav }>
					<img src={ logo } alt="logo"/>

					<ul className={ `${ styles.list } ${ (open && window.innerWidth < 1024 ? styles.active : '') }` }>
						{ navLinks.map((link, i) =>
							<li
								onClick={ () => setOpen(!open) }
								key={ i }
							><a href={ link.path }>{ link.name }</a></li>)
						}
					</ul>

					<button onClick={ () => setOpen(!open) } className={ styles.hamburger }>
						<img src={ open ? close : hamburger } alt=""/>
					</button>
					<i className={ styles.list }>
						<Button/>
					</i>
				</header>
			</div>
			{ open && <div onClick={ () => setOpen(false) } className={ styles.backdrop }/> }
		</>
	)
}
