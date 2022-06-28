import { Link } from 'react-router-dom';

const HeaderLinks = () => {
	return (
		<ul className='flex space-x-3 text-sm uppercase text-white xl:space-x-5 xl:text-base col-span-4'>
			<li>
				<Link to='/all-products'>Все Товары</Link>
			</li>
			{/* <li className='group relative flex items-center'>
				<a href='##'>для мужчин</a>
				<BsChevronDown className='transition-all group-hover:rotate-180 ml-2' />
				<div className='absolute top-full hidden group-hover:block lg:pt-[40px] xl:pt-[38px]'>
					<ul className='w-[200px] divide-y bg-white py-5 px-6 text-[#666666]'>
						<li>
							<a
								href='##'
								className='inline-block w-full py-[10px] px-2 transition-all hover:bg-[#E9E4E4]'>
								рубашки
							</a>
						</li>
						<li>
							<a
								href='##'
								className='inline-block w-full py-[10px] px-2 transition-all hover:bg-[#E9E4E4]'>
								свитшоты
							</a>
						</li>
						<li>
							<a
								href='##'
								className='inline-block w-full py-[10px] px-2 transition-all hover:bg-[#E9E4E4]'>
								джинсы
							</a>
						</li>
					</ul>
				</div>
			</li>
			<li className='group relative flex items-center'>
				<a href='##'>для женщин</a>
				<BsChevronDown className='transition-all group-hover:rotate-180 ml-2' />
				<div className='absolute top-full hidden group-hover:block lg:pt-[40px] xl:pt-[38px]'>
					<ul className='w-[200px] divide-y bg-white py-5 px-6 text-[#666666]'>
						<li>
							<a
								href='##'
								className='inline-block w-full py-[10px] px-2 transition-all hover:bg-[#E9E4E4]'>
								платья
							</a>
						</li>
						<li>
							<a
								href='##'
								className='inline-block w-full py-[10px] px-2 transition-all hover:bg-[#E9E4E4]'>
								свитшоты
							</a>
						</li>
						<li>
							<a
								href='##'
								className='inline-block w-full py-[10px] px-2 transition-all hover:bg-[#E9E4E4]'>
								джинсы
							</a>
						</li>
					</ul>
				</div>
			</li> */}
		</ul>
	);
};

export default HeaderLinks;
