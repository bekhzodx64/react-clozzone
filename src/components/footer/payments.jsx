import click from '../../assets/footer/click.png';
import humo from '../../assets/footer/humo.png';
import payme from '../../assets/footer/payme.png';
import uzcard from '../../assets/footer/uzcard.png';

const Payments = () => {
	return (
		<div className='grid grid-cols-2 gap-5 sm:grid-cols-3 md:flex md:gap-0 md:space-x-[10px] select-none pointer-events-none'>
			<img src={payme} alt='payme' />
			<img src={uzcard} alt='uzcard' />
			<img src={click} alt='click' />
			<img src={humo} alt='humo' />
		</div>
	);
};

export default Payments;
