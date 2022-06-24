const BrandsItem = ({ image, title }) => {
	return (
		<div className='flex flex-col items-center justify-center space-y-[5px] md:space-y-[10px]'>
			<div className='w-28 h-28 rounded-full border border-[#ccc] overflow-hidden mx-auto'>
				<img src={image} alt={title} className='w-full h-full object-cover' />
			</div>
			<span className='text-lg md:text-[22px] line-clamp-1 text-center'>
				{title}
			</span>
		</div>
	);
};

export default BrandsItem;
