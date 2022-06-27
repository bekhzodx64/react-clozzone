import { IoIosCloseCircleOutline } from 'react-icons/io';
import CartItem from './cart-item';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';

const Cart = ({ showCartHandler }) => {
	const { cartItems, addItemToCart, removeItemToCart, clearItemFromCart } =
		useContext(CartContext);

	console.log(cartItems);

	return (
		<div className='fixed inset-0 bg-black/40 z-10 flex flex-col px-2'>
			<div className='bg-white py-[30px] max-w-4xl w-full m-auto overflow-hidden'>
				<div className='space-y-5 overflow-x-auto'>
					<div className='relative'>
						<h3 className='font-medium text-2xl uppercase text-center'>
							товары добавленные в корзину
						</h3>
						<IoIosCloseCircleOutline
							className='text-4xl absolute right-5 top-0 cursor-pointer'
							onClick={showCartHandler}
						/>
					</div>

					<div className='space-y-5'>
						<div className='grid grid-cols-3 border place-items-center bg-[#E5E5E5] px-[30px] py-4 text-[#666666]'>
							<h3>Наименование</h3>
							<h3>Количество</h3>
							<h3>Цена</h3>
						</div>

						{cartItems.map((item) => (
							<CartItem
								key={item.mainId}
								cartItem={item}
								addItemToCart={addItemToCart}
								removeItemToCart={removeItemToCart}
								clearItemFromCart={clearItemFromCart}
							/>
						))}

						<div className='flex justify-between max-w-xl px-[30px] mx-auto'>
							<button
								type='button'
								className='py-3 uppercase bg-accent text-white max-w-[215px] w-full'>
								оформить заказ
							</button>
							<button
								type='button'
								className='py-3 uppercase bg-black text-white max-w-[215px] w-full'>
								очистить
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
