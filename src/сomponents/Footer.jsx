import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className='bg-[var(--color-arkBlack)] text-[var(--color-arkGold)] py-6'>
			<div className='container mx-auto text-center'>
				<p className='mb-2'>
					© {new Date().getFullYear()} ArkMotors. Все права защищены.
				</p>
				<nav>
					<ul className='flex justify-center space-x-4'>
						<li>
							<Link
								to='/contacts'
								className='hover:text-[var(--color-arkGoldDark)] transition-colors duration-200'
							>
								Контакты
							</Link>
						</li>
						<li>
							<Link
								to='/about'
								className='hover:text-[var(--color-arkGoldDark)] transition-colors duration-200'
							>
								О нас
							</Link>
						</li>
						<li>
							<Link
								to='/cases'
								className='hover:text-[var(--color-arkGoldDark)] transition-colors duration-200'
							>
								Кейсы
							</Link>
						</li>
						<li>
							<Link
								to='/catalog'
								className='hover:text-[var(--color-arkGoldDark)] transition-colors duration-200'
							>
								Каталог
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	)
}

export default Footer
