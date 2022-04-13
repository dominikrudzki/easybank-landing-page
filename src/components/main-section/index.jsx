import mockups from '../../assets/image-mockups.png'
import { Button } from "../../shared/components/button";
import styles from './main-section.module.css'

export const MainSection = () => {
	return (
		<section className={ styles.section }>
			<figure className={ styles.picture }>
				<img src={ mockups } alt=""/>
			</figure>

			<div className={ styles.text }>
				<h1 className='title'>Next generation digital banking</h1>
				<p className='gray'>
					Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving,
					budgeting,
					investing, and much more.
				</p>
				<div className={ styles.button }><Button/></div>
			</div>
		</section>
	)
}
