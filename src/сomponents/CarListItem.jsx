import PropTypes from 'prop-types'

const CarListItem = ({ car }) => {
	const formattedPrice = (
		car.price.replace(/\D+/gm, '') * 10000
	).toLocaleString()

	const formattedCarMileage = parseInt(
		car.mileage.replace(/\D+/gm, ''),
	).toLocaleString()

	const carYear = car.year.split('-')[0]
	const carMonth = car.year.split('-')[1]
	const formattedCarDate = `${carMonth}/${carYear}`

	return (
		<div className='relative bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden'>
			{/* Блок изображения */}
			<a
				href={car.link}
				target='_blank'
				rel='noopener noreferrer'
				className='block'
			>
				<div className='relative w-full h-72 overflow-hidden bg-gray-100'>
					<img
						src={car.image.replaceAll('"', '')}
						alt={car.name}
						className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
					/>
				</div>
			</a>

			{/* Основная информация */}
			<div className='p-4'>
				{/* Марка и модель */}
				<h2 className='text-lg font-semibold text-gray-900 truncate'>
					{car.name}
				</h2>

				{/* Основные характеристики */}
				<div className='flex flex-col text-sm text-gray-600 mt-2'>
					<span>Дата регистрации: {formattedCarDate}</span>
					<span>Пробег: {formattedCarMileage} км</span>
					<span>
						{car.fuel} {car.transmission}
					</span>
				</div>

				{/* Цена */}
				<div className='mt-3 flex justify-between items-center'>
					<span className='text-lg font-bold text-yellow-600'>
						Цена в Корее
						<br /> {formattedPrice} ₩
					</span>
					<a
						href={car.link}
						target='_blank'
						rel='noopener noreferrer'
						className='text-sm text-blue-600 hover:underline'
					>
						Подробнее
					</a>
				</div>
			</div>

			{/* Год автомобиля (выведен в углу) */}
			<div className='absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded'>
				{car.year}
			</div>
		</div>
	)
}

CarListItem.propTypes = {
	car: PropTypes.shape({
		link: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		year: PropTypes.string.isRequired,
		mileage: PropTypes.string.isRequired,
		fuel: PropTypes.string.isRequired,
		transmission: PropTypes.string.isRequired,
		price: PropTypes.string.isRequired,
	}).isRequired,
}

export default CarListItem
