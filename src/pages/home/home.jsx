import BrandsSlider from '../../components/brands-slider/brands-slider';
import NewCollection from '../../components/new-collection/new-collection';

const Home = () => {
	return (
		<div className='pt-[100px] pb-[50px] space-y-20 container'>
			<BrandsSlider />
			<NewCollection />
		</div>
	);
};

export default Home;
