import Logo from '../templates/logo';
import HeaderLinks from './header-links';
import HeaderActions from './header-actions';

const Header = () => {
	return (
		<header className='fixed top-0 left-0 right-0 z-20 bg-accent h-11 lg:h-[100px]'>
			<div className='container h-full grid grid-cols-10 items-center'>
				<HeaderLinks />

				<div className='justify-self-center col-span-2 col-start-5'>
					<Logo />
				</div>

				<HeaderActions />
			</div>
		</header>
	);
};

export default Header;
