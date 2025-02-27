import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import {
	Home,
	Contacts,
	About,
	Cases,
	Catalog,
	ExportCatalog,
	CarDetails,
} from './pages'
import { Header, Footer } from './components'

const App = () => {
	return (
		<div className='flex flex-col min-h-screen'>
			<Router>
				<Header />
				<main className='flex-grow mt-18'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/contacts' element={<Contacts />} />
						<Route path='/about' element={<About />} />
						<Route path='/cases' element={<Cases />} />
						<Route path='/catalog' element={<Catalog />} />
						<Route path='/catalog/:carId' element={<CarDetails />} />
						<Route path='/export-catalog' element={<ExportCatalog />} />
					</Routes>
				</main>
				<Footer />
			</Router>
		</div>
	)
}

export default App
