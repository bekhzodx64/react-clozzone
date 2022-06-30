import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../../assets/header/cart.svg';
import { ReactComponent as SearchIcon } from '../../assets/header/search.svg';
import { ReactComponent as UserIcon } from '../../assets/header/user.svg';
import { getItems } from '../../features/item/itemSlice';

const HeaderActions = ({ showCartHandler }) => {
	const [showSearchInput, setShowSearchInput] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const products = useSelector((state) => state.item.items);

	function showSearchResult() {
		return products.filter((product) => {
			return product.displayName.toLowerCase().includes(searchValue);
		});
	}

	const filteredProducts = showSearchResult();

	useEffect(() => {
		dispatch(getItems());
	}, []);

	const showSearchInputHandler = (e) => {
		setShowSearchInput(!showSearchInput);
	};

	const onInputChange = (e) => {
		const inputFieldString = e.target.value.toLowerCase();
		setSearchValue(inputFieldString);
	};

	return (
		<ul className='justify-self-end col-span-4 flex space-x-5 items-center'>
			{showSearchInput && (
				<li className='relative'>
					<input
						type='search'
						className='outline-none rounded-md py-2 px-2 placeholder:italic'
						placeholder='Поиск...'
						onChange={onInputChange}
					/>
					<div className='absolute top-full w-96 pt-[30px]'>
						{searchValue ? (
							<div className='bg-white overflow-y-auto max-h-[300px] shadow-sm border rounded-md p-2 space-y-2'>
								{filteredProducts.map((product) => {
									const onNavigateHandler = () => {
										navigate(`/${product.mainId}`);
										setShowSearchInput(false);
										setSearchValue('');
									};
									return (
										<div
											key={product.mainId}
											className='flex items-center cursor-pointer hover:bg-gray-50 space-x-2 rounded-md shadow overflow-hidden pr-2'
											onClick={onNavigateHandler}>
											{product.granted
												.filter((_, idx) => idx < 1)
												.map((image) => {
													return (
														<div key={image.id} className='w-12 h-12'>
															<img
																src={image.images.icon_background}
																alt={product.displayName}
																className='w-full h-full object-scale-down'
															/>
														</div>
													);
												})}

											<h2 className='capitalize text-sm shrink line-clamp-1'>
												{product.displayName.toLowerCase()}
											</h2>
										</div>
									);
								})}
							</div>
						) : null}
					</div>
				</li>
			)}
			<li className='w-[22px] lg:w-auto'>
				<button
					type='button'
					className='block'
					onClick={showSearchInputHandler}>
					<SearchIcon />
				</button>
			</li>
			<li className='w-[22px] lg:w-auto'>
				<button type='button' className='block' onClick={showCartHandler}>
					<CartIcon />
				</button>
			</li>
			<li className='w-[22px] lg:w-auto'>
				<button type='button' className='block'>
					<UserIcon />
				</button>
			</li>
		</ul>
	);
};

export default HeaderActions;
