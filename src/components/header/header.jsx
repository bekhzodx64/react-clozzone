import Logo from '../templates/logo';
import HeaderLinks from './header-links';
import HeaderActions from './header-actions';
import Cart from '../cart/cart';
import { useState } from 'react';

const Header = () => {
	const [showCart, setShowCart] = useState(false);

	const showCartHandler = () => {
		setShowCart(!showCart);
	};

	return (
		<header className='fixed top-0 left-0 right-0 z-20 bg-accent h-11 lg:h-[100px]'>
			<div className='container h-full grid grid-cols-10 items-center'>
				<HeaderLinks />

				<div className='justify-self-center col-span-2 col-start-5'>
					<Logo />
				</div>

				<HeaderActions showCartHandler={showCartHandler} />
				{showCart && <Cart showCartHandler={showCartHandler} />}
			</div>
		</header>
	);
};

export default Header;
