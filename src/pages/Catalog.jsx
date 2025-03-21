import { useState, useEffect } from 'react'
import axios from 'axios'
import Select from 'react-select'

import {
	priceOptions,
	yearOptions,
	useKmOptions,
	fuelOptions,
	missionOptions,
	colorOptions,
	brandLogos,
	modelLogos,
	translateCarName,
} from '../utils'
import { CarListItem, Loader, Message } from '../components'
import {
	carBrandsTranslation,
	carModelsTranslation,
	carTrimsTranslation,
	carDetailedModelsTranslation,
} from '../translations'

// Helpers
function translateFuelType(text) {
	for (const [korean, russian] of Object.entries(
		carDetailedModelsTranslation,
	)) {
		// Match only the Korean part of the word and ignore the prefix (e.g. "G")
		const regex = new RegExp(`(?<=^|\\s|\\W)${korean}(?=\\s|\\W|$)`, 'g')

		// Replace the matched Korean word with the Russian translation
		text = text.replace(regex, russian)
	}
	return text
}

const API_BASE_URL = 'https://ark-motors-backend-3a002a527613.herokuapp.com'
const carsPerPage = 24

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
			const response = await axios.get(`${API_BASE_URL}/makers`, {
				params: { country: ctry },
			})
			setMakerList(response.data)
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
			const response = await axios.get(`${API_BASE_URL}/models`, {
				params: { maker: makerNo },
			})
			setModelList(response.data)
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
			const response = await axios.get(`${API_BASE_URL}/detail-models`, {
				params: { model: modelNo },
			})
			setDetailModelList(response.data)
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
			const response = await axios.get(`${API_BASE_URL}/grades`, {
				params: { 'detail-model': detailModelNo },
			})
			setGradeList(response.data)
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
			const response = await axios.get(`${API_BASE_URL}/detail-grades`, {
				params: { grade: gradeNo },
			})
			setDetailGradeList(response.data)
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
	const searchCars = async () => {
		setLoading(true)

		const params = {
			order: '',
			ascending: 'desc',
			view: 'image',
			customSelect: `${carsPerPage}`,
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
			page, // номер страницы
		}

		try {
			const response = await axios.get(`${API_BASE_URL}/cars`, { params })

			const cars = response.data || []

			// Обновляем список автомобилей
			setCarList(cars)

			// Определяем количество страниц
			if (cars.length < carsPerPage) {
				setTotalPages(page) // Если меньше, значит это последняя страница
			} else {
				setTotalPages(page + 1) // Если машин >= 24, то загружаем ещё одну страницу
			}
		} catch (error) {
			console.error('Ошибка при загрузке автомобилей:', error)
		} finally {
			setLoading(false)
		}
	}

	const resetFilters = () => {
		// Сбрасываем состояние фильтров
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

		searchCars({})
	}

	useEffect(() => {
		const initialMakerList = async () => {
			try {
				const response = await axios.get(`${API_BASE_URL}/makers`, {
					params: { country },
				})
				setMakerList(response.data)
			} catch (error) {
				console.error('Ошибка при загрузке производителей:', error)
			}
		}
		window.scroll({ top: 0, behavior: 'smooth' }) // Прокручиваем страницу вверх
		searchCars()
		initialMakerList()
	}, [country, page])

	// ------------------ Обработчики пагинации ------------------
	// Функция для создания массива страниц
	const getPageNumbers = () => {
		const maxVisible = 5 // Количество отображаемых страниц в пагинации
		let startPage = Math.max(1, page - Math.floor(maxVisible / 2))
		let endPage = startPage + maxVisible - 1

		// Корректируем, если конец выходит за пределы
		if (endPage > totalPages) {
			endPage = totalPages
			startPage = Math.max(1, endPage - maxVisible + 1)
		}

		// Генерируем массив страниц
		return Array.from(
			{ length: endPage - startPage + 1 },
			(_, i) => startPage + i,
		)
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

	const modelOptions = modelList.map((model) => {
		const translatedName =
			carModelsTranslation[model.MODEL_NAME] || model.MODEL_NAME

		const brandKey =
			carBrandsTranslation[
				makerList.find((maker) => maker.MAKER_NO === selectedMaker)?.MAKER_NAME
			] ||
			makerList.find((maker) => maker.MAKER_NO === selectedMaker)?.MAKER_NAME

		return {
			value: `${selectedMaker}-${model.MODEL_NO}`, // Уникальный ключ
			label: (
				<span className='flex items-center gap-2'>
					{modelLogos?.[brandKey]?.[translatedName] && (
						<img
							src={modelLogos[brandKey][translatedName]}
							alt={translatedName}
							className='inline-block w-10 h-auto'
						/>
					)}
					{translatedName}
				</span>
			),
			searchLabel: translatedName,
		}
	})

	const excludedMakers = [
		'Nissan',
		'Daihatsu',
		'동풍소콘',
		'Rover',
		'Renault',
		'Mazda',
		'Mitsubishi',
		'Mitsuoka',
		'북기은상',
		'Buick',
		'SAAB',
		'Scion',
		'Sunlon',
		'Smart',
		'Subaru',
		'Suzuki',
		'Citroën',
		'Opel',
		'Oldsmobile',
		'Iveco',
		'Isuzu',
		'Zidou',
		'Geely',
		'포톤',
		'Peugeot',
		'Fiat',
		'Honda',
		'BYD',
	]

	const options = makerList
		.filter((maker) => {
			return !excludedMakers.includes(translateCarName(maker.MAKER_NAME))
		})
		.map((maker) => {
			const translatedName =
				carBrandsTranslation[maker.MAKER_NAME] || maker.MAKER_NAME
			return {
				value: maker.MAKER_NO,
				label: (
					<span className='flex items-center gap-2'>
						{brandLogos[translatedName] && (
							<img
								src={brandLogos[translatedName]}
								alt={translatedName}
								className='inline-block w-5 auto'
							/>
						)}
						{translatedName}
					</span>
				),
				searchLabel: carBrandsTranslation[maker.MAKER_NAME] || maker.MAKER_NAME,
			}
		})

	const customStyles = {
		control: (provided) => ({
			...provided,
			borderRadius: '0.5rem',
			borderColor: '#d1d5db',
			boxShadow: 'none',
			'&:hover': {
				borderColor: '#9ca3af',
			},
			height: '100%',
		}),
		option: (provided, state) => ({
			...provided,
			height: '100%',
			display: 'flex',
			alignItems: 'center',
			gap: '0.5rem',
			color: state.isSelected ? '#fff' : '#374151',
			backgroundColor: state.isSelected ? '#2563eb' : '#fff',
			'&:hover': {
				backgroundColor: '#f3f4f6',
			},
		}),
	}

	// eslint-disable-next-line react/prop-types
	const BrandSelector = ({ handleMakerChange }) => {
		const handleChange = (selectedOption) => {
			handleMakerChange(selectedOption.value) // Обновляем selectedMaker
		}

		const customFilter = (option, inputValue) => {
			return option.data.searchLabel
				.toLowerCase()
				.includes(inputValue.toLowerCase())
		}

		return (
			<Select
				ignoreCase
				value={options.find((option) => option.value === selectedMaker)}
				filterOption={customFilter} // Добавили кастомный фильтр
				options={options}
				onChange={handleChange}
				placeholder='Выберите марку'
				styles={customStyles}
				className='w-full text-gray-800 rounded-lg shadow-sm h-[100%]'
			/>
		)
	}

	return (
		<div className='p-4 mt-20 md:mt-10 text-secondary-500 min-h-screen grid md:grid-cols-[0.8fr_3fr] gap-10'>
			{/* Фильтры */}
			<div className='md:ml-5'>
				<>
					{/* Кнопки для выбора страны */}
					<div className='flex justify-center gap-6 mb-8'>
						{[
							{ label: 'Корейские', value: 'kor', emoji: '🇰🇷' },
							{ label: 'Иномарки', value: 'foreign', emoji: '🌍' },
						].map(({ label, value, emoji }) => (
							<button
								key={value}
								onClick={() => handleCountryClick(value)}
								className={`cursor-pointer flex items-center justify-center gap-2 p-3 text-lg font-bold rounded-xs shadow-xl transition-all duration-300
									${
										country === value
											? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white scale-105 shadow-2xl'
											: 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 hover:from-yellow-400 hover:to-yellow-600 hover:text-white transition-colors duration-300'
									}
									active:scale-95
								`}
							>
								<span>{label}</span>
							</button>
						))}
					</div>

					{/* Если страна выбрана, показываем основные фильтры */}
					{country && (
						<div className='w-full mx-auto flex flex-col md:flex-row'>
							<div className='grid grid-cols-1 md:grid-cols-1 gap-6 w-full'>
								{/* Производитель */}
								<div className='flex-1'>
									<BrandSelector handleMakerChange={handleMakerChange} />
								</div>

								{/* Модель */}
								<div className='flex-1'>
									<Select
										isDisabled={!selectedMaker}
										value={
											modelOptions.find(
												(option) => option.value === selectedModel,
											) || ''
										}
										options={modelOptions}
										onChange={(selectedOption) =>
											handleModelChange(selectedOption.value)
										}
										placeholder='Выберите модель'
										styles={customStyles}
										className='w-full text-gray-800 rounded-lg shadow-sm h-[100%]'
									/>
								</div>

								{/* Подробная модель */}
								<div className='flex-1'>
									<select
										value={selectedDetailModel}
										onChange={(e) => handleDetailModelChange(e.target.value)}
										className={`w-full border-2 p-3 rounded-lg shadow-md transition duration-300 appearance-none pr-10 relative
										${
											selectedModel
												? 'border-yellow-500 bg-white text-black hover:border-yellow-600 focus:ring-yellow-500'
												: 'border-gray-600 bg-gray-800 text-gray-400 cursor-not-allowed'
										}
									`}
										disabled={!selectedModel}
										style={{
											backgroundImage:
												'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>\')',
											backgroundPosition: 'right 10px center',
											backgroundRepeat: 'no-repeat',
											backgroundSize: '1rem',
										}}
									>
										<option value='' className='text-gray-400'>
											Поколение
										</option>
										{detailModelList.map((dmodel) => (
											<option
												key={dmodel.DETAIL_MODEL_NO}
												value={dmodel.DETAIL_MODEL_NO}
												className='text-white'
											>
												{carTrimsTranslation[dmodel.DETAIL_MODEL_NAME] ||
													dmodel.DETAIL_MODEL_NAME}
											</option>
										))}
									</select>
								</div>

								{/* Комплектация */}
								<div className='flex-1'>
									<select
										value={selectedGrade}
										onChange={(e) => handleGradeChange(e.target.value)}
										className={`w-full border-2 p-3 pr-10 rounded-lg shadow-md transition duration-300 appearance-none relative
										${
											selectedDetailModel
												? 'border-yellow-500 bg-white text-black hover:border-yellow-600 focus:ring-yellow-500'
												: 'border-gray-600 bg-gray-800 text-gray-400 cursor-not-allowed'
										}
									`}
										disabled={!selectedDetailModel}
										style={{
											backgroundImage:
												'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>\')',
											backgroundPosition: 'right 12px center',
											backgroundRepeat: 'no-repeat',
											backgroundSize: '1rem',
										}}
									>
										<option value='' className='text-gray-400'>
											Выберите комплектацию
										</option>
										{gradeList.map((grade) => (
											<option
												key={grade.GRADE_NO}
												value={grade.GRADE_NO}
												className='text-white'
											>
												{translateFuelType(grade.GRADE_NAME) ||
													grade.GRADE_NAME}
											</option>
										))}
									</select>
								</div>

								{/* Детальная комплектация */}
								<div className='flex-1'>
									<select
										value={selectedDetailGrade}
										onChange={(e) => handleDetailGradeChange(e.target.value)}
										className={`w-full border-2 p-3 pr-10 rounded-lg shadow-md transition duration-300 appearance-none relative
										${
											selectedGrade
												? 'border-yellow-500 bg-white text-black hover:border-yellow-600 focus:ring-yellow-500'
												: 'border-gray-600 bg-gray-800 text-gray-400 cursor-not-allowed'
										}
									`}
										disabled={!selectedGrade}
										style={{
											backgroundImage:
												'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>\')',
											backgroundPosition: 'right 12px center',
											backgroundRepeat: 'no-repeat',
											backgroundSize: '1rem',
										}}
									>
										<option value='' className='text-gray-400'>
											Выберите детальную комплектацию
										</option>
										{detailGradeList.map((dgrade) => (
											<option
												key={dgrade.DETAIL_GRADE_NO}
												value={dgrade.DETAIL_GRADE_NO}
												className='text-white'
											>
												{translateFuelType(dgrade.DETAIL_GRADE_NAME)}
											</option>
										))}
									</select>
								</div>
							</div>
						</div>
					)}
				</>

				{/* Дополнительные фильтры (шторка) */}
				<div className='bg-white text-black mt-5'>
					<div className='mx-auto w-full'>
						<div className='grid grid-cols-1 md:grid-cols-1 gap-6 w-full'>
							{/* Цена от */}
							<div>
								<label className='block text-avtoVitaGold font-semibold mb-2 tracking-wide'>
									Цена от:
								</label>
								<select
									value={priceMin}
									onChange={(e) => handlePriceMinChange(e.target.value)}
									className='w-full border border-yellow-600 p-3 pr-10 rounded-lg shadow-md bg-white text-black focus:ring-avtoVitaGold focus:border-avtoVitaGold transition duration-300 ease-in-out appearance-none relative'
									style={{
										backgroundImage:
											'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>\')',
										backgroundPosition: 'right 12px center',
										backgroundRepeat: 'no-repeat',
										backgroundSize: '1rem',
									}}
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
								<label className='block text-avtoVitaGold font-semibold mb-2 tracking-wide'>
									Цена до:
								</label>
								<select
									value={priceMax}
									onChange={(e) => setPriceMax(e.target.value)}
									className='w-full border border-yellow-600 p-3 pr-10 rounded-lg shadow-md bg-white text-black focus:ring-avtoVitaGold focus:border-avtoVitaGold transition duration-300 ease-in-out appearance-none relative'
									style={{
										backgroundImage:
											'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>\')',
										backgroundPosition: 'right 12px center',
										backgroundRepeat: 'no-repeat',
										backgroundSize: '1rem',
									}}
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
								<label className='block text-avtoVitaGold font-semibold mb-2 tracking-wide'>
									Год от:
								</label>
								<select
									value={yearMin}
									onChange={(e) => handleYearMinChange(e.target.value)}
									className='w-full border border-yellow-600 p-3 pr-10 rounded-lg shadow-md bg-white text-black focus:ring-avtoVitaGold focus:border-avtoVitaGold transition duration-300 ease-in-out appearance-none relative'
									style={{
										backgroundImage:
											'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>\')',
										backgroundPosition: 'right 12px center',
										backgroundRepeat: 'no-repeat',
										backgroundSize: '1rem',
									}}
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
								<label className='block text-avtoVitaGold font-semibold mb-2 tracking-wide'>
									Год до:
								</label>
								<select
									value={yearMax}
									onChange={(e) => setYearMax(e.target.value)}
									className='w-full border border-yellow-600 p-3 pr-10 rounded-lg shadow-md bg-white text-black focus:ring-avtoVitaGold focus:border-avtoVitaGold transition duration-300 ease-in-out appearance-none relative'
									style={{
										backgroundImage:
											'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>\')',
										backgroundPosition: 'right 12px center',
										backgroundRepeat: 'no-repeat',
										backgroundSize: '1rem',
									}}
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
								<label className='block text-avtoVitaGold font-semibold mb-2 tracking-wide'>
									Пробег от:
								</label>
								<select
									value={useKmMin}
									onChange={(e) => handleUseKmMinChange(e.target.value)}
									className='w-full border border-yellow-600 p-3 pr-10 rounded-lg shadow-md bg-white text-black focus:ring-avtoVitaGold focus:border-avtoVitaGold transition duration-300 ease-in-out appearance-none relative'
									style={{
										backgroundImage:
											'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>\')',
										backgroundPosition: 'right 12px center',
										backgroundRepeat: 'no-repeat',
										backgroundSize: '1rem',
									}}
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
								<label className='block text-avtoVitaGold font-semibold mb-2 tracking-wide'>
									Пробег до:
								</label>
								<select
									value={useKmMax}
									onChange={(e) => setUseKmMax(e.target.value)}
									className='w-full border border-yellow-600 p-3 pr-10 rounded-lg shadow-md bg-white text-black focus:ring-avtoVitaGold focus:border-avtoVitaGold transition duration-300 ease-in-out appearance-none relative'
									style={{
										backgroundImage:
											'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>\')',
										backgroundPosition: 'right 12px center',
										backgroundRepeat: 'no-repeat',
										backgroundSize: '1rem',
									}}
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
								<label className='block text-avtoVitaGold font-semibold mb-2 tracking-wide'>
									Топливо:
								</label>
								<select
									value={fuel}
									onChange={(e) => setFuel(e.target.value)}
									className='w-full border border-yellow-600 p-3 pr-10 rounded-lg shadow-md bg-white text-black focus:ring-avtoVitaGold focus:border-avtoVitaGold transition duration-300 ease-in-out appearance-none relative'
									style={{
										backgroundImage:
											'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>\')',
										backgroundPosition: 'right 12px center',
										backgroundRepeat: 'no-repeat',
										backgroundSize: '1rem',
									}}
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
								<label className='block text-avtoVitaGold font-semibold mb-2 tracking-wide'>
									Трансмиссия:
								</label>
								<select
									value={mission}
									onChange={(e) => setMission(e.target.value)}
									className='w-full border border-yellow-600 p-3 pr-10 rounded-lg shadow-md bg-white text-black focus:ring-avtoVitaGold focus:border-avtoVitaGold transition duration-300 ease-in-out appearance-none relative'
									style={{
										backgroundImage:
											'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>\')',
										backgroundPosition: 'right 12px center',
										backgroundRepeat: 'no-repeat',
										backgroundSize: '1rem',
									}}
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
								<label className='block text-avtoVitaGold font-semibold tracking-wide'>
									Цвет:
								</label>
								<select
									value={color}
									onChange={(e) => setColor(e.target.value)}
									className='w-full border border-yellow-600 p-3 pr-10 rounded-lg shadow-md bg-white text-black focus:ring-avtoVitaGold focus:border-avtoVitaGold transition duration-300 ease-in-out appearance-none relative'
									style={{
										backgroundImage:
											'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>\')',
										backgroundPosition: 'right 12px center',
										backgroundRepeat: 'no-repeat',
										backgroundSize: '1rem',
									}}
								>
									{colorOptions.map((opt) => (
										<option key={opt.value} value={opt.value}>
											{opt.label}
										</option>
									))}
								</select>
							</div>

							{/* Номер авто */}
							{/* <div>
										<label className='block text-gray-700 font-medium mb-2'>
											Номер авто:
										</label>
										<input
											type='text'
											value={carPlateNumber}
											onChange={(e) => setCarPlateNumber(e.target.value)}
											maxLength={9}
											className='w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-avtoVitaDark focus:border-avtoVitaDark transition'
											placeholder='Введите номер авто'
										/>
									</div> */}
						</div>
					</div>
				</div>

				{/* Кнопка поиска */}
				<div className='flex flex-wrap gap-6 justify-center mt-5'>
					{/* Кнопка "Поиск" */}
					<button
						onClick={searchCars}
						disabled={!country}
						className='cursor-pointer px-8 py-3 rounded-full font-semibold bg-yellow-600 text-white hover:bg-avtoVitaDark hover:text-black hover:bg-yellow-400 transition duration-300 ease-in-out shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2'
					>
						🔍 <span>Поиск</span>
					</button>

					{/* Кнопка "Сбросить фильтры" */}
					<button
						onClick={resetFilters}
						className='cursor-pointer px-8 py-3 rounded-full font-semibold bg-gray-700 text-white hover:bg-red-600 transition duration-300 ease-in-out shadow-lg flex items-center gap-2'
					>
						🔄 <span>Сбросить</span>
					</button>
				</div>
			</div>

			{/* Отображение автомобилей */}
			<div className='mt-6'>
				{loading ? (
					<div className='flex justify-center items-center h-32'>
						<Loader />
					</div>
				) : carList.length > 0 ? (
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
						{carList.map((car, idx) => (
							<CarListItem car={car} key={idx} />
						))}
					</div>
				) : (
					<Message text='Автомобили не найдены' icon='❌' />
				)}

				{/* Пагинация */}
				{carList.length > 0 && totalPages > 1 && (
					<div className='mt-6 flex justify-center items-center gap-2'>
						<button
							onClick={goToFirstPage}
							disabled={page === 1}
							className='cursor-pointer px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 bg-gray-700 hover:bg-gray-600 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'
						>
							&laquo;
						</button>
						<button
							onClick={goToPrevPage}
							disabled={page === 1}
							className='px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 bg-gray-700 hover:bg-gray-600 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'
						>
							&lt;
						</button>

						{getPageNumbers().map((pageNum) => (
							<button
								key={pageNum}
								onClick={() => goToPage(pageNum)}
								className={`cursor-pointer px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300
                    ${
											pageNum === page
												? 'bg-yellow-500 text-black scale-110 shadow-lg'
												: 'bg-gray-800 hover:bg-yellow-400 hover:text-black'
										}
                `}
							>
								{pageNum}
							</button>
						))}

						<button
							onClick={goToNextPage}
							disabled={page === totalPages}
							className='cursor-pointer px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 bg-gray-700 hover:bg-gray-600 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'
						>
							&gt;
						</button>
						<button
							onClick={goToLastPage}
							disabled={page === totalPages}
							className='cursor-pointer px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 bg-gray-700 hover:bg-gray-600 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'
						>
							&raquo;
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default Catalog
