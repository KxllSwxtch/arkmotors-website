import { motion } from 'framer-motion'

const AdvantagesSection = () => {
	return (
		<section className='py-16 bg-[#1D1D1D]'>
			<div className='max-w-7xl mx-auto px-4'>
				{/* Заголовок */}
				<motion.h2
					className='text-3xl font-bold text-center text-[#D4AF37] mb-10'
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					ПОЧЕМУ ВЫБИРАЮТ ArkMotors?
				</motion.h2>

				{/* Контент */}
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-10 items-center'>
					{/* Левая колонка */}
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						transition={{ staggerChildren: 0.2 }}
						className='space-y-8'
					>
						<motion.div>
							<h3 className='text-xl font-bold text-white'>Низкие цены</h3>
							<p className='text-gray-400'>
								Мы предлагаем конкурентоспособные цены на автомобили из Кореи,
								что позволяет вам сэкономить значительные суммы при покупке.
							</p>
						</motion.div>

						<motion.div>
							<h3 className='text-xl font-bold text-white'>Без посредников</h3>
							<p className='text-gray-400'>
								Мы работаем напрямую с поставщиками и аукционами в Корее, что
								исключает наличие посредников и дополнительных комиссий.
							</p>
						</motion.div>

						<motion.div>
							<h3 className='text-xl font-bold text-white'>
								Большой выбор авто
							</h3>
							<p className='text-gray-400'>
								Мы предлагаем огромный выбор автомобилей различных марок,
								моделей и конфигураций.
							</p>
						</motion.div>

						<motion.div>
							<h3 className='text-xl font-bold text-white'>
								Прозрачность в покупке
							</h3>
							<p className='text-gray-400'>
								При покупке автомобиля с нами вы получаете полную информацию о
								его истории, техническом состоянии и предыдущих владельцах.
							</p>
						</motion.div>
					</motion.div>

					{/* Центральный блок с картинкой */}
					<motion.div
						className='relative flex justify-center items-center'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
					>
						<div className='text-center'>
							{/* Логотип ArkMotors */}
							<img
								src='/logo.png'
								alt='Логотип ArkMotors'
								className='w-80 mx-auto'
							/>
							{/* Картинка авто */}
							<img
								src='/whyusimage.png'
								alt='Пример авто'
								className='w-full h-auto object-cover rounded-lg shadow-lg'
							/>
						</div>
					</motion.div>

					{/* Правая колонка */}
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						transition={{ staggerChildren: 0.2 }}
						className='space-y-8'
					>
						<motion.div>
							<h3 className='text-xl font-bold text-white'>
								Авто из аукционов Кореи
							</h3>
							<p className='text-gray-400'>
								Мы имеем прямой доступ к аукционам в Корее, где представлены
								автомобили различных брендов и категорий.
							</p>
						</motion.div>

						<motion.div>
							<h3 className='text-xl font-bold text-white'>Быстрая доставка</h3>
							<p className='text-gray-400'>
								Мы заботимся о каждой детали логистики, чтобы ваш автомобиль
								достиг вас в кратчайшие сроки.
							</p>
						</motion.div>

						<motion.div>
							<h3 className='text-xl font-bold text-white'>
								Полное сопровождение
							</h3>
							<p className='text-gray-400'>
								Наша команда профессионалов обеспечивает полное сопровождение
								вас на каждом этапе процесса – от выбора автомобиля до его
								получения.
							</p>
						</motion.div>

						<motion.div>
							<h3 className='text-xl font-bold text-white'>
								Гарантия качества
							</h3>
							<p className='text-gray-400'>
								Мы гарантируем высокое качество каждого автомобиля,
								приобретенного через ArkMotors.
							</p>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default AdvantagesSection
