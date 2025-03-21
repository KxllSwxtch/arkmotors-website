const Loader = () => {
	return (
		<div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50'>
			<div className='relative w-24 h-24'>
				<div className='absolute inset-0 border-4 border-t-transparent border-b-transparent border-l-yellow-400 border-r-yellow-500 rounded-full animate-[spin_2s_linear_infinite] shadow-2xl'></div>
				<div className='absolute inset-0 w-full h-full rounded-full bg-yellow-400 opacity-30 blur-[3rem]'></div>
			</div>
		</div>
	)
}

export default Loader
