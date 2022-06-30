import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import AllProducts from './pages/all-products/all-products';
import Home from './pages/home/home';
import ProductDetail from './pages/product-detail/product-detail';

const App = () => {
	return (
		<div className='flex flex-col min-h-screen overflow-x-hidden'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/:userId' element={<ProductDetail />} />
				<Route path='/all-products' element={<AllProducts />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
