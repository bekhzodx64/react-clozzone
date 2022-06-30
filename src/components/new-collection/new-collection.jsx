import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../features/item/itemSlice';
import ProductCard from '../templates/product-card';

const NewCollection = () => {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.item.items);

	useEffect(() => {
		dispatch(getItems());
	}, []);

	return (
		<section className='section container space-y-10'>
			<h2 className='section-title'>новые товары</h2>

			<div className='grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5'>
				{items
					.filter((_, idx) => idx < 4)
					.map((item) => {
						return <ProductCard item={item} key={item.mainId} />;
					})}
			</div>
		</section>
	);
};

export default NewCollection;
