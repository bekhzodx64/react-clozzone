import { Fragment } from 'react';
import { AiFillDelete } from 'react-icons/ai';

const CartItem = () => {
	return (
		<div className='grid grid-cols-3 px-[30px] relative'>
			<div className='flex justify-center items-center'>
				<div className='flex items-center gap-x-1'>
					<div className='w-[120px] h-[80px] flex-grow'>
						<img
							src='./img/products/tshirts/1.png'
							alt='product'
							className='w-full h-full object-scale-down'
						/>
					</div>
					<div className='text-sm space-y-[10px]'>
						<h3 className='uppercase font-bold line-clamp-1'>zara рубашка</h3>
						<p title='Рубашка с контрастным дизайном' className='line-clamp-2'>
							Рубашка с контрастным дизайном
						</p>
					</div>
				</div>
			</div>
			<div className='flex justify-center items-center'>
				<div className='flex justify-between max-w-[150px] w-full h-10'>
					<button
						type='button'
						className='h-full bg-[#EDE9E9] w-[35px] font-semibold text-2xl'>
						-
					</button>
					<div className='flex-grow h-full border-y border-[#C4C4C4] flex justify-center items-center space-x-1 text-lg'>
						<span className='font-bold'>2</span>
						<span>шт</span>
					</div>
					<button
						type='button'
						className='h-full bg-accent text-white w-[35px] font-semibold text-2xl'>
						+
					</button>
				</div>
			</div>
			<div className='flex justify-center items-center'>
				<div className='text-xl font-bold'>
					<span>100 000</span>
					<span> руб.</span>
				</div>
			</div>

			<AiFillDelete className='text-2xl text-red-600 absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer' />
		</div>
	);
};

export default CartItem;
