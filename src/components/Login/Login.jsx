import InputContainer from '../InputContainer/InputContainer';

const Login = () => {
	return (
		<div>
			<InputContainer>
				<label htmlFor='email'>Email</label>
				<input type='email' id='email' name='email' />
			</InputContainer>

			<InputContainer>
				<label htmlFor='password'>Mot de passe</label>
				<input type='password' id='password' name='password' />
			</InputContainer>
			<button type='submit'>Se connecter</button>
		</div>
	);
};

export default Login;
