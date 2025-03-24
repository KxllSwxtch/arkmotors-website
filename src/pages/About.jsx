import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
	return (
		<div className='min-h-screen bg-gray-100 text-gray-800 p-6 md:p-12'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className='max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-12'
			>
				<h1 className='text-4xl font-bold text-center text-yellow-600 mb-6'>
					О нас
				</h1>
				<p className='text-lg text-center mb-8'>
					Добро пожаловать в ArkMotors – ваш надежный партнер в мире
					автомобилей!
				</p>

				{/* Наша миссия */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className='mb-10'
				>
					<h2 className='text-2xl font-semibold text-gray-700 mb-4'>
						Наша миссия
					</h2>
					<p className='text-lg leading-relaxed'>
						Мы стремимся предоставить лучший выбор автомобилей с пробегом из
						Кореи и других стран, обеспечивая наших клиентов надежными,
						качественными и проверенными машинами. ArkMotors — это не просто
						платформа, а команда профессионалов, готовых помочь вам на каждом
						этапе покупки.
					</p>
				</motion.div>

				{/* Почему выбирают нас */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className='mb-10'
				>
					<h2 className='text-2xl font-semibold text-gray-700 mb-4'>
						Почему выбирают нас?
					</h2>
					<ul className='list-disc pl-6 text-lg'>
						<li>Прямые поставки автомобилей из Кореи без посредников</li>
						<li>Прозрачные условия покупки и детальные отчеты</li>
						<li>Техническая проверка перед продажей</li>
						<li>Удобные условия оплаты и доставки</li>
						<li>Профессиональная поддержка и консультации</li>
					</ul>
				</motion.div>

				{/* Контакты */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.6 }}
				>
					<h2 className='text-2xl font-semibold text-gray-700 mb-4'>
						Свяжитесь с нами
					</h2>
					<p className='text-lg leading-relaxed'>
						Если у вас есть вопросы или вам нужна консультация, свяжитесь с
						нами:
					</p>
					<ul className='mt-4 text-lg'>
						<li>📍 Адрес: 경기 용인시 기흥구 중부대로 242 (AutoHub)</li>
						<li>📞 Телефон: +82 10-3642-2039</li>
					</ul>
				</motion.div>
			</motion.div>
		</div>
	)
}

export default About
