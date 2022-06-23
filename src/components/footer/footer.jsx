import { Fragment } from 'react';
import Logo from '../templates/logo';
import ContactLinks from './contact-links';
import Payments from './payments';
import SocialLinks from './social-links';

const Footer = () => {
	return (
		<Fragment>
			<footer className='footer'>
				<div className='container'>
					<div className='grid grid-cols-2 justify-between gap-x-5 gap-y-7 border-b border-white/[16%] pb-[30px] md:grid-cols-3 md:gap-5 lg:flex lg:gap-0'>
						<div className='space-y-[15px]'>
							<Logo />
							<p className='max-w-[225px] text-xs text-[#D9DBE1] md:text-sm'>
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia consequat duis enim velit mollit.
							</p>
						</div>

						<div className='space-y-[15px] md:space-y-[30px]'>
							<h3 className='footer-title'>Связаться с нами</h3>
							<ContactLinks />
						</div>

						<div className='space-y-[15px] md:flex md:flex-col md:items-end md:space-y-[30px] lg:block'>
							<h3 className='footer-title'>Социальные сети</h3>
							<SocialLinks />
						</div>

						<div className='space-y-[15px] md:col-span-2 md:space-y-[30px]'>
							<h3 className='footer-title'>Способы оплаты</h3>
							<Payments />
						</div>
					</div>
				</div>
			</footer>

			<footer className='footer-base'>
				<div className='container'>
					<p className='font-Poppins text-[8px] text-[#D9DBE1] md:text-sm'>
						© “Uzecom” Created by UMDSOFT development.2021
					</p>
				</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
