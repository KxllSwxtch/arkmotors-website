import { motion } from 'framer-motion'

const AboutSection = () => {
	return (
		<section className='py-16 bg-[#1D1D1D]'>
			<div className='max-w-7xl mx-auto px-4'>
				<motion.h2
					className='text-3xl font-bold text-center text-[#D4AF37] mb-8'
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					О компании
				</motion.h2>
				<motion.div
					className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
				>
					<div className='space-y-4 text-white text-lg'>
						<p>
							<span className='text-[#D4AF37] font-bold'>ArkMotors</span> – ваш
							надёжный партнёр в сфере продажи и экспорта автомобилей. Мы
							предоставляем полный спектр услуг по подбору, оформлению и
							доставке авто под ключ как внутри Кореи, так и для клиентов из
							стран СНГ. Наша компания обладает многолетним опытом работы, что
							позволяет гарантировать высокое качество сервиса и индивидуальный
							подход к каждому клиенту.
						</p>
						<p>
							Мы предлагаем широкий выбор автомобилей как для местных
							покупателей, так и для экспорта в страны СНГ. Наши услуги включают
							помощь в выборе авто, юридическую проверку, оформление документов
							и доставку до Владивостока. Наша цель – обеспечить безопасность,
							оперативность и прозрачность на каждом этапе сотрудничества.
						</p>
					</div>
					<div className='flex justify-center'>
						<img
							src='https://res.cloudinary.com/pomegranitedesign/image/upload/v1739490319/arkmotors/logo.png'
							alt='ArkMotors'
							className='w-80 h-auto rounded-lg shadow-2xl'
						/>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default AboutSection
