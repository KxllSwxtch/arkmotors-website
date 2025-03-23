import { motion } from 'framer-motion'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.25,
		},
	},
}

const cardVariants = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { duration: 0.5 } },
}

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
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [formData, setFormData] = useState({ name: '', phone: '', message: '' })

	const handleChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value })

	const handleSubmit = () => {
		const { name, phone, message } = formData
		if (!name || !phone || !message)
			return alert('Пожалуйста, заполните все поля')

		const url = `https://wa.me/821036422039?text=Имя:%20${encodeURIComponent(
			name,
		)}%0AТелефон:%20${encodeURIComponent(
			phone,
		)}%0AСообщение:%20${encodeURIComponent(message)}`
		window.open(url, '_blank')
		setIsModalOpen(false)
		setFormData({ name: '', phone: '', message: '' })
	}

	return (
		<>
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
					<motion.div
						className='grid grid-cols-1 md:grid-cols-3 gap-8'
						variants={containerVariants}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
					>
						{steps.map((step, index) => (
							<motion.div
								key={index}
								variants={cardVariants}
								className='bg-[#2E2E2E] rounded-lg shadow-lg p-6 border-2 border-[#D4AF37] transform transition hover:-translate-y-2 hover:shadow-2xl hover:border-[#8C6B1F]'
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
					</motion.div>

					{/* Призыв к действию */}
					<div className='mt-12 text-center'>
						<h3 className='text-2xl font-bold text-white'>
							Закажите автомобиль{' '}
							<span className='text-[#D4AF37]'>уже сейчас!</span>
						</h3>
						<button
							onClick={() => setIsModalOpen(true)}
							className='cursor-pointer mt-4 bg-[#D4AF37] hover:bg-[#8C6B1F] text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300'
						>
							Оставить заявку
						</button>
					</div>
				</div>
			</section>
			<AnimatePresence>
				{isModalOpen && (
					<motion.div
						className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setIsModalOpen(false)}
					>
						<motion.div
							className='bg-white p-6 rounded-lg max-w-md w-full shadow-2xl relative'
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							onClick={(e) => e.stopPropagation()}
						>
							<button
								className='absolute top-2 right-3 text-black text-xl font-bold'
								onClick={() => setIsModalOpen(false)}
							>
								×
							</button>
							<h2 className='text-2xl font-bold text-center text-[#D4AF37] mb-4'>
								Закажите автомобиль своей мечты прямо сейчас
							</h2>
							<div className='space-y-4'>
								<input
									type='text'
									name='name'
									placeholder='Имя'
									value={formData.name}
									onChange={handleChange}
									className='w-full border border-gray-300 p-3 rounded'
									required
								/>
								<input
									type='tel'
									name='phone'
									placeholder='Номер телефона'
									value={formData.phone}
									onChange={handleChange}
									className='w-full border border-gray-300 p-3 rounded'
									required
								/>
								<textarea
									name='message'
									placeholder='Сообщение'
									value={formData.message}
									onChange={handleChange}
									className='w-full border border-gray-300 p-3 rounded'
									rows='4'
									required
								></textarea>
								<button
									onClick={handleSubmit}
									className='bg-[#D4AF37] hover:bg-[#8C6B1F] text-white py-3 px-6 rounded font-bold w-full'
								>
									Отправить в WhatsApp
								</button>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

export default HowToBuySection
