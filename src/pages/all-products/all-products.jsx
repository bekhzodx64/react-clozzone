import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../components/pagination/pagination';
import ProductCard from '../../components/templates/product-card';
import { getItems } from '../../features/item/itemSlice';

const AllProducts = () => {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.item.items);

	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(12);

	const lastItemsIndex = currentPage * itemsPerPage;
	const firstItemsIndex = lastItemsIndex - itemsPerPage;
	const currentItems = items.slice(firstItemsIndex, lastItemsIndex);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};
	const prevPage = () => setCurrentPage((prev) => prev - 1);
	const nextPage = () => setCurrentPage((prev) => prev + 1);

	useEffect(() => {
		dispatch(getItems());
	}, [dispatch]);

	return (
		<div className='container section space-y-5 lg:space-y-10 pt-28'>
			<div>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-[30px] place-items-center'>
					{currentItems.map((item) => (
						<ProductCard key={item.mainId} item={item} />
					))}
				</div>
			</div>
			<div className='flex justify-center space-x-3'>
				<button type='button' onClick={prevPage}>
					Пред стр.
				</button>
				<Pagination
					itemsPerPage={itemsPerPage}
					totalItems={items.length}
					paginate={paginate}
				/>
				<button type='button' onClick={nextPage}>
					След стр.
				</button>
			</div>
		</div>
	);
};

export default AllProducts;
