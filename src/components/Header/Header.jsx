import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/recherche'>Rechercher des films</Link>

				<Link to='/authentication'>Se connecter</Link>
			</nav>
		</header>
	);
};

export default Header;
