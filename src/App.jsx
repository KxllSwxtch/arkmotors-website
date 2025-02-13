import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home, Contacts, About, Cases, Catalog } from './pages'
import { Header, Footer } from './сomponents'

const App = () => {
	return (
		<div className='flex flex-col min-h-screen'>
			<Router>
				<Header />
				<main className='flex-grow'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/contacts' element={<Contacts />} />
						<Route path='/about' element={<About />} />
						<Route path='/cases' element={<Cases />} />
						<Route path='/catalog' element={<Catalog />} />
					</Routes>
				</main>
				<Footer />
			</Router>
		</div>
	)
}

export default App
