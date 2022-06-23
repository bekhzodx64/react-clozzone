import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../../config';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const [goods, setGoods] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((res) => res.json())
			.then((data) => setGoods(data.shop));
	}, []);

	// console.log(goods);

	return (
		<div className='grid grid-cols-4 gap-5 container pt-[150px] pb-[50px]'>
			{goods
				.filter((_, idx) => idx < 4)
				.map((good) => {
					const onNavigateHandler = () => {
						navigate(`/${good.mainId}`);
					};
					return (
						<div key={good.mainId} className='border overflow-hidden'>
							<Swiper
								pagination={true}
								modules={[Pagination]}
								className='mySwiper bg-gray-100'>
								{good.granted.map((grant, index) => {
									return (
										<SwiperSlide key={`${grant.id}${index}`}>
											<img src={grant.images.icon} alt={good.displayName} />
										</SwiperSlide>
									);
								})}
							</Swiper>
							<h2 className='font-bold capitalize' onClick={onNavigateHandler}>
								{good.displayName.toLowerCase()}
							</h2>
							<p className='line-clamp-1'>{good.displayDescription}</p>
							<p>${good.price.finalPrice}</p>
						</div>
					);
				})}
		</div>
	);
};

export default Home;
