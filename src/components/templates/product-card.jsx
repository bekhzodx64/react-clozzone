import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import RarityBadge from '../templates/rarity-badge';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';

SwiperCore.use([Navigation]);

const ProductCard = ({ item }) => {
	const navigate = useNavigate();
	const { displayName, displayType, mainId } = item;
	const { finalPrice } = item.price;
	const { id } = item.rarity;

	// const { addItemToCart } = useContext(CartContext);

	// const addProductToCart = () => addItemToCart(good);

	const onNavigateHandler = () => {
		navigate(`/${mainId}`);
	};

	return (
		<div className='flex w-[250px] flex-col md:w-[320px] lg:w-full xl:w-[280px] relative overflow-hidden shadow-sm'>
			<div className='h-full grow bg-[#EBEBEB]'>
				<Swiper
					className='relative h-full select-none'
					navigation={{
						prevEl: '.productPrev',
						nextEl: '.productNext',
					}}>
					{item.granted.map((grant, index) => (
						<SwiperSlide
							key={`${grant.id}${index}`}
							className='flex h-full w-full items-center justify-center'>
							<div className='flex h-full flex-col items-center justify-center'>
								<img
									src={grant.images.icon}
									alt={displayName}
									className='h-full w-full object-cover'
								/>
							</div>
						</SwiperSlide>
					))}
					{item.granted.length > 1 ? (
						<div className='absolute top-[10px] left-[10px] z-10 flex space-x-[5px] text-xl text-white'>
							<div className='productPrev'>
								<BsChevronLeft />
							</div>
							<div className='productNext'>
								<BsChevronRight />
							</div>
						</div>
					) : null}
				</Swiper>
			</div>
			<div className='p-[10px]'>
				<div className='mb-[10px] space-y-[5px]'>
					<h3
						className='text-sm font-semibold uppercase line-clamp-1 leading-none lg:text-lg cursor-pointer hover:underline decoration-accent decoration-2 text-accent'
						title={displayName}
						onClick={onNavigateHandler}>
						{displayName}
					</h3>
					<p
						className='text-[9px] text-[#666666] line-clamp-1 lg:text-sm'
						title=''>
						{displayType}
					</p>
					<p className='text-xs font-medium lg:text-base line-clamp-1'>
						{finalPrice}
						<span> руб.</span>
					</p>
				</div>
				<button
					type='button'
					// onClick={addProductToCart}
					className='btn hover:btn-hover'>
					Добавить в корзину
				</button>
			</div>
			<RarityBadge type={id} badgeType={id} />
		</div>
	);
};

export default ProductCard;
