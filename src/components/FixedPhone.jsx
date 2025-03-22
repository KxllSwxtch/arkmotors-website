import { useEffect, useState } from 'react'

const FixedPhone = () => {
	const [isBouncing, setIsBouncing] = useState(false)

	useEffect(() => {
		const interval = setInterval(() => {
			setIsBouncing(true)
			setTimeout(() => setIsBouncing(false), 2000) // bounce lasts 1s
		}, 3000)

		return () => clearInterval(interval)
	}, [])

	return (
		<a
			href='tel:+821036422039'
			className={`md:w-1/4 w-full right-0 text-center fixed bottom-5 z-50 bg-yellow-500 text-black px-4 py-3 rounded-full shadow-lg flex items-center justify-center gap-2 text-md md:text-xl transition-transform duration-300 hover:scale-105 ${
				isBouncing ? 'animate-pulse' : ''
			}`}
		>
			📞 +82 10-3642-2039 - Пан Сергей
		</a>
	)
}

export default FixedPhone
