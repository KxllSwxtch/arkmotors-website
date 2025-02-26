// src/components/HowToBuySection.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const steps = [
	{
		number: '01',
		title: 'Оставляете заявку',
		description:
			'Заполните заявку, и наш менеджер свяжется с вами, чтобы ответить на все вопросы и предложить оптимальные варианты автомобилей с подробными расчетами.',
	},
	{
		number: '02',
		title: 'Заключаем договор',
		description:
			'Мы оформляем договор, в котором фиксируем все условия, выбранные вами характеристики автомобиля и нашу ответственность.',
	},
	{
		number: '03',
		title: 'Подбираем авто',
		description:
			'Наш менеджер ежедневно подбирает актуальные варианты автомобилей с аукционов и площадок, помогая вам выбрать лучшее предложение.',
	},
	{
		number: '04',
		title: 'Доставка и растаможка',
		description:
			'Мы обеспечиваем быструю доставку автомобилей из Кореи и профессиональное прохождение таможенных процедур.',
	},
	{
		number: '05',
		title: 'Получение авто',
		description:
			'Мы сопровождаем вас до момента получения автомобиля и регистрации, чтобы процесс был максимально удобным.',
	},
]

const HowToBuySection = () => {
	return (
		<section className='py-16 bg-[#1D1D1D]'>
			<div className='max-w-7xl mx-auto px-4'>
				{/* Заголовок */}
				<motion.h2
					className='text-4xl font-bold text-center text-[#D4AF37] mb-10'
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					КАК КУПИТЬ АВТОМОБИЛЬ?
				</motion.h2>

				{/* Карточки шагов */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{steps.map((step, index) => (
						<motion.div
							key={index}
							className='bg-[#2E2E2E] rounded-lg shadow-lg p-6 border-2 border-[#D4AF37] transform transition hover:-translate-y-2 hover:shadow-2xl hover:border-[#8C6B1F]'
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
						>
							{/* Номер шага */}
							<h3 className='text-5xl font-bold text-[#D4AF37] mb-4'>
								{step.number}
							</h3>
							{/* Заголовок шага */}
							<h4 className='text-2xl font-semibold text-white mb-2'>
								{step.title}
							</h4>
							{/* Описание шага */}
							<p className='text-gray-400'>{step.description}</p>
						</motion.div>
					))}
				</div>

				{/* Призыв к действию */}
				<div className='mt-12 text-center'>
					<h3 className='text-2xl font-bold text-white'>
						Закажите автомобиль{' '}
						<span className='text-[#D4AF37]'>уже сейчас!</span>
					</h3>
					<Link to='/contact'>
						<button className='cursor-pointer mt-4 bg-[#D4AF37] hover:bg-[#8C6B1F] text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300'>
							Оставить заявку
						</button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default HowToBuySection
