import { useState } from 'react'
import axios from 'axios'

import {
	priceOptions,
	yearOptions,
	useKmOptions,
	fuelOptions,
	missionOptions,
	colorOptions,
} from '../utils'

const Catalog = () => {
	// ------------------ Основные состояния ------------------
	const [country, setCountry] = useState('') // 'kor' или 'foreign'
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
				'https://www.arkmotors.kr/search/getMakerList',
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
				'https://www.arkmotors.kr/search/getModelList',
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
				'https://www.arkmotors.kr/search/getDetailModelList',
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
				'https://www.arkmotors.kr/search/getGradeList',
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
				'https://www.arkmotors.kr/search/getDetailGradeList',
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
	const handleSearch = () => {
		const baseURL = 'https://www.arkmotors.kr/search/model'

		const finalURL = `${baseURL}/${country}?order=&ascending=desc&view=image&customSelect=24&carName=&maker=${selectedMaker}&model=${selectedModel}&dmodel=${selectedDetailModel}&grade=${selectedGrade}&dgrade=${selectedDetailGrade}&price-min=${priceMin}&price-max=${priceMax}&year-min=${yearMin}&year-max=${yearMax}&usekm-min=${useKmMin}&usekm-max=${useKmMax}&fuel=${fuel}&mission=${mission}&color=${color}&country=${country}&carNo=&carPlateNumber=${carPlateNumber}&vehicle-model=&vehicle-dmodel=&vehicle-name=&tab=model&detailSearch=close&type=`

		window.open(finalURL, '_blank')
	}

	// ------------------ Рендер ------------------
	return (
		<div className='p-4'>
			<h1 className='text-2xl font-bold mb-4'>Каталог автомобилей</h1>

			{/* Кнопки для выбора страны */}
			<div className='flex gap-4 mb-6'>
				<button
					onClick={() => handleCountryClick('kor')}
					className={`
            px-4 py-2 rounded
            ${
							country === 'kor'
								? 'bg-[var(--color-arkGoldDark)] text-white'
								: 'bg-[var(--color-arkBlack)] text-[var(--color-arkGold)]'
						}
          `}
				>
					Корейские авто
				</button>

				<button
					onClick={() => handleCountryClick('foreign')}
					className={`
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
				<div className='space-y-6 max-w-xl'>
					{/* Производитель */}
					<div>
						<label className='block mb-2 font-semibold'>Производитель:</label>
						<select
							value={selectedMaker}
							onChange={(e) => handleMakerChange(e.target.value)}
							className='border border-gray-300 p-2 w-full rounded'
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
						<label className='block mb-2 font-semibold'>Модель:</label>
						<select
							value={selectedModel}
							onChange={(e) => handleModelChange(e.target.value)}
							className='border border-gray-300 p-2 w-full rounded'
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
						<label className='block mb-2 font-semibold'>
							Подробная модель:
						</label>
						<select
							value={selectedDetailModel}
							onChange={(e) => handleDetailModelChange(e.target.value)}
							className='border border-gray-300 p-2 w-full rounded'
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
						<label className='block mb-2 font-semibold'>Комплектация:</label>
						<select
							value={selectedGrade}
							onChange={(e) => handleGradeChange(e.target.value)}
							className='border border-gray-300 p-2 w-full rounded'
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
						<label className='block mb-2 font-semibold'>
							Детальная комплектация:
						</label>
						<select
							value={selectedDetailGrade}
							onChange={(e) => handleDetailGradeChange(e.target.value)}
							className='border border-gray-300 p-2 w-full rounded'
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
			)}

			{/* Дополнительные фильтры (цена, год, пробег, топливо, трансмиссия, цвет, номер) */}
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
				{/* Цена от/до */}
				<div className='flex flex-col'>
					<label className='font-semibold mb-1'>Цена от:</label>
					<select
						value={priceMin}
						onChange={(e) => handlePriceMinChange(e.target.value)}
						className='border border-gray-300 p-2 rounded'
					>
						{priceOptions.map((opt) => (
							<option key={opt.value} value={opt.value}>
								{opt.label}
							</option>
						))}
					</select>
				</div>
				<div className='flex flex-col'>
					<label className='font-semibold mb-1'>Цена до:</label>
					<select
						value={priceMax}
						onChange={(e) => setPriceMax(e.target.value)}
						className='border border-gray-300 p-2 rounded'
					>
						{filteredPriceMaxOptions.map((opt) => (
							<option key={opt.value} value={opt.value}>
								{opt.label}
							</option>
						))}
					</select>
				</div>

				{/* Год от/до */}
				<div className='flex flex-col'>
					<label className='font-semibold mb-1'>Год от:</label>
					<select
						value={yearMin}
						onChange={(e) => handleYearMinChange(e.target.value)}
						className='border border-gray-300 p-2 rounded'
					>
						{yearOptions.map((opt) => (
							<option key={opt.value} value={opt.value}>
								{opt.label}
							</option>
						))}
					</select>
				</div>
				<div className='flex flex-col'>
					<label className='font-semibold mb-1'>Год до:</label>
					<select
						value={yearMax}
						onChange={(e) => setYearMax(e.target.value)}
						className='border border-gray-300 p-2 rounded'
					>
						{filteredYearMaxOptions.map((opt) => (
							<option key={opt.value} value={opt.value}>
								{opt.label}
							</option>
						))}
					</select>
				</div>

				{/* Пробег от/до */}
				<div className='flex flex-col'>
					<label className='font-semibold mb-1'>Пробег от:</label>
					<select
						value={useKmMin}
						onChange={(e) => handleUseKmMinChange(e.target.value)}
						className='border border-gray-300 p-2 rounded'
					>
						{useKmOptions.map((opt) => (
							<option key={opt.value} value={opt.value}>
								{opt.label}
							</option>
						))}
					</select>
				</div>
				<div className='flex flex-col'>
					<label className='font-semibold mb-1'>Пробег до:</label>
					<select
						value={useKmMax}
						onChange={(e) => setUseKmMax(e.target.value)}
						className='border border-gray-300 p-2 rounded'
					>
						{filteredUseKmMaxOptions.map((opt) => (
							<option key={opt.value} value={opt.value}>
								{opt.label}
							</option>
						))}
					</select>
				</div>

				{/* Топливо */}
				<div className='flex flex-col'>
					<label className='font-semibold mb-1'>Топливо:</label>
					<select
						value={fuel}
						onChange={(e) => setFuel(e.target.value)}
						className='border border-gray-300 p-2 rounded'
					>
						{fuelOptions.map((opt) => (
							<option key={opt.value} value={opt.value}>
								{opt.label}
							</option>
						))}
					</select>
				</div>

				{/* Трансмиссия */}
				<div className='flex flex-col'>
					<label className='font-semibold mb-1'>Трансмиссия:</label>
					<select
						value={mission}
						onChange={(e) => setMission(e.target.value)}
						className='border border-gray-300 p-2 rounded'
					>
						{missionOptions.map((opt) => (
							<option key={opt.value} value={opt.value}>
								{opt.label}
							</option>
						))}
					</select>
				</div>

				{/* Цвет */}
				<div className='flex flex-col'>
					<label className='font-semibold mb-1'>Цвет:</label>
					<select
						value={color}
						onChange={(e) => setColor(e.target.value)}
						className='border border-gray-300 p-2 rounded'
					>
						{colorOptions.map((opt) => (
							<option key={opt.value} value={opt.value}>
								{opt.label}
							</option>
						))}
					</select>
				</div>

				{/* Номер авто */}
				<div className='flex flex-col'>
					<label className='font-semibold mb-1'>Номер авто:</label>
					<input
						type='text'
						value={carPlateNumber}
						onChange={(e) => setCarPlateNumber(e.target.value)}
						maxLength={9}
						className='border border-gray-300 p-2 rounded'
						placeholder='Введите номер (макс. 9 символов)'
					/>
				</div>
			</div>

			{/* Кнопка "Поиск" */}
			<div className='mt-6'>
				<button
					onClick={handleSearch}
					disabled={
						!country // Можно запретить поиск, пока не выбрана страна, или оставить свободу выбора
					}
					className='px-6 py-3 rounded font-semibold bg-[var(--color-arkGold)] text-black hover:bg-[var(--color-arkGoldDark)] hover:text-white'
				>
					Поиск
				</button>
			</div>
		</div>
	)
}

export default Catalog
