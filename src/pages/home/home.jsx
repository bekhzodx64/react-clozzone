import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { API_KEY } from '../../config';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Home = () => {
	const navigate = useNavigate();
	const [goods, setGoods] = useState([]);
	const [brands, setBrands] = useState([]);
	const [loading, setLoading] = useState([true]);

	useEffect(() => {
		fetch('https://fortniteapi.io/v2/shop?lang=en', {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((res) => res.json())
			.then((data) => setGoods(data.shop));

		fetch('https://fortniteapi.io/v1/news?lang=en&type=br', {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setBrands(data.news);
				setLoading(false);
			});
	}, []);

	return (
		<div className='pt-[100px] pb-[50px] space-y-20'>
			<div className='grid grid-cols-4 gap-5 container'>
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
								<div className='p-3 space-y-1'>
									<h2 className='font-bold capitalize'>
										{good.displayName.toLowerCase()}
									</h2>
									<p className='line-clamp-1'>{good.displayDescription}</p>
									<p>${good.price.finalPrice}</p>
									<div className='flex justify-center'>
										<button
											type='button'
											onClick={onNavigateHandler}
											className='w-48 py-2 border rounded-full'>
											View
										</button>
									</div>
								</div>
							</div>
						);
					})}
			</div>

			<Swiper
				slidesPerView={7}
				loop='true'
				className='container'
				spaceBetween={20}>
				{!loading &&
					brands
						.filter((_, idx) => idx < 14)
						.map((brand) => (
							<SwiperSlide key={brand.id}>
								<div className='space-y-3'>
									<div className='w-28 h-28 rounded-full border border-[#ccc] overflow-hidden mx-auto'>
										<img
											src={brand.image}
											alt={brand.title}
											className='w-full h-full object-cover'
										/>
									</div>
									<h2 className='text-center line-clamp-1'>
										{brand.title || <Skeleton />}
									</h2>
								</div>
							</SwiperSlide>
						))}
			</Swiper>
		</div>
	);
};

export default Home;
