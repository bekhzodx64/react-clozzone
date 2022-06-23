import { Link } from 'react-router-dom';
import { ReactComponent as ClozzoneLogo } from '../../assets/logo.svg';

const Logo = () => {
	return (
		<Link to='/'>
			<ClozzoneLogo />
		</Link>
	);
};

export default Logo;
