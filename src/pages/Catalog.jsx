import { useState, useEffect } from 'react'
import axios from 'axios'

import {
	priceOptions,
	yearOptions,
	useKmOptions,
	fuelOptions,
	missionOptions,
	colorOptions,
} from '../utils'
import { CarListItem, Loader, Message } from '../сomponents'

const Catalog = () => {
	// ------------------ Основные состояния ------------------
	const [country, setCountry] = useState('kor') // 'kor' или 'foreign'
	const [makerList, setMakerList] = useState([]) // Список производителей
	const [selectedMaker, setSelectedMaker] = useState('') // Выбранный производитель (MAKER_NO)

	const [modelList, setModelList] = useState([]) // Список моделей
	const [selectedModel, setSelectedModel] = useState('') // Выбранная модель (MODEL_NO)

	const [detailModelList, setDetailModelList] = useState([]) // Список подробных моделей
	const [selectedDetailModel, setSelectedDetailModel] = useState('')

	const [gradeList, setGradeList] = useState([]) // Список комплектаций
	const [selectedGrade, setSelectedGrade] = useState('') // Выбранная комплектация (GRADE_NO)

	const [detailGradeList, setDetailGradeList] = useState([]) // Список детальных комплектаций
	const [selectedDetailGrade, setSelectedDetailGrade] = useState('') // DETAIL_GRADE_NO

	// ------------------ Доп. фильтры ------------------
	const [priceMin, setPriceMin] = useState('')
	const [priceMax, setPriceMax] = useState('')
	const [yearMin, setYearMin] = useState('')
	const [yearMax, setYearMax] = useState('')
	const [useKmMin, setUseKmMin] = useState('')
	const [useKmMax, setUseKmMax] = useState('')
	const [fuel, setFuel] = useState('')
	const [mission, setMission] = useState('')
	const [color, setColor] = useState('')
	const [carPlateNumber, setCarPlateNumber] = useState('')

	const [carList, setCarList] = useState([])
	const [loading, setLoading] = useState(true)
	const [page, setPage] = useState(1) // Текущая страница
	const [totalPages, setTotalPages] = useState(7000) // Всего страниц
	const [isFiltersOpen, setIsFiltersOpen] = useState(false)

	const toggleFilters = () => {
		setIsFiltersOpen((prev) => !prev)
	}

	// ------------------ Запросы к API ------------------
	// 1) Выбор страны => getMakerList
	const handleCountryClick = async (ctry) => {
		// Сбрасываем состояние
		setCountry(ctry)
		setSelectedMaker('')
		setMakerList([])
		setSelectedModel('')
		setModelList([])
		setSelectedDetailModel('')
		setDetailModelList([])
		setSelectedGrade('')
		setGradeList([])
		setSelectedDetailGrade('')
		setDetailGradeList([])

		try {
			const params = new URLSearchParams()
			params.append('country', ctry)

			const response = await axios.post(
				'https://corsproxy.io/?key=28174bc7&url=https://www.arkmotors.kr/search/getMakerList',
				params,
				{
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						Accept: 'application/json',
					},
				},
			)
			if (response.data?.status === 200) {
				setMakerList(response.data.data || [])
			}
		} catch (error) {
			console.error('Ошибка при загрузке производителей:', error)
		}
	}

	// 2) Выбор производителя => getModelList
	const handleMakerChange = async (makerNo) => {
		setSelectedMaker(makerNo)
		setSelectedModel('')
		setModelList([])
		setSelectedDetailModel('')
		setDetailModelList([])
		setSelectedGrade('')
		setGradeList([])
		setSelectedDetailGrade('')
		setDetailGradeList([])

		if (!makerNo) return

		try {
			const params = new URLSearchParams()
			params.append('maker', makerNo)

			const response = await axios.post(
				'https://corsproxy.io/?key=28174bc7&url=https://www.arkmotors.kr/search/getModelList',
				params,
				{
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						Accept: 'application/json',
					},
				},
			)
			if (response.data?.status === 200) {
				setModelList(response.data.data || [])
			}
		} catch (error) {
			console.error('Ошибка при загрузке моделей:', error)
		}
	}

	// 3) Выбор модели => getDetailModelList
	const handleModelChange = async (modelNo) => {
		setSelectedModel(modelNo)
		setSelectedDetailModel('')
		setDetailModelList([])
		setSelectedGrade('')
		setGradeList([])
		setSelectedDetailGrade('')
		setDetailGradeList([])

		if (!modelNo) return

		try {
			const params = new URLSearchParams()
			params.append('model', modelNo)

			const response = await axios.post(
				'https://corsproxy.io/?key=28174bc7&url=https://www.arkmotors.kr/search/getDetailModelList',
				params,
				{
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						Accept: 'application/json',
					},
				},
			)
			if (response.data?.status === 200) {
				setDetailModelList(response.data.data || [])
			}
		} catch (error) {
			console.error('Ошибка при загрузке подробных моделей:', error)
		}
	}

	// 4) Выбор подробной модели => getGradeList
	const handleDetailModelChange = async (detailModelNo) => {
		setSelectedDetailModel(detailModelNo)
		setSelectedGrade('')
		setGradeList([])
		setSelectedDetailGrade('')
		setDetailGradeList([])

		if (!detailModelNo) return

		try {
			const params = new URLSearchParams()
			params.append('detail-model', detailModelNo)

			const response = await axios.post(
				'https://corsproxy.io/?key=28174bc7&url=https://www.arkmotors.kr/search/getGradeList',
				params,
				{
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						Accept: 'application/json',
					},
				},
			)
			if (response.data?.status === 200) {
				setGradeList(response.data.data || [])
			}
		} catch (error) {
			console.error('Ошибка при загрузке комплектаций:', error)
		}
	}

	// 5) Выбор комплектации => getDetailGradeList
	const handleGradeChange = async (gradeNo) => {
		setSelectedGrade(gradeNo)
		setSelectedDetailGrade('')
		setDetailGradeList([])

		if (!gradeNo) return

		try {
			const params = new URLSearchParams()
			params.append('grade', gradeNo)

			const response = await axios.post(
				'https://corsproxy.io/?key=28174bc7&url=https://www.arkmotors.kr/search/getDetailGradeList',
				params,
				{
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						Accept: 'application/json',
					},
				},
			)
			if (response.data?.status === 200) {
				setDetailGradeList(response.data.data || [])
			}
		} catch (error) {
			console.error('Ошибка при загрузке детальных комплектаций:', error)
		}
	}

	// 6) Выбор детальной комплектации
	const handleDetailGradeChange = (detailGradeNo) => {
		setSelectedDetailGrade(detailGradeNo)
	}

	// ------------------ Логика динамических списков "от"/"до" ------------------

	// Цена
	const handlePriceMinChange = (val) => {
		setPriceMin(val)
		if (priceMax && Number(priceMax) < Number(val)) {
			setPriceMax(val)
		}
	}
	const filteredPriceMaxOptions = priceOptions.filter(
		(opt) =>
			!priceMin ||
			opt.value === '' ||
			(opt.value !== '' && Number(opt.value) >= Number(priceMin)),
	)

	// Год
	const handleYearMinChange = (val) => {
		setYearMin(val)
		if (yearMax && Number(yearMax) < Number(val)) {
			setYearMax(val)
		}
	}
	const filteredYearMaxOptions = yearOptions.filter(
		(opt) =>
			!yearMin ||
			opt.value === '' ||
			(opt.value !== '' && Number(opt.value) >= Number(yearMin)),
	)

	// Пробег
	const handleUseKmMinChange = (val) => {
		setUseKmMin(val)
		if (useKmMax && Number(useKmMax) < Number(val)) {
			setUseKmMax(val)
		}
	}
	const filteredUseKmMaxOptions = useKmOptions.filter(
		(opt) =>
			!useKmMin ||
			opt.value === '' ||
			(opt.value !== '' && Number(opt.value) >= Number(useKmMin)),
	)

	// ------------------ Финальный поиск ------------------
	const decodeHTML = (html) => {
		const txt = document.createElement('textarea')
		txt.innerHTML = html
		return txt.value
	}
	const handleSearch = async () => {
		setLoading(true)

		const baseURL = `https://corsproxy.io/?key=28174bc7&url=https://www.arkmotors.kr/search/model/${country}/${page}`
		const params = new URLSearchParams({
			order: '',
			ascending: 'desc',
			view: 'image',
			customSelect: '24',
			carName: '',
			maker: selectedMaker,
			model: selectedModel,
			dmodel: selectedDetailModel,
			grade: selectedGrade,
			dgrade: selectedDetailGrade,
			'price-min': priceMin,
			'price-max': priceMax,
			'year-min': yearMin,
			'year-max': yearMax,
			'usekm-min': useKmMin,
			'usekm-max': useKmMax,
			fuel,
			mission,
			color,
			country,
			carNo: '',
			carPlateNumber,
			'vehicle-model': '',
			'vehicle-dmodel': '',
			'vehicle-name': '',
			tab: 'model',
			detailSearch: 'close',
			type: '',
		})

		const searchURL = `${baseURL}?${params.toString()}`
		console.log('Отправка GET запроса:', searchURL)

		try {
			const response = await axios.get(searchURL, {
				headers: {
					Accept: 'text/html',
				},
			})

			const html = response.data
			const parser = new DOMParser()
			const doc = parser.parseFromString(html, 'text/html')

			const carElements = doc.querySelectorAll('li.car-detail.ul-car-detail')
			const cars = Array.from(carElements).map((el) => {
				const rawImage =
					el
						.querySelector('.car-img')
						.style.background.match(/url\((.*?)\)/)[1] || ''
				const cleanImage = decodeHTML(rawImage) // Убираем &quot;

				return {
					image: cleanImage,
					link:
						'https://www.arkmotors.kr' +
						el.querySelector('a').getAttribute('href'),
					name: el.querySelector('.car-name span a').textContent.trim(),
					year:
						el.querySelectorAll('.car-option li')[0]?.textContent.trim() || '',
					mileage:
						el.querySelectorAll('.car-option li')[1]?.textContent.trim() || '',
					fuelType:
						el.querySelectorAll('.car-option li')[2]?.textContent.trim() || '',
					transmission:
						el.querySelectorAll('.car-option li')[3]?.textContent.trim() || '',
					price:
						el.querySelector('.price .num')?.textContent.trim() + '만원' || '',
				}
			})

			setCarList(cars)
			setLoading(false)
		} catch (error) {
			setLoading(false)
			console.error('Ошибка при загрузке автомобилей:', error)
		}
	}

	// Функция загрузки автомобилей
	const fetchCars = async () => {
		setLoading(true)

		// Загружаем список производителей, если он ещё не загружен
		if (makerList.length === 0) {
			try {
				const params = new URLSearchParams()
				params.append('country', country)

				const response = await axios.post(
					'https://corsproxy.io/?key=28174bc7&url=https://www.arkmotors.kr/search/getMakerList',
					params,
					{
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
							Accept: 'application/json',
						},
					},
				)

				if (response.data?.status === 200) {
					setMakerList(response.data.data || [])
				}
			} catch (error) {
				console.error('Ошибка при загрузке производителей:', error)
			}
		}

		const baseURL = `https://corsproxy.io/?key=28174bc7&url=https://www.arkmotors.kr/search/model/${country}/${page}`
		const params = new URLSearchParams({
			order: '',
			ascending: 'desc',
			view: 'image',
			customSelect: '24',
			carName: '',
			maker: selectedMaker,
			model: selectedModel,
			dmodel: selectedDetailModel,
			grade: selectedGrade,
			dgrade: selectedDetailGrade,
			'price-min': priceMin,
			'price-max': priceMax,
			'year-min': yearMin,
			'year-max': yearMax,
			'usekm-min': useKmMin,
			'usekm-max': useKmMax,
			fuel,
			mission,
			color,
			country,
			carNo: '',
			carPlateNumber,
			'vehicle-model': '',
			'vehicle-dmodel': '',
			'vehicle-name': '',
			tab: 'model',
			detailSearch: 'close',
			type: '',
		})

		const searchURL = `${baseURL}?${params.toString()}`

		try {
			const response = await axios.get(searchURL, {
				headers: {
					Accept: 'text/html',
				},
			})

			const html = response.data
			const parser = new DOMParser()
			const doc = parser.parseFromString(html, 'text/html')

			const carElements = doc.querySelectorAll('li.car-detail.ul-car-detail')
			const cars = Array.from(carElements).map((el) => {
				const rawImage =
					el
						.querySelector('.car-img')
						.style.background.match(/url\((.*?)\)/)[1] || ''
				const cleanImage = decodeHTML(rawImage)

				return {
					image: cleanImage,
					link:
						'https://www.arkmotors.kr' +
						el.querySelector('a').getAttribute('href'),
					name: el.querySelector('.car-name span a').textContent.trim(),
					year:
						el.querySelectorAll('.car-option li')[0]?.textContent.trim() || '',
					mileage:
						el.querySelectorAll('.car-option li')[1]?.textContent.trim() || '',
					fuelType:
						el.querySelectorAll('.car-option li')[2]?.textContent.trim() || '',
					transmission:
						el.querySelectorAll('.car-option li')[3]?.textContent.trim() || '',
					price:
						el.querySelector('.price .num')?.textContent.trim() + '만원' || '',
				}
			})

			setCarList(cars)
		} catch (error) {
			console.error('Ошибка при загрузке автомобилей:', error)
		} finally {
			setLoading(false)
		}
	}

	const resetFilters = () => {
		setSelectedMaker('')
		setSelectedModel('')
		setSelectedDetailModel('')
		setSelectedGrade('')
		setSelectedDetailGrade('')
		setPriceMin('')
		setPriceMax('')
		setYearMin('')
		setYearMax('')
		setUseKmMin('')
		setUseKmMax('')
		setFuel('')
		setMission('')
		setColor('')
		setCarPlateNumber('')

		fetchCars()
	}

	useEffect(() => {
		window.scroll({ top: 0, behavior: 'smooth' }) // Прокручиваем страницу вверх
		fetchCars()
	}, [country, page]) // Загружать заново при смене страны

	// ------------------ Обработчики пагинации ------------------
	// Функция для создания массива страниц
	const getPageNumbers = () => {
		const maxVisible = 5
		const pages = []
		const startPage = Math.max(1, page - Math.floor(maxVisible / 2))
		const endPage = Math.min(totalPages, startPage + maxVisible - 1)

		for (let i = startPage; i <= endPage; i++) {
			pages.push(i)
		}

		return pages
	}

	// Обработчики навигации
	const goToPage = (pageNum) => {
		setPage(pageNum)
	}
	const goToFirstPage = () => {
		setPage(1)
	}
	const goToLastPage = () => {
		setPage(totalPages)
	}
	const goToPrevPage = () => {
		if (page > 1) setPage(page - 1)
	}
	const goToNextPage = () => {
		if (page < totalPages) setPage(page + 1)
	}

	return (
		<div className='p-4'>
			<h1 className='text-2xl font-bold mb-4'>Каталог автомобилей</h1>

			{/* Фильтры */}
			<>
				{/* Кнопки для выбора страны */}
				<div className='flex gap-4 mb-6 justify-center'>
					<button
						onClick={() => handleCountryClick('kor')}
						className={`
						cursor-pointer
        px-4 py-2 rounded
        ${
					country === 'kor'
						? 'bg-arkGoldDark text-white'
						: 'bg-arkBlack text-[var(--color-arkGold)]'
				}
      `}
					>
						Корейские авто
					</button>

					<button
						onClick={() => handleCountryClick('foreign')}
						className={`
						cursor-pointer
        px-4 py-2 rounded
        ${
					country === 'foreign'
						? 'bg-[var(--color-arkGoldDark)] text-white'
						: 'bg-[var(--color-arkBlack)] text-[var(--color-arkGold)]'
				}
      `}
					>
						Иномарки
					</button>
				</div>

				{/* Если страна выбрана, показываем основные фильтры */}
				{country && (
					<div className='bg-white shadow-md rounded-lg p-6 md:p-8 max-w-6xl mx-auto'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							{/* Производитель */}
							<div>
								<label className='block text-gray-700 font-medium mb-2'>
									Производитель:
								</label>
								<select
									value={selectedMaker}
									onChange={(e) => handleMakerChange(e.target.value)}
									className='w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-arkGoldDark focus:border-arkGoldDark transition'
								>
									<option value=''>Выберите производителя</option>
									{makerList.map((maker) => (
										<option key={maker.MAKER_NO} value={maker.MAKER_NO}>
											{maker.MAKER_NAME}
										</option>
									))}
								</select>
							</div>

							{/* Модель */}
							<div>
								<label className='block text-gray-700 font-medium mb-2'>
									Модель:
								</label>
								<select
									value={selectedModel}
									onChange={(e) => handleModelChange(e.target.value)}
									className='w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-arkGoldDark focus:border-arkGoldDark transition'
									disabled={!selectedMaker}
								>
									<option value=''>Выберите модель</option>
									{modelList.map((model) => (
										<option key={model.MODEL_NO} value={model.MODEL_NO}>
											{model.MODEL_NAME}
										</option>
									))}
								</select>
							</div>

							{/* Подробная модель */}
							<div>
								<label className='block text-gray-700 font-medium mb-2'>
									Подробная модель:
								</label>
								<select
									value={selectedDetailModel}
									onChange={(e) => handleDetailModelChange(e.target.value)}
									className='w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-arkGoldDark focus:border-arkGoldDark transition'
									disabled={!selectedModel}
								>
									<option value=''>Выберите подробную модель</option>
									{detailModelList.map((dmodel) => (
										<option
											key={dmodel.DETAIL_MODEL_NO}
											value={dmodel.DETAIL_MODEL_NO}
										>
											{dmodel.DETAIL_MODEL_NAME}
										</option>
									))}
								</select>
							</div>

							{/* Комплектация */}
							<div>
								<label className='block text-gray-700 font-medium mb-2'>
									Комплектация:
								</label>
								<select
									value={selectedGrade}
									onChange={(e) => handleGradeChange(e.target.value)}
									className='w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-arkGoldDark focus:border-arkGoldDark transition'
									disabled={!selectedDetailModel}
								>
									<option value=''>Выберите комплектацию</option>
									{gradeList.map((grade) => (
										<option key={grade.GRADE_NO} value={grade.GRADE_NO}>
											{grade.GRADE_NAME}
										</option>
									))}
								</select>
							</div>

							{/* Детальная комплектация */}
							<div>
								<label className='block text-gray-700 font-medium mb-2'>
									Детальная комплектация:
								</label>
								<select
									value={selectedDetailGrade}
									onChange={(e) => handleDetailGradeChange(e.target.value)}
									className='w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-arkGoldDark focus:border-arkGoldDark transition'
									disabled={!selectedGrade}
								>
									<option value=''>Выберите детальную комплектацию</option>
									{detailGradeList.map((dgrade) => (
										<option
											key={dgrade.DETAIL_GRADE_NO}
											value={dgrade.DETAIL_GRADE_NO}
										>
											{dgrade.DETAIL_GRADE_NAME}
										</option>
									))}
								</select>
							</div>
						</div>

						{/* Кнопка показа/скрытия */}
						<div className='text-center my-4'>
							<button
								onClick={toggleFilters}
								className='cursor-pointer m-auto mt-10 flex items-center justify-center gap-2 px-6 py-3 bg-arkGoldDark text-white font-semibold rounded-lg shadow-md hover:bg-arkGold transition'
							>
								{isFiltersOpen
									? 'Скрыть Дополнительные Фильтры'
									: 'Показать Дополнительные Фильтры'}
								{isFiltersOpen ? '🔼' : '🔽'}
							</button>
						</div>

						{/* Дополнительные фильтры (шторка) */}
						<div
							className={`overflow-hidden transition-all duration-300 ${
								isFiltersOpen
									? 'max-h-[1000px] opacity-100'
									: 'max-h-0 opacity-0'
							}`}
						>
							<div className='bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-6xl mx-auto mt-4'>
								<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
									{/* Цена от */}
									<div>
										<label className='block text-gray-700 font-medium mb-2'>
											Цена от:
										</label>
										<select
											value={priceMin}
											onChange={(e) => handlePriceMinChange(e.target.value)}
											className='w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-arkGoldDark focus:border-arkGoldDark transition'
										>
											{priceOptions.map((opt) => (
												<option key={opt.value} value={opt.value}>
													{opt.label}
												</option>
											))}
										</select>
									</div>

									{/* Цена до */}
									<div>
										<label className='block text-gray-700 font-medium mb-2'>
											Цена до:
										</label>
										<select
											value={priceMax}
											onChange={(e) => setPriceMax(e.target.value)}
											className='w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-arkGoldDark focus:border-arkGoldDark transition'
										>
											{filteredPriceMaxOptions.map((opt) => (
												<option key={opt.value} value={opt.value}>
													{opt.label}
												</option>
											))}
										</select>
									</div>

									{/* Год от */}
									<div>
										<label className='block text-gray-700 font-medium mb-2'>
											Год от:
										</label>
										<select
											value={yearMin}
											onChange={(e) => handleYearMinChange(e.target.value)}
											className='w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-arkGoldDark focus:border-arkGoldDark transition'
										>
											{yearOptions.map((opt) => (
												<option key={opt.value} value={opt.value}>
													{opt.label}
												</option>
											))}
										</select>
									</div>

									{/* Год до */}
									<div>
										<label className='block text-gray-700 font-medium mb-2'>
											Год до:
										</label>
										<select
											value={yearMax}
											onChange={(e) => setYearMax(e.target.value)}
											className='w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-arkGoldDark focus:border-arkGoldDark transition'
										>
											{filteredYearMaxOptions.map((opt) => (
												<option key={opt.value} value={opt.value}>
													{opt.label}
												</option>
											))}
										</select>
									</div>

									{/* Пробег от */}
									<div>
										<label className='block text-gray-700 font-medium mb-2'>
											Пробег от:
										</label>
										<select
											value={useKmMin}
											onChange={(e) => handleUseKmMinChange(e.target.value)}
											className='w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-arkGoldDark focus:border-arkGoldDark transition'
										>
											{useKmOptions.map((opt) => (
												<option key={opt.value} value={opt.value}>
													{opt.label}
												</option>
											))}
										</select>
									</div>

									{/* Пробег до */}
									<div>
										<label className='block text-gray-700 font-medium mb-2'>
											Пробег до:
										</label>
										<select
											value={useKmMax}
											onChange={(e) => setUseKmMax(e.target.value)}
											className='w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-arkGoldDark focus:border-arkGoldDark transition'
										>
											{filteredUseKmMaxOptions.map((opt) => (
												<option key={opt.value} value={opt.value}>
													{opt.label}
												</option>
											))}
										</select>
									</div>

									{/* Топливо */}
									<div>
										<label className='block text-gray-700 font-medium mb-2'>
											Топливо:
										</label>
										<select
											value={fuel}
											onChange={(e) => setFuel(e.target.value)}
											className='w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-arkGoldDark focus:border-arkGoldDark transition'
										>
											{fuelOptions.map((opt) => (
												<option key={opt.value} value={opt.value}>
													{opt.label}
												</option>
											))}
										</select>
									</div>

									{/* Трансмиссия */}
									<div>
										<label className='block text-gray-700 font-medium mb-2'>
											Трансмиссия:
										</label>
										<select
											value={mission}
											onChange={(e) => setMission(e.target.value)}
											className='w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-arkGoldDark focus:border-arkGoldDark transition'
										>
											{missionOptions.map((opt) => (
												<option key={opt.value} value={opt.value}>
													{opt.label}
												</option>
											))}
										</select>
									</div>

									{/* Цвет */}
									<div>
										<label className='block text-gray-700 font-medium mb-2'>
											Цвет:
										</label>
										<select
											value={color}
											onChange={(e) => setColor(e.target.value)}
											className='w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-arkGoldDark focus:border-arkGoldDark transition'
										>
											{colorOptions.map((opt) => (
												<option key={opt.value} value={opt.value}>
													{opt.label}
												</option>
											))}
										</select>
									</div>

									{/* Номер авто */}
									<div>
										<label className='block text-gray-700 font-medium mb-2'>
											Номер авто:
										</label>
										<input
											type='text'
											value={carPlateNumber}
											onChange={(e) => setCarPlateNumber(e.target.value)}
											maxLength={9}
											className='w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-arkGoldDark focus:border-arkGoldDark transition'
											placeholder='Введите номер авто'
										/>
									</div>
								</div>
							</div>
						</div>

						{/* Кнопка поиска */}
						<div className='mt-6 flex flex-wrap gap-4 justify-center'>
							{/* Кнопка "Поиск" */}
							<button
								onClick={handleSearch}
								disabled={!country}
								className='cursor-pointer px-6 py-3 rounded-lg font-semibold bg-arkGold text-black hover:bg-arkGoldDark hover:text-white transition shadow-md'
							>
								🔍 Поиск
							</button>

							{/* Кнопка "Сбросить фильтры" */}
							<button
								onClick={resetFilters}
								className='cursor-pointer px-6 py-3 rounded-lg font-semibold bg-gray-300 text-gray-800 hover:bg-gray-400 transition shadow-md'
							>
								🔄 Сбросить
							</button>
						</div>
					</div>
				)}
			</>

			{/* Отображение автомобилей */}
			<div className='mt-6'>
				{loading ? (
					<div className='flex justify-center items-center h-32'>
						<Loader />
					</div>
				) : carList.length > 0 ? (
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
						{carList
							.sort((a, b) => (a.year > b.year ? -1 : 1))
							.map((car, idx) => (
								<CarListItem car={car} key={idx} />
							))}
					</div>
				) : (
					<Message text='Автомобили не найдены' icon='❌' />
				)}
			</div>

			{/* Пагинация */}
			{carList.length > 0 && (
				<>
					<div className='mt-6 flex justify-center items-center gap-2'>
						<button
							onClick={goToFirstPage}
							disabled={page === 1}
							className='cursor-pointer px-3 py-1 text-gray-700 hover:text-black'
						>
							&laquo;
						</button>
						<button
							onClick={goToPrevPage}
							disabled={page === 1}
							className='px-3 py-1 text-gray-700 hover:text-black'
						>
							&lt;
						</button>

						{getPageNumbers().map((pageNum) => (
							<button
								key={pageNum}
								onClick={() => goToPage(pageNum)}
								className={`cursor-pointer px-3 py-1 rounded ${
									pageNum === page
										? 'bg-yellow-500 text-white'
										: 'text-gray-700 hover:text-black'
								}`}
							>
								{pageNum}
							</button>
						))}

						<button
							onClick={goToNextPage}
							disabled={page === totalPages}
							className='cursor-pointer px-3 py-1 text-gray-700 hover:text-black'
						>
							&gt;
						</button>
						<button
							onClick={goToLastPage}
							disabled={page === totalPages}
							className='cursor-pointer px-3 py-1 text-gray-700 hover:text-black'
						>
							&raquo;
						</button>
					</div>
				</>
			)}
		</div>
	)
}

export default Catalog
