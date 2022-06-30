import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
import Loader from '../../components/templates/loader';
import { API_KEY } from '../../config';

const ProductDetail = () => {
	const { userId } = useParams();
	const [item, setItem] = useState([]);
	const [loading, setLoading] = useState(true);
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	useEffect(() => {
		fetch(`https://fortniteapi.io/v2/items/get?id=${userId}&lang=ru`, {
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
		<div className='pt-[150px] pb-[50px] container space-y-10'>
			{!loading ? (
				<Fragment>
					<h1 className='section-title'>{item.name}</h1>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
						<div className='flex gap-[10px] select-none flex-col-reverse lg:flex-row'>
							<Swiper
								className='h-[100px] lg:h-[430px] lg:w-[100px] w-full'
								onSwiper={setThumbsSwiper}
								slidesPerView='4'
								direction='vertical'
								slideActiveClass='swiper-slide-thumb-active'
								modules={[Thumbs]}>
								<SwiperSlide className='bg-[#F1EDED] p-[10px] flex flex-col items-center justify-center'>
									<img
										src={item.images.full_background}
										alt={item.name}
										className='object-scale-down'
									/>
								</SwiperSlide>
								<SwiperSlide className='bg-[#F1EDED] p-[10px] flex flex-col items-center justify-center'>
									<img
										src={item.images.icon}
										alt={item.name}
										className='object-scale-down'
									/>
								</SwiperSlide>
								<SwiperSlide className='bg-[#F1EDED] p-[10px] flex flex-col items-center justify-center'>
									<img
										src={item.images.background}
										alt={item.name}
										className='object-scale-down'
									/>
								</SwiperSlide>
								<SwiperSlide className='bg-[#F1EDED] p-[10px] flex flex-col items-center justify-center'>
									<img
										src={item.images.icon_background}
										alt={item.name}
										className='object-scale-down'
									/>
								</SwiperSlide>
							</Swiper>

							<Swiper
								className='bg-[#F1EDED] h-96 lg:h-[430px] w-full'
								thumbs={{ swiper: thumbsSwiper }}
								modules={[Thumbs]}>
								<SwiperSlide className='swiper-slide flex flex-col justify-center items-center'>
									<img
										src={item.images.full_background}
										alt={item.name}
										className='w-full h-full object-cover'
									/>
								</SwiperSlide>
								<SwiperSlide className='swiper-slide flex flex-col justify-center items-center'>
									<img
										src={item.images.icon}
										alt={item.name}
										className='w-full h-full object-cover'
									/>
								</SwiperSlide>
								<SwiperSlide className='swiper-slide flex flex-col justify-center items-center'>
									<img
										src={item.images.background}
										alt={item.name}
										className='w-full h-full object-cover'
									/>
								</SwiperSlide>
								<SwiperSlide className='swiper-slide flex flex-col justify-center items-center'>
									<img
										src={item.images.icon_background}
										alt={item.name}
										className='w-full h-full object-cover'
									/>
								</SwiperSlide>
							</Swiper>
						</div>

						<div className='space-y-5'>
							<div className='border-[#E5E5E5] border-b pb-[10px] space-y-2'>
								<h2 className='product-name'>{item.name}</h2>
								<div className='lg:flex flex-wrap gap-y-[5px]'>
									<div className='flex product-detail'>
										<h3>Добавлено:</h3>
										<span>{item.added.date}</span>
									</div>
									<div className='flex product-detail'>
										<h3>Популярность:</h3>
										<span>{item.interest}</span>
									</div>
									<div className='flex product-detail'>
										<h3>Редкость:</h3>
										<span className='capitalize'>
											{item.rarity.name.toLowerCase()}
										</span>
									</div>
									<div className='flex product-detail'>
										<h3>Тип:</h3>
										<span>{item.type.name}</span>
									</div>
								</div>
							</div>

							<div>
								<p className='product-description'>
									{item.description || null}
								</p>
							</div>

							<div className='xl:flex gap-x-5 items-center font-Roboto space-y-5 xl:space-y-0'>
								<div className='product-price'>
									<h3>Цена:</h3>
									<p>
										<span>{item.price}</span>
										<span>руб.</span>
									</p>
								</div>
								<div className='product-qty lg:w-full lg:max-w-xs xl:max-w-none xl:w-auto flex justify-between'>
									<p>Количество:</p>
									<div className='product-qty__button w-full max-w-[250px]'>
										<button
											type='button'
											className='bg-[#EDE9E9] font-medium text-xl'>
											-
										</button>
										<p>
											<span className='font-bold'>1</span>
											<span>шт</span>
										</p>
										<button
											type='button'
											className='bg-accent text-white font-medium text-xl'>
											+
										</button>
									</div>
								</div>
							</div>

							<div className='font-Roboto flex justify-center lg:justify-start'>
								<button
									type='button'
									className='bg-accent text-xl uppercase px-8 py-4 text-white font-medium'>
									купить
								</button>
							</div>
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
