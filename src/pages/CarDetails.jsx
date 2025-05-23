import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { translateCarName } from '../utils'
import { carModelsTranslation } from '../translations'
import { ImageSlider, Loader, Calculator } from '../components'

const translations = {
	price: 'Цена в Корее (₩)',
	연식: 'Год выпуска',
	최초등록일: 'Дата первой регистрации',
	연료: 'Тип топлива',
	휘발유: 'Бензин',
	경유: 'Дизель',
	전기: 'Электро',
	하이브리드: 'Гибрид',
	변속기: 'Трансмиссия',
	오토: 'Автомат',
	수동: 'Механика',
	색상: 'Цвет',
	흰색: 'Белый',
	검정색: 'Чёрный',
	회색: 'Серый',
	파란색: 'Синий',
	빨간색: 'Красный',
	주행거리: 'Пробег',
	차량번호: 'Гос. номер',
	차대번호: 'VIN-номер',
	'압류｜저당': 'Был в ДТП',
	'0건｜0건': 'Нет',
	모델명: 'Модель',
	세금미납: 'Задолженность по налогам',
	없음: 'Отсутствует',
	제시번호: 'Номер предложения',
}

const API_BASE_URL = 'https://ark-motors-backend-3a002a527613.herokuapp.com'

const CarDetails = () => {
	const { carId } = useParams()
	const [carData, setCarData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [images, setImages] = useState([])
	const [carName, setCarName] = useState('')

	useEffect(() => {
		const fetchCarDetails = async () => {
			try {
				const response = await axios.get(`${API_BASE_URL}/car-details`, {
					params: { carId },
				})
				// Сервер возвращает JSON с полями carName и carData
				setCarName(response.data.carName)
				setCarData(response.data.carData)
			} catch (error) {
				console.error('Ошибка при загрузке деталей автомобиля:', error)
			} finally {
				setLoading(false)
			}
		}

		const fetchCarImages = async () => {
			try {
				const response = await axios.get(`${API_BASE_URL}/car-images`, {
					params: { carId },
				})
				setImages(response.data.images)
			} catch (error) {
				console.error('Ошибка загрузки изображений:', error)
			}
		}

		fetchCarDetails()
		fetchCarImages()
	}, [carId])

	if (loading) return <Loader />

	return (
		<div className='container mx-auto p-4 max-w-6xl '>
			{/* Основной контейнер с фото слева и информацией справа */}
			<div className='grid grid-cols-1 md:grid-cols-2 md:gap-10'>
				{/* Фотографии автомобиля */}
				<div className='overflow-hidden'>
					{images.length > 0 ? (
						<ImageSlider images={images} />
					) : (
						<p className='text-center text-gray-500'>Фотографии отсутствуют</p>
					)}

					<div className='mt-10 p-8 bg-white border border-gray-100 hidden md:block'>
						<h3 className='text-2xl md:text-4xl font-bold text-gray-800 mb-8 text-center'>
							Контакты для связи
						</h3>
						<div className='grid grid-cols-1 gap-6'>
							{/* Виталий */}
							<div className='p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200'>
								<p className='text-lg font-semibold text-gray-700 mb-1'>
									Менеджер
								</p>
								<a
									href='tel:821036422039'
									className='block text-xl text-red-600 hover:text-red-500 transition duration-300'
								>
									+82 10-3642-2039
								</a>
								<p className='mt-2'>
									Адрес: 경기 용인시 기흥구 중부대로 242 (AutoHub)
								</p>
							</div>
						</div>
					</div>
					{/* <div className='hidden md:block'>
						<Calculator />
					</div> */}
				</div>

				{/* Информация об автомобиле */}
				<div className='rounded-lg shadow-lg p-4'>
					<h2 className='text-2xl md:text-4xl font-bold mb-6 text-gray-800 text-center'>
						{carName ? translateCarName(carName) : 'Модель не указана'}
					</h2>

					<div className='relative border-t border-gray-200 overflow-hidden rounded-lg'>
						<div className='relative z-10'>
							{carData ? (
								<table className='w-full text-left mt-4'>
									<tbody>
										{Object.entries(carData).map(([key, value], index) => (
											<tr
												key={index}
												className={`border-b border-gray-100 transition duration-300 hover:bg-gray-100 ${
													index % 2 === 0 ? 'bg-white/80' : 'bg-white/60'
												}`}
											>
												<td className='py-3 px-2 text-sm font-medium text-black w-1/3 md:w-1/4'>
													{translations[key] || key}
												</td>
												<td className='py-3 px-2 text-sm text-black text-right font-medium'>
													<b>
														{translations[value] ||
															carModelsTranslation[value] ||
															value.toLocaleString()}
													</b>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							) : (
								<p className='text-center text-gray-500'>
									Автомобиль не найден
								</p>
							)}
						</div>
					</div>
				</div>
			</div>

			{/* <div className='md:hidden mt-10'>
				<Calculator />
			</div> */}

			<div className='mt-10 p-8 bg-white border border-gray-100 md:hidden block'>
				<h3 className='text-2xl md:text-4xl font-bold text-gray-800 mb-8 text-center'>
					Контакты для связи
				</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					<div className='p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 text-center'>
						<p className='text-lg font-semibold text-gray-700 mb-1'>Менеджер</p>
						<a
							href='tel:+821093441782'
							className='block text-xl text-red-600 hover:text-red-500 transition duration-300'
						>
							+82 10-3642-2039
						</a>
						<p className='mt-5'>
							Адрес: 경기 용인시 기흥구 중부대로 242 (AutoHub)
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CarDetails
