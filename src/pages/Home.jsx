import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<div className='relative min-h-screen flex items-center justify-center text-arkGold'>
			{/* Фоновое видео */}
			<video
				autoPlay
				loop
				muted
				playsInline
				className='absolute inset-0 w-full h-full object-cover'
			>
				<source
					src='https://res.cloudinary.com/pomegranitedesign/video/upload/v1739508443/arkmotors/bg-video.mp4'
					type='video/mp4'
				/>
			</video>

			{/* Градиентный оверлей (затеняет только низ) */}
			<div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent'></div>

			{/* Контент */}
			<motion.div
				className='relative text-center p-8 max-w-2xl'
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<h1 className='text-4xl md:text-5xl font-bold tracking-wide'>
					Добро пожаловать в ArkMotors
				</h1>
				<p className='mt-4 text-lg md:text-xl text-gray-300'>
					Лучший выбор автомобилей из Кореи
				</p>

				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className='bg-arkGoldDark text-white px-6 py-3 mt-6 rounded-lg text-lg font-semibold shadow-lg transition hover:bg-arkGold'
				>
					<Link to='/catalog'>Смотреть Каталог</Link>
				</motion.button>
			</motion.div>
		</div>
	)
}

export default Home
