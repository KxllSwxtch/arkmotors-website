import { Link } from 'react-router-dom'
import { FaTruck, FaFileContract, FaTools } from 'react-icons/fa'
import { motion } from 'framer-motion'

const HeroSection = () => {
	return (
		<section className='relative bg-[#1D1D1D] text-white min-h-screen flex items-center overflow-hidden pt-10'>
			{/* Background */}
			<div className='absolute inset-0'>
				<img
					src='https://res.cloudinary.com/pomegranitedesign/image/upload/v1739490319/arkmotors/logo.png'
					alt='Background'
					className='w-full h-full object-cover opacity-20'
				/>
			</div>

			{/* Overlay */}
			<div className='absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-90'></div>

			{/* Content */}
			<div className='container mx-auto px-6 relative z-10 text-center flex flex-col items-center'>
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className='text-4xl md:text-6xl font-bold leading-tight text-center'
				>
					<span className='text-[#D4AF37]'>ПРОДАЖА</span> АВТО В ЮЖНОЙ КОРЕЕ и{' '}
					<span className='text-[#D4AF37]'>ЭКСПОРТ</span> <br />
					В СТРАНЫ СНГ <br />
					<span className='text-lg md:text-2xl font-medium text-white mt-4 block'>
						А также <span className='text-[#D4AF37]'>выкуп авто</span> и{' '}
						<span className='text-[#D4AF37]'>Trade-in</span>
					</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.3 }}
					className='text-lg md:text-xl mt-4 opacity-80'
				>
					Профессиональный подбор автомобилей в Южной Корее. <br />
					Подбор авто на заказ. Выкуп автомобилей и программа Trade-in. <br />
					Быстро. Качественно. Надёжно.
				</motion.p>

				{/* <Link to='/calculator'>
					<button className='mt-8 px-8 py-4 bg-[#D4AF37] hover:bg-[#8C6B1F] text-white font-semibold rounded-full transition duration-300 shadow-lg animate-fade-in-up delay-400'>
						РАССЧИТАТЬ СТОИМОСТЬ
					</button>
				</Link> */}

				{/* Дополнительные ссылки */}
				<div className='mt-8 md:space-x-6 animate-fade-in-up delay-600 flex flex-col justify-center md:flex-row'>
					<Link
						to='/catalog'
						className='mb-5 md:mb-0 px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] md:rounded-full font-semibold transition duration-300 hover:bg-[#D4AF37] hover:text-white'
					>
						Смотреть каталог автомобилей
					</Link>
					{/* <Link
						to='/export-catalog'
						className='flex items-center justify-center px-6 py-3 bg-[#D4AF37] text-white md:rounded-full font-semibold transition duration-300 hover:bg-[#8C6B1F] hover:text-white'
					>
						Заказать авто из Кореи
					</Link> */}
				</div>

				{/* Features */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left w-full max-w-5xl'>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						className='bg-[#2E2E2E] hover:bg-[#3C3C3C] rounded-lg p-6 flex items-center transition duration-300 shadow-md'
					>
						<FaTruck className='text-[#D4AF37] text-4xl mr-4' />
						<div>
							<h3 className='font-bold text-lg'>Доставка в любой регион РФ</h3>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						viewport={{ once: true, amount: 0.2 }}
						className='bg-[#2E2E2E] hover:bg-[#3C3C3C] rounded-lg p-6 flex items-center transition duration-300 shadow-md'
					>
						<FaFileContract className='text-[#D4AF37] text-4xl mr-4' />
						<div>
							<h3 className='font-bold text-lg'>Юридическая чистота авто</h3>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						viewport={{ once: true, amount: 0.2 }}
						className='bg-[#2E2E2E] hover:bg-[#3C3C3C] rounded-lg p-6 flex items-center transition duration-300 shadow-md'
					>
						<FaTools className='text-[#D4AF37] text-4xl mr-4' />
						<div>
							<h3 className='font-bold text-lg'>
								Полная проверка авто <br /> профессионалами
							</h3>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
