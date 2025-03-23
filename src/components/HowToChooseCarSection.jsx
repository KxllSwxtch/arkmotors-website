import { motion } from 'framer-motion'

const HowToChooseCarSection = () => {
	return (
		<section className='py-16 bg-[#f9f9f9]'>
			<div className='max-w-7xl mx-auto px-4'>
				{/* Заголовок */}
				<motion.h2
					className='text-3xl font-bold text-center text-[#000000] mb-8'
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					КАК ПОДОБРАТЬ ХОРОШЕЕ АВТО?
				</motion.h2>
				{/* Контент с ответами */}
				<motion.div
					className='grid grid-cols-1 md:grid-cols-3 gap-6'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					variants={{
						visible: {
							transition: {
								staggerChildren: 0.2,
							},
						},
						hidden: {},
					}}
				>
					{[
						{
							title: 'Определите бюджет',
							text: 'Рассчитайте максимально допустимую сумму, учитывая стоимость авто, страховку, налог и обслуживание.',
						},
						{
							title: 'Выберите тип кузова',
							text: 'Определитесь с типом автомобиля (седан, кроссовер, хэтчбек и т.д.), исходя из своих нужд и предпочтений.',
						},
						{
							title: 'Проверьте историю авто',
							text: 'Запросите отчёт по VIN-номеру, чтобы узнать о предыдущих владельцах, ДТП и ремонтах.',
						},
						{
							title: 'Сравните несколько вариантов',
							text: 'Проанализируйте предложения на рынке, чтобы выбрать лучшее соотношение цены и качества.',
						},
						{
							title: 'Проверьте техническое состояние',
							text: 'Перед покупкой обязательно проведите техническую диагностику у специалиста.',
						},
						{
							title: 'Обратите внимание на пробег',
							text: 'Сравните возраст и пробег автомобиля. Низкий пробег не всегда гарантирует хорошее состояние.',
						},
					].map((item, index) => (
						<motion.div
							key={index}
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
							transition={{ duration: 0.5 }}
							className='bg-white rounded-xl shadow-md overflow-hidden'
						>
							<div className='p-6'>
								<h3 className='text-lg font-semibold text-[#000000] mb-2'>
									{item.title}
								</h3>
								<p className='text-gray-500'>{item.text}</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}

export default HowToChooseCarSection
