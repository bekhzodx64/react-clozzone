const Pagination = ({ goodsPerPage, totalGoods, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalGoods / goodsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<ul className='flex space-x-2'>
			{pageNumbers.map((number) => (
				<li key={number} className='w-7 h-7 flex justify-center items-center rounded-full border shadow-sm'>
					<p
						className='cursor-pointer w-full h-full flex justify-center items-center'
						onClick={() => paginate(number)}>
						{number}
					</p>
				</li>
			))}
		</ul>
	);
};

export default Pagination;
