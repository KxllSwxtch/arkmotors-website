// src/components/Footer.jsx
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaTelegram } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className='bg-[#1D1D1D] text-[#D4AF37] py-8 shadow-[0_-10px_15px_-10px_rgba(0,0,0,0.3)] border-t border-[#8C6B1F]'>
			<div className='container mx-auto text-center'>
				{/* Логотип */}
				<img
					src='https://res.cloudinary.com/pomegranitedesign/image/upload/v1742607362/arkmotors/logo_rus.png'
					alt='ArkMotors'
					className='w-52 mx-auto mb-4'
				/>

				{/* Навигация */}
				<nav className='mb-4'>
					<ul className='flex justify-center space-x-6 text-lg'>
						<li>
							<Link
								to='/contacts'
								className='hover:text-[#8C6B1F] transition duration-300'
							>
								Контакты
							</Link>
						</li>
						<li>
							<Link
								to='/about'
								className='hover:text-[#8C6B1F] transition duration-300'
							>
								О нас
							</Link>
						</li>
						<li>
							<Link
								to='/cases'
								className='hover:text-[#8C6B1F] transition duration-300'
							>
								Кейсы
							</Link>
						</li>
						<li>
							<Link
								to='/catalog'
								className='hover:text-[#8C6B1F] transition duration-300'
							>
								Каталог
							</Link>
						</li>
					</ul>
				</nav>

				{/* Контакты */}
				<div className='text-md text-gray-400 mb-4'>
					<p>+82 10-3642-2039 — Сергей Пан (Корея)</p>
					<p>Адрес: 경기 용인시 기흥구 중부대로 242 (AutoHub)</p>
				</div>

				{/* Социальные сети */}
				<div className='flex justify-center space-x-6 mb-4'>
					<a
						href='https://www.instagram.com/romanovich.pan/'
						target='_blank'
						rel='noopener noreferrer'
						className='text-[#D4AF37] hover:text-[#8C6B1F] transition duration-300 text-2xl'
					>
						<FaInstagram />
					</a>
					<a
						href='https://www.facebook.com/profile.php?id=100013987413426'
						target='_blank'
						rel='noopener noreferrer'
						className='text-[#D4AF37] hover:text-[#8C6B1F] transition duration-300 text-2xl'
					>
						<FaFacebook />
					</a>
					<a
						href='https://t.me/Arkmotors'
						target='_blank'
						rel='noopener noreferrer'
						className='text-[#D4AF37] hover:text-[#8C6B1F] transition duration-300 text-2xl'
					>
						<FaTelegram />
					</a>
				</div>

				{/* Авторские права */}
				<p className='text-sm text-gray-500'>
					© {new Date().getFullYear()} ArkMotors. Все права защищены.
				</p>
			</div>
		</footer>
	)
}

export default Footer
