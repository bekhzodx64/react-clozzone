import { AiFillDelete } from 'react-icons/ai';

const CartItem = ({
	cartItem,
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart,
}) => {
	const { displayName, displayDescription, quantity } = cartItem;
	const { finalPrice } = cartItem.price;
	const { url } = cartItem.displayAssets[0];

	const incrementCartItem = () => {
		addItemToCart(cartItem);
	};

	const decrementCartItem = () => {
		removeItemFromCart(cartItem);
	};

	const deleteItemFromCart = () => {
		clearItemFromCart(cartItem);
	};

	return (
		<div className='grid grid-cols-3 px-[30px] relative'>
			<div className='flex justify-center items-center'>
				<div className='flex items-center gap-x-1'>
					<div className='w-[120px] h-[80px] flex-grow'>
						<img
							src={url}
							alt='product'
							className='w-full h-full object-scale-down'
						/>
					</div>
					<div className='text-sm space-y-[10px] w-full'>
						<h3 className='uppercase font-bold line-clamp-1'>{displayName}</h3>
						<p title='Рубашка с контрастным дизайном' className='line-clamp-2'>
							{displayDescription}
						</p>
					</div>
				</div>
			</div>
			<div className='flex justify-center items-center'>
				<div className='flex justify-between max-w-[150px] w-full h-10'>
					<button
						type='button'
						className='h-full bg-[#EDE9E9] w-[35px] font-semibold text-2xl'
						onClick={decrementCartItem}>
						-
					</button>
					<div className='flex-grow h-full border-y border-[#C4C4C4] flex justify-center items-center space-x-1 text-lg'>
						<span className='font-bold'>{quantity}</span>
						<span>шт</span>
					</div>
					<button
						type='button'
						className='h-full bg-accent text-white w-[35px] font-semibold text-2xl'
						onClick={incrementCartItem}>
						+
					</button>
				</div>
			</div>
			<div className='flex justify-center items-center'>
				<div className='text-xl font-bold'>
					<span>{finalPrice}</span>
					<span> руб.</span>
				</div>
			</div>

			<AiFillDelete
				className='text-2xl text-red-600 absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer'
				onClick={deleteItemFromCart}
			/>
		</div>
	);
};

export default CartItem;
