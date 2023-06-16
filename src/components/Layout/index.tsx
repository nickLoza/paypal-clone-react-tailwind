import Routers from '../../Routers/Routers'
import Header from '../Header'
import Footer from '../Footer'

function Layout() {
	return (
		<>
			<Header/>
			<div className='min-h-[100vh]'>
				<Routers/>
			</div>
			<Footer/>
		</>
	)
}

export default Layout