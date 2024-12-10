import { useContext, useRef } from 'react';
import InputContainer from '../InputContainer/InputContainer';
import { UserContext } from '../../main';

const Login = () => {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const actualUserContext = useContext(UserContext);

	console.log(actualUserContext.token);

	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault();
				if (
					emailRef.current.value === '' ||
					passwordRef.current.value === ''
				) {
					return;
				}

				const response = await fetch(
					'http://localhost:3000/security/authentication',
					{
						method: 'POST',
						body: JSON.stringify({
							email: emailRef.current.value,
							password: passwordRef.current.value,
						}),
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);

				const data = await response.json();
				console.log(data);

				actualUserContext.setToken(data.token);
			}}
		>
			<InputContainer>
				<label htmlFor='email'>Email</label>
				<input ref={emailRef} type='email' id='email' name='email' />
			</InputContainer>

			<InputContainer>
				<label htmlFor='password'>Mot de passe</label>
				<input
					ref={passwordRef}
					type='password'
					id='password'
					name='password'
				/>
			</InputContainer>
			<button type='submit'>Se connecter</button>
		</form>
	);
};

export default Login;
