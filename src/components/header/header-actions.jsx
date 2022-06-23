import { BsChevronDown } from 'react-icons/bs';
import { ReactComponent as SearchIcon } from '../../assets/header/search.svg';
import { ReactComponent as CartIcon } from '../../assets/header/cart.svg';
import { ReactComponent as UserIcon } from '../../assets/header/user.svg';

const HeaderActions = () => {
	return (
		<ul className='justify-self-end col-span-4 flex space-x-5 items-center'>
			<li className='w-[22px] lg:w-auto'>
				<button type='button' className='block'>
					<SearchIcon />
				</button>
			</li>
			<li className='w-[22px] lg:w-auto'>
				<button type='button' className='block'>
					<CartIcon />
				</button>
			</li>
			<li className='w-[22px] lg:w-auto'>
				<button type='button' className='block'>
					<UserIcon />
				</button>
			</li>
			{/* <li>
				<a href='##' className='flex space-x-[3px] lg:space-x-[10px]'>
					<img src={ru} alt='ru' />
					<BsChevronDown className='text-white' />
				</a>
			</li> */}
		</ul>
	);
};

export default HeaderActions;
