import { motion } from 'framer-motion'
import { useState } from 'react'
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore'
import { app } from '../firebase'

const firestore = getFirestore(app)

const AdminPanel = () => {
	const [passwordInput, setPasswordInput] = useState('')
	const [authenticated, setAuthenticated] = useState(false)
	const [markup, setMarkup] = useState(null)
	const [newMarkup, setNewMarkup] = useState('')

	// Проверка пароля
	const handleLogin = () => {
		if (passwordInput === 'test') {
			setAuthenticated(true)
			fetchMarkup()
		} else {
			alert('Неверный пароль')
		}
	}

	// Получение текущей наценки
	const fetchMarkup = async () => {
		const docRef = doc(firestore, 'markup', 'C8gG4XtW3ed5wnS4sDCC')
		const docSnap = await getDoc(docRef)
		if (docSnap.exists()) {
			setMarkup(docSnap.data().markup)
		}
	}

	// Обновление наценки
	const updateMarkup = async () => {
		const docRef = doc(firestore, 'markup', 'C8gG4XtW3ed5wnS4sDCC')
		await updateDoc(docRef, { markup: parseInt(newMarkup) })
		alert('Наценка обновлена!')
		setMarkup(parseInt(newMarkup))
		setNewMarkup('')
	}

	if (!authenticated) {
		return (
			<motion.div
				className='min-h-200 flex flex-col justify-center items-center'
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<h2 className='text-xl font-bold mb-4'>Введите пароль</h2>
				<input
					type='password'
					value={passwordInput}
					onChange={(e) => setPasswordInput(e.target.value)}
					onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
					placeholder='Пароль'
					className='border p-2 rounded mb-4'
				/>
				<button
					onClick={handleLogin}
					className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer'
				>
					Войти
				</button>
			</motion.div>
		)
	}

	return (
		<motion.div
			className='min-h-200 flex flex-col justify-center items-center'
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<h2 className='text-2xl font-bold mb-4'>Панель менеджера</h2>
			<p className='mb-2 text-lg'>
				Текущая наценка: <b>{markup}</b>만원
			</p>
			<input
				type='number'
				value={newMarkup}
				onChange={(e) => setNewMarkup(e.target.value)}
				placeholder='Новая наценка'
				className='border p-2 rounded mb-4'
				min={0}
			/>
			<button
				onClick={updateMarkup}
				className='bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 cursor-pointer transition-colors duration-300'
			>
				Обновить наценку
			</button>
		</motion.div>
	)
}

export default AdminPanel
