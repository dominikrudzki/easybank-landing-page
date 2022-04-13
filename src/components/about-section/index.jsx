import styles from './about-section.module.css'
import budgeting from '../../assets/icon-budgeting.svg'
import online from '../../assets/icon-online.svg'
import onboarding from '../../assets/icon-onboarding.svg'
import api from '../../assets/icon-api.svg'

export const AboutSection = () => {
	const items = [
		{
			img: online,
			title: 'Online Banking',
			text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
		},
		{
			img: budgeting,
			title: 'Simple Budgeting',
			text: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
		},
		{
			img: onboarding,
			title: 'Fast Onboarding',
			text: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
		},
		{
			img: api,
			title: 'Fast Open API',
			text: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
		}
	]

	return (
		<div className={ styles.wrapper }>
			<section className={ styles.section }>
				<div>
					<h2 className='title'>Why choose Easybank?</h2>
					<p className='gray'>We leverage Open Banking to turn your bank account into your financial hub. Control your
						finances like never
						before.</p>
				</div>

				<div className={ styles.list }>
					{ items.map((item, i) => (
						<div key={ i }>
							<img src={ item.img } alt=""/>
							<p>{ item.title }</p>
							<p className='gray'>{ item.text }</p>
						</div>
					)) }
				</div>
			</section>
		</div>
	)
}
