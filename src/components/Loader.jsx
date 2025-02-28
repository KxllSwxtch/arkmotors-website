const Loader = () => {
	return (
		<div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50'>
			<div className='relative w-16 h-16'>
				<div className='absolute inset-0 border-4 border-t-arkGoldDark border-transparent rounded-full animate-spin glow'></div>
				<div className='absolute inset-0 border-4 border-b-arkGoldDark border-transparent rounded-full animate-spin-reverse glow'></div>
			</div>
		</div>
	)
}

export default Loader
