import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi' // Иконки для бургер-меню
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa'

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}

	// Закрываем меню при клике на ссылку или на фон
	const closeMenu = () => {
		setMenuOpen(false)
	}

	return (
		<header className='bg-[var(--color-arkBlack)] text-[var(--color-arkGold)] p-4 shadow-md fixed w-full top-0 z-50'>
			<div className='container mx-auto flex items-center justify-between'>
				{/* Логотип компании */}
				<div className='logo'>
					<Link to='/'>
						<img src='/logo.png' alt='ArkMotors Logo' className='h-10' />
					</Link>
				</div>

				{/* Десктопное меню */}
				<nav className='hidden md:flex'>
					<ul className='flex space-x-6 text-lg font-medium'>
						<li>
							<Link
								to='/catalog'
								className='hover:text-[var(--color-arkGoldDark)] transition-colors duration-200'
							>
								Каталог авто
							</Link>
						</li>
						{/* <li>
							<Link
								to='/export-catalog'
								className='hover:text-[var(--color-arkGoldDark)] transition-colors duration-200'
							>
								Каталог авто на заказ
							</Link>
						</li> */}
						{/* <li>
							<Link
								to='/contacts'
								className='hover:text-[var(--color-arkGoldDark)] transition-colors duration-200'
							>
								Контакты
							</Link>
						</li> */}
						<li>
							<Link
								to='/about'
								className='hover:text-[var(--color-arkGoldDark)] transition-colors duration-200'
							>
								О нас
							</Link>
						</li>

						<div className='flex flex-row justify-between items-center gap-4'>
							<li>
								<a
									href='https://www.instagram.com/arkmotors_24/'
									target='_blank'
									rel='noopener noreferrer'
									className='text-[#d62976] hover:text-[#d62977c4] transition duration-300 text-2xl'
								>
									<FaInstagram />
								</a>
							</li>
							<li>
								<a
									href='https://www.instagram.com/romanovich.pan/'
									target='_blank'
									rel='noopener noreferrer'
									className='text-[#d62976] hover:text-[#d62977c4] transition duration-300 text-2xl'
								>
									<FaInstagram />
								</a>
							</li>
							<li>
								<a
									href='https://www.facebook.com/profile.php?id=100013987413426'
									target='_blank'
									rel='noopener noreferrer'
									className='text-[#1877F2] hover:text-[#1876f2cd] transition duration-300 text-2xl'
								>
									<FaFacebook />
								</a>
							</li>
							<li>
								<a
									href='https://t.me/Arkmotors'
									target='_blank'
									rel='noopener noreferrer'
									className='text-[#0088cc] hover:text-[#0088ccca] transition duration-300 text-2xl'
								>
									<FaTelegram />
								</a>
							</li>
						</div>

						{/* <li className='flex gap-2 font-light ml-5'>
							<span>+82 10-3642-2039 - </span>
							<span>Пан Сергей</span>
						</li> */}
						{/* <li>
							<Link
								to='/cases'
								className='hover:text-[var(--color-arkGoldDark)] transition-colors duration-200'
							>
								Кейсы
							</Link>
						</li> */}
					</ul>
				</nav>

				{/* Мобильное меню */}
				<div className='md:hidden'>
					<button
						onClick={toggleMenu}
						className='text-[var(--color-arkGold)] focus:outline-none'
					>
						{menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
					</button>
				</div>
			</div>

			{/* Оверлей на фоне */}
			{menuOpen && (
				<div
					className='fixed inset-0 bg-black bg-opacity-50 z-40'
					onClick={closeMenu}
				></div>
			)}

			{/* Бургер-меню (мобильная версия) */}
			<div
				className={`fixed top-0 right-0 w-full h-full bg-[var(--color-arkBlack)] shadow-lg transform transition-transform duration-300 z-50 ${
					menuOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<div className='flex justify-end p-4'>
					<button
						onClick={closeMenu}
						className='text-[var(--color-arkGold)] focus:outline-none'
					>
						<HiX size={28} />
					</button>
				</div>

				<ul className='flex flex-col items-center justify-center h-2/3 space-y-6 text-lg font-medium mt-10'>
					<li>
						<Link
							to='/catalog'
							onClick={closeMenu}
							className='hover:text-[var(--color-arkGoldDark)]'
						>
							Каталог авто
						</Link>
					</li>
					{/* <li>
						<Link
							to='/export-catalog'
							onClick={closeMenu}
							className='hover:text-[var(--color-arkGoldDark)]'
						>
							Каталог авто на заказ
						</Link>
					</li> */}
					{/* <li>
						<Link
							to='/contacts'
							onClick={closeMenu}
							className='hover:text-[var(--color-arkGoldDark)]'
						>
							Контакты
						</Link>
					</li> */}
					<li>
						<Link
							to='/about'
							onClick={closeMenu}
							className='hover:text-[var(--color-arkGoldDark)]'
						>
							О нас
						</Link>
					</li>

					<div className='flex flex-row justify-between items-center gap-10 mt-10'>
						<li>
							<a
								href='https://www.instagram.com/arkmotors_24/'
								target='_blank'
								rel='noopener noreferrer'
								className='text-[#d62976] hover:text-[#d62977c4] transition duration-300 text-2xl'
							>
								<FaInstagram />
							</a>
						</li>
						<li>
							<a
								href='https://www.instagram.com/romanovich.pan/'
								target='_blank'
								rel='noopener noreferrer'
								className='text-[#d62976] hover:text-[#d62977c4] transition duration-300 text-4xl'
							>
								<FaInstagram />
							</a>
						</li>
						<li>
							<a
								href='https://www.facebook.com/profile.php?id=100013987413426'
								target='_blank'
								rel='noopener noreferrer'
								className='text-[#1877F2] hover:text-[#1876f2cd] transition duration-300 text-4xl'
							>
								<FaFacebook />
							</a>
						</li>
						<li>
							<a
								href='https://t.me/Arkmotors'
								target='_blank'
								rel='noopener noreferrer'
								className='text-[#0088cc] hover:text-[#0088ccca] transition duration-300 text-4xl'
							>
								<FaTelegram />
							</a>
						</li>
					</div>
					{/* <li className='flex flex-col items-center gap-2 font-light mt-5'>
						<span>+82 10-3642-2039</span>
						<span>Пан Сергей</span>
					</li> */}
					{/* <li>
						<Link
							to='/cases'
							onClick={closeMenu}
							className='hover:text-[var(--color-arkGoldDark)]'
						>
							Кейсы
						</Link>
					</li> */}
				</ul>
			</div>
		</header>
	)
}

export default Header
