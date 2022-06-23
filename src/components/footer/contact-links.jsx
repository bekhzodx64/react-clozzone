import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';

const ContactLinks = () => {
	return (
		<ul className='max-w-[235px] space-y-[10px] text-[10px] text-[#D9DBE1] md:text-sm'>
			<li className='flex'>
				<div>
					<MdEmail className='mr-2 h-4 w-4' />
				</div>
				<a href='mailto:info@uzecom.com'>info@uzecom.com</a>
			</li>
			<li className='flex'>
				<div>
					<FaPhoneAlt className='mr-2 h-4 w-4' />
				</div>
				<a href='tel:+998901234567'>+99890 123 45 67</a>
			</li>
			<li className='flex'>
				<div>
					<ImLocation2 className='mr-2 h-4 w-4' />
				</div>
				<a href='##'>
					Tashkent city, Almazar district, Sebzor Ts 17/18 dacha, 194 house
				</a>
			</li>
		</ul>
	);
};

export default ContactLinks;
