import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'swiper/css';
import Loader from '../../components/templates/loader';
import { API_KEY } from '../../config';

const ProductDetail = () => {
	const { userId } = useParams();
	const [item, setItem] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`https://fortniteapi.io/v2/items/get?id=${userId}&lang=en`, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setItem(data.item);
				setLoading(false);
			});
	}, [userId]);

	return (
		<div className='pt-[150px] pb-[50px] container'>
			{!loading ? (
				<Fragment>
					<h1 className='section-title'>{item.name}</h1>
					<div className='flex'>
						<div className='w-96 h-96'>
							<img src={item.images.background} alt={item.name} />
						</div>
						<div>
							<h2>{item.name}</h2>
							<p>Description: {item.description || 'No description'}</p>
							<p>Interest: {item.interest}</p>
							<p>Release: {item.releaseDate}</p>
							<p>Price: ${item.price}</p>
							<p>Rarity: {item.rarity.name}</p>
							<p>Type: {item.type.name}</p>
						</div>
					</div>
				</Fragment>
			) : (
				<Loader />
			)}
		</div>
	);
};

export default ProductDetail;
