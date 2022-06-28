import { useEffect, useState } from 'react';
import Loader from '../../components/templates/loader';
import ProductCard from '../../components/templates/product-card';
import { API_KEY } from '../../config';
import Pagination from '../../components/pagination/pagination';

const AllProducts = () => {
	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [goodsPerPage] = useState(9);

	const lastGoodsIndex = currentPage * goodsPerPage;
	const firstGoodsIndex = lastGoodsIndex - goodsPerPage;
	const currentGoods = goods.slice(firstGoodsIndex, lastGoodsIndex);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const prevPage = () => setCurrentPage((prev) => prev - 1);
	const nextPage = () => setCurrentPage((prev) => prev + 1);

	useEffect(() => {
		fetch('https://fortniteapi.io/v2/shop?lang=ru', {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setGoods(data.shop);
				setLoading(false);
			});
	}, []);

	return (
		<div className='container section space-y-5 lg:space-y-10 pt-28'>
			<div className='flex justify-between items-center lg:justify-center'>
				<div className='lg:hidden'>
					<button
						type='button'
						className='border border-[#565656] space-x-1 flex items-center px-3 py-[6px]'>
						<img src='./img/filter.svg' alt='Filter' />
						<span>Фильтр</span>
					</button>
				</div>
			</div>

			<div className='lg:flex gap-x-[30px]'>
				<div className='lg:w-[265px] w-full lg:static fixed right-0 bottom-0 top-0 overflow-y-auto z-10 bg-black/40 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none xl:sticky'>
					<form className='lg:w-full ml-auto lg:m-0 space-y-5 px-3 py-10 lg:p-0 w-[265px] bg-white lg:bg-none'>
						<div>
							<input
								type='search'
								className='bg-[#EBEBEB] outline-none placeholder:italic text-xs w-full px-4 py-[18px]'
								placeholder='Поиск...'
							/>
							<button className='hidden'>
								<img src='./img/searchFilter.svg' alt='search' />
							</button>
						</div>

						<div>
							<select className='w-full outline-none bg-[#EBEBEB] px-4 py-[18px] text-sm appearance-none'>
								<option defaultValue>Сортировка по</option>
								<option>Сортировка по</option>
								<option>Сортировка по</option>
								<option>Сортировка по</option>
							</select>
						</div>

						<div className='w-full bg-[#EBEBEB] py-5 px-5 divide-y divide-[#DAD3D3]'>
							<details className='open:text-support group py-2'>
								<summary className='text-sm select-none cursor-pointer flex justify-between'>
									Для мужчин
									<img
										src='./img/burgerChevronDown.svg'
										alt='chevron'
										className='-rotate-90 group-open:rotate-0'
									/>
								</summary>
								<div className='mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400'>
									<ul className='space-y-[10px] pl-5 text-sm font-light text-black'>
										<li>
											<a
												href='##'
												className='hover:text-support transition-all'>
												- Рубашки
											</a>
										</li>
										<li>
											<a
												href='##'
												className='hover:text-support transition-all'>
												- Свитшоты
											</a>
										</li>
										<li>
											<a
												href='##'
												className='hover:text-support transition-all'>
												- Джинсы
											</a>
										</li>
									</ul>
								</div>
							</details>
							<details className='open:text-support group py-2'>
								<summary className='text-sm select-none cursor-pointer flex justify-between'>
									Для женщин{' '}
									<img
										src='./img/burgerChevronDown.svg'
										alt='chevron'
										className='-rotate-90 group-open:rotate-0'
									/>
								</summary>
								<div className='mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400'>
									<ul className='space-y-[10px] pl-5 text-sm font-light text-black'>
										<li>
											<a
												href='##'
												className='hover:text-support transition-all'>
												- Платья
											</a>
										</li>
										<li>
											<a
												href='##'
												className='hover:text-support transition-all'>
												- Свитшоты
											</a>
										</li>
										<li>
											<a
												href='##'
												className='hover:text-support transition-all'>
												- Джинсы
											</a>
										</li>
									</ul>
								</div>
							</details>
							<details className='open:text-support group py-2'>
								<summary className='text-sm select-none cursor-pointer flex justify-between'>
									Для детей{' '}
									<img
										src='./img/burgerChevronDown.svg'
										alt='chevron'
										className='-rotate-90 group-open:rotate-0'
									/>
								</summary>
								<div className='mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400'>
									<ul className='space-y-[10px] pl-5 text-sm font-light text-black'>
										<li>
											<a
												href='##'
												className='hover:text-support transition-all'>
												- Платья
											</a>
										</li>
										<li>
											<a
												href='##'
												className='hover:text-support transition-all'>
												- Свитшоты
											</a>
										</li>
										<li>
											<a
												href='##'
												className='hover:text-support transition-all'>
												- Джинсы
											</a>
										</li>
									</ul>
								</div>
							</details>
						</div>

						<div className='divide-y divide-[#B5B0A1]'>
							<h3 className='text-lg pb-3'>Фильтр по размерам</h3>
							<ul className='filter-checkbox pt-3 space-y-1'>
								<li>
									<input type='checkbox' id='xs' />
									<label htmlFor='xs'>xs</label>
								</li>
								<li>
									<input type='checkbox' id='s' />
									<label htmlFor='s'>s</label>
								</li>
								<li>
									<input type='checkbox' id='m' />
									<label htmlFor='m'>m</label>
								</li>
								<li>
									<input type='checkbox' id='l' />
									<label htmlFor='l'>l</label>
								</li>
								<li>
									<input type='checkbox' id='xl' />
									<label htmlFor='xl'>xl</label>
								</li>
								<li>
									<input type='checkbox' id='xxl' />
									<label htmlFor='xxl'>xxl</label>
								</li>
							</ul>
						</div>

						<div className='divide-y divide-[#B5B0A1]'>
							<h3 className='text-lg pb-3'>Диапазон цен</h3>
							<div className='pt-3 space-y-1'>
								<input
									type='range'
									className='w-full'
									min='10000'
									max='1000000'
								/>
							</div>
						</div>

						<div className='divide-y divide-[#B5B0A1]'>
							<h3 className='text-lg pb-3'>Фильтр по брендам</h3>
							<ul className='filter-checkbox pt-3 space-y-1'>
								<li>
									<input type='checkbox' id='zara' />
									<label htmlFor='zara'>zara</label>
								</li>
								<li>
									<input type='checkbox' id='legendr' />
									<label htmlFor='legendr'>legendr</label>
								</li>
								<li>
									<input type='checkbox' id='abb' />
									<label htmlFor='abb'>abb</label>
								</li>
								<li>
									<input type='checkbox' id='navigator' />
									<label htmlFor='navigator'>navigator</label>
								</li>
								<li>
									<input type='checkbox' id='zero' />
									<label htmlFor='zero'>zero</label>
								</li>
								<li>
									<input type='checkbox' id='wago' />
									<label htmlFor='wago'>wago</label>
								</li>
							</ul>
						</div>

						<div className='flex justify-between gap-x-7'>
							<button
								type='reset'
								className='btn w-full bg-support text-white border-support hover:bg-transparent hover:text-accent hover:border-accent'>
								Сбросить
							</button>
							<button
								type='button'
								className='btn w-full btn-hover hover:bg-transparent hover:text-accent'>
								Фильтр
							</button>
						</div>
					</form>
				</div>
				<div className='flex-grow'>
					{loading ? (
						<Loader />
					) : (
						<div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-[30px] place-items-center'>
							{currentGoods.map((good) => (
								<ProductCard key={good.mainId} good={good} />
							))}
						</div>
					)}
				</div>
			</div>
			<div className='flex justify-end space-x-3'>
				<button type='button' onClick={prevPage}>
					Пред стр.
				</button>
				<Pagination
					goodsPerPage={goodsPerPage}
					totalGoods={goods.length}
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
