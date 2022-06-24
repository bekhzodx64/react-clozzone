import { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { API_KEY } from '../../config';
import BrandsItem from './brands-item';

SwiperCore.use([Autoplay, Navigation]);

const BrandsSlider = () => {
	const [brands, setBrands] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchBrands();
	}, []);

	const fetchBrands = async () => {
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
	};

	return (
		<div className='section space-y-10'>
			<h2 className='section-title'>бренды</h2>

			{loading ? (
				<div className='flex justify-center h-[150px] items-center'>
					<AiOutlineLoading3Quarters className='animate-spin text-3xl text-accent' />
				</div>
			) : (
				<div className='relative'>
					<Swiper
						className='relative'
						navigation={{
							prevEl: '.brandsPrev',
							nextEl: '.brandsNext',
						}}
						slidesPerView={2}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						loop='true'
						breakpoints={{
							640: {
								slidesPerView: 4,
							},
							1024: {
								slidesPerView: 6,
							},
							1210: {
								slidesPerView: 7,
							},
						}}>
						{brands
							.filter((_, idx) => idx < 14)
							.map((brand) => (
								<SwiperSlide key={brand.id}>
									<BrandsItem image={brand.image} title={brand.title} />
								</SwiperSlide>
							))}
					</Swiper>
					<BsChevronLeft className='brandsPrev' />
					<BsChevronRight className='brandsNext' />
				</div>
			)}
		</div>
	);
};

export default BrandsSlider;
