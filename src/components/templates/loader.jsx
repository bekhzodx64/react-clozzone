import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loader = () => {
	return (
		<div className='flex justify-center h-[150px] items-center'>
			<AiOutlineLoading3Quarters className='animate-spin text-3xl text-accent' />
		</div>
	);
};

export default Loader;
