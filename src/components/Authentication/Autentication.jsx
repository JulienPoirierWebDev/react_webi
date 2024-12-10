import Login from '../Login/Login';
import Register from '../Register/Register';

import style from './Authentication.module.css';

const Authentication = () => {
	return (
		<div className={style.container}>
			<Register />
			<Login />
		</div>
	);
};

export default Authentication;
