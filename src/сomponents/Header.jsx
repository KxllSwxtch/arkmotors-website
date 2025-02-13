import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className='bg-[var(--color-arkBlack)] text-[var(--color-arkGold)] p-4'>
			<div className='container mx-auto flex items-center justify-between'>
				{/* Логотип компании */}
				<div className='logo'>
					<Link to='/'>
						{/* Здесь можно заменить src на путь к вашему логотипу */}
						<img
							src='https://res.cloudinary.com/pomegranitedesign/image/upload/v1739490319/arkmotors/logo.png'
							alt='ArkMotors Logo'
							className='h-10'
						/>
					</Link>
				</div>
				{/* Навигационное меню */}
				<nav>
					<ul className='flex space-x-6'>
						<li>
							<Link
								to='/catalog'
								className='hover:text-[var(--color-arkGoldDark)] transition-colors duration-200'
							>
								Каталог
							</Link>
						</li>
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
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
