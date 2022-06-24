import { useEffect, useState } from 'react';
import { API_KEY } from '../../config';
import ProductCard from '../templates/product-card';

const NewCollection = () => {
	const [goods, setGoods] = useState([]);

	useEffect(() => {
		fetch('https://fortniteapi.io/v2/shop?lang=ru', {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((res) => res.json())
			.then((data) => setGoods(data.shop));
	}, []);

	return (
		<section className='section container space-y-10'>
			<h2 className='section-title'>новая коллекция</h2>

			<div className='flex flex-wrap justify-center gap-5 md:justify-start md:gap-10 lg:justify-center'>
				{/* <CollectionsCard name='Общее' imageUrl={common} />
				<CollectionsCard name='Для женщин' imageUrl={woman} />
				<CollectionsCard name='Для мужчин' imageUrl={man} />
				<CollectionsCard name='Для детей' imageUrl={children} /> */}
			</div>

			<div className='grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5'>
				{goods
					.filter((_, idx) => idx < 4)
					.map((good) => {
						return <ProductCard good={good} key={good.mainId} />;
					})}
			</div>
		</section>
	);
};

export default NewCollection;
