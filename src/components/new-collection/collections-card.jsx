const CollectionsCard = () => {
	return (
		<a href='##' className='group relative inline-block h-20 w-[200px]'>
			{/* <img src={imageUrl} alt={name} className='h-full w-full object-cover' /> */}
			<span className='absolute inset-0 bg-gradient-to-r from-black/70 to-black/70 transition-all group-hover:to-black/40'></span>
			<span className='absolute top-1/2 left-[10px] -translate-y-1/2 text-lg text-[#979797] transition-all group-hover:text-white'>
				test
				{/* {name} */}
			</span>
		</a>
	);
};

export default CollectionsCard;
