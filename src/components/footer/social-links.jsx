import { ReactComponent as FacebookIcon } from '../../assets/footer/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/footer/instagram.svg';
import { ReactComponent as TelegramIcon } from '../../assets/footer/telegram.svg';

const SocialLinks = () => {
	return (
		<ul className='flex space-x-[24px]'>
			<li>
				<a href='##'>
					<InstagramIcon />
				</a>
			</li>
			<li>
				<a href='##'>
					<TelegramIcon />
				</a>
			</li>
			<li>
				<a href='##'>
					<FacebookIcon />
				</a>
			</li>
		</ul>
	);
};

export default SocialLinks;
