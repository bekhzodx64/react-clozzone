import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './pages/home/home';

const App = () => {
	return (
		<div className='flex flex-col min-h-screen overflow-x-hidden'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
