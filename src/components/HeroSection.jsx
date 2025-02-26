import { Link } from 'react-router-dom'
import { FaTruck, FaFileContract, FaTools } from 'react-icons/fa'

const HeroSection = () => {
	return (
		<section className='relative bg-[#1D1D1D] text-white min-h-screen flex items-center overflow-hidden'>
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
				<h1 className='text-4xl md:text-6xl font-bold leading-tight animate-fade-in-up'>
					АВТО ИЗ ЮЖНОЙ КОРЕИ <br />
					<span className='text-[#D4AF37]'>ПОД ЗАКАЗ В МОСКВУ</span>
				</h1>
				<p className='text-lg md:text-xl mt-4 opacity-80 animate-fade-in-up delay-200'>
					Подберем, доставим и оформим автомобиль <br />
					из Южной Кореи без посредников за 14 дней
				</p>

				<Link to='/calculator'>
					<button className='mt-8 px-8 py-4 bg-[#D4AF37] hover:bg-[#8C6B1F] text-white font-semibold rounded-full transition duration-300 shadow-lg animate-fade-in-up delay-400'>
						РАССЧИТАТЬ СТОИМОСТЬ
					</button>
				</Link>

				{/* Дополнительные ссылки */}
				<div className='mt-8 flex space-x-6 animate-fade-in-up delay-600'>
					<Link
						to='/catalog'
						className='px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full font-semibold transition duration-300 hover:bg-[#D4AF37] hover:text-white'
					>
						Купить внутри Кореи
					</Link>
					<Link
						to='/export-catalog'
						className='px-6 py-3 bg-[#D4AF37] text-white rounded-full font-semibold transition duration-300 hover:bg-[#8C6B1F] hover:text-white'
					>
						Заказать авто из Кореи
					</Link>
				</div>

				{/* Features */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left w-full max-w-5xl animate-fade-in-up delay-800'>
					<div className='bg-[#2E2E2E] hover:bg-[#3C3C3C] rounded-lg p-6 flex items-center transition duration-300 shadow-md'>
						<FaTruck className='text-[#D4AF37] text-4xl mr-4' />
						<div>
							<h3 className='font-bold text-lg'>Доставка в любой регион РФ</h3>
						</div>
					</div>
					<div className='bg-[#2E2E2E] hover:bg-[#3C3C3C] rounded-lg p-6 flex items-center transition duration-300 shadow-md'>
						<FaFileContract className='text-[#D4AF37] text-4xl mr-4' />
						<div>
							<h3 className='font-bold text-lg'>Юридическая чистота авто</h3>
						</div>
					</div>
					<div className='bg-[#2E2E2E] hover:bg-[#3C3C3C] rounded-lg p-6 flex items-center transition duration-300 shadow-md'>
						<FaTools className='text-[#D4AF37] text-4xl mr-4' />
						<div>
							<h3 className='font-bold text-lg'>
								Полная проверка авто <br /> профессионалами
							</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
