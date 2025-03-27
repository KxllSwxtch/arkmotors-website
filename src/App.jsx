import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import {
	Home,
	Contacts,
	About,
	Cases,
	Catalog,
	ExportCatalog,
	CarDetails,
	ExportCarDetails,
	AdminPanel,
} from './pages'
import { Header, Footer, FixedPhone } from './components'

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
						<Route path='/admin' element={<AdminPanel />} />
						<Route
							path='/export-catalog/:carId'
							element={<ExportCarDetails />}
						/>
					</Routes>
					<FixedPhone />
				</main>
				<Footer />
			</Router>
		</div>
	)
}

export default App
