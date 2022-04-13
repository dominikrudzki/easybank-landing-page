import styles from './articles-section.module.css'
import currency from '../../assets/image-currency.jpg'
import restaurant from '../../assets/image-restaurant.jpg'
import plane from '../../assets/image-plane.jpg'
import confetti from '../../assets/image-confetti.jpg'

export const ArticlesSection = () => {
	const articles = [
		{
			img: currency,
			author: 'By Claire Robinson',
			title: 'Receive money in any currency with no fees',
			text: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'
		},
		{
			img: restaurant,
			author: 'By Wilson Hutton',
			title: 'Treat yourself without worrying about money',
			text: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
		},
		{
			img: plane,
			author: 'By Wilson Hutton',
			title: 'Take your Easybank card wherever you go',
			text: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
		},
		{
			img: confetti,
			author: 'By Claire Robinson',
			title: 'Our invite-only Beta accounts are now live!',
			text: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …'
		},
	]

	return (
		<div>
			<section className={ styles.section }>
				<div>
					<h2 className='title'>Latest Articles</h2>
				</div>
				<div>
					{ articles.map((article, i) => (
						<article key={ i }>
							<img src={ article.img } alt=""/>
							<div>
								<span>{ article.author }</span>
								<p>{ article.title }</p>
								<p>{ article.text }</p>
							</div>
						</article>
					)) }
				</div>
			</section>
		</div>
	)
}
