const Loader = () => {
	return (
		<div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50 animate-pulse'>
			<div className='relative w-20 h-20'>
				<div className='absolute inset-0 border-4 border-t-transparent border-b-transparent border-l-yellow-400 border-r-yellow-500 rounded-full animate-spin shadow-lg'></div>
				<div className='absolute inset-0 border-4 border-b-transparent border-t-yellow-500 border-l-transparent border-r-yellow-400 rounded-full animate-spin-reverse shadow-lg'></div>
				<div className='absolute inset-0 w-full h-full rounded-full bg-yellow-500 opacity-20 blur-xl animate-ping'></div>
			</div>
		</div>
	)
}

export default Loader
