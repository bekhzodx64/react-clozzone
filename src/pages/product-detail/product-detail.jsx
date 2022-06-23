import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_KEY } from '../../config';

const ProductDetail = () => {
	const { id } = useParams();
	const [item, setItem] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`https://fortniteapi.io/v2/items/get?id=${id}&lang=en`, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setItem(data.item);
				setLoading(false);
			});
	}, []);

	console.log(item);

	return (
		<div className='pt-[150px] pb-[50px] container'>
			{!loading && (
				<div>
					<div className='w-96 h-96'>
						<img src={item.images.background} alt={item.name} />
					</div>
					<h2>{item.name}</h2>
					<p>Description: {item.description}</p>
					<p>Interest: {item.interest}</p>
					<p>Release: {item.releaseDate}</p>
					<p>Price: ${item.price}</p>
					<p>Rarity: {item.rarity.name}</p>
					<p>Type: {item.type.name}</p>
				</div>
			)}
		</div>
	);
};

export default ProductDetail;
