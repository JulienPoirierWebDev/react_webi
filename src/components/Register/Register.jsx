import { useState, useRef } from 'react';
import InputContainer from '../InputContainer/InputContainer';

const Register = () => {
	const lastNameRef = useRef(null);
	const firstNameRef = useRef(null);
	const birthdateRef = useRef(null);
	const emailRef = useRef(null);
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [passwordsMessage, setPasswordsMessage] = useState(null);

	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');

		console.log('submit');

		/*
					if (
						lastNameRef.current.value === '' ||
						firstNameRef.current.value === '' ||
						emailRef.current.value === '' ||
						password !== confirmPassword ||
						password === '' ||
						confirmPassword === ''
					) {
						return;
					}
		*/

		console.log('test pass');

		const newUser = {
			lastname: lastNameRef.current.value,
			firstname: firstNameRef.current.value,
			birthdate: birthdateRef.current.value,
			email: emailRef.current.value,
			password: password,
		};

		const response = await fetch('http://localhost:3000/users', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();

		console.log(data);
		if (data.error) {
			setError(data.message);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<InputContainer>
					<label htmlFor='lastName'>Nom</label>
					<input
						ref={lastNameRef}
						type='text'
						id='lastName'
						name='lastName'
					/>
				</InputContainer>

				<InputContainer>
					<label htmlFor='firstName'>Prénom</label>
					<input
						ref={firstNameRef}
						type='text'
						id='firstName'
						name='firstName'
					/>
				</InputContainer>
				<InputContainer>
					<label htmlFor='birthdate'>Date de naissance</label>
					<input
						ref={birthdateRef}
						type='date'
						id='birthdate'
						name='birthdate'
					/>
				</InputContainer>
				<InputContainer>
					<label htmlFor='email'>Email</label>
					<input
						ref={emailRef}
						type='email'
						id='email'
						name='email'
					/>
				</InputContainer>
				<InputContainer>
					<label htmlFor='password'>Mot de passe</label>
					<input
						onChange={(e) => {
							const newPassword = e.target.value;
							setPasswordsMessage(null);
							if (
								newPassword !== '' &&
								confirmPassword !== '' &&
								newPassword !== confirmPassword
							) {
								setPasswordsMessage(
									'Les mots de passe ne correspondent pas'
								);
							} else if (
								newPassword !== '' &&
								confirmPassword !== ''
							) {
								setPasswordsMessage(
									'Les mots de passe correspondent :) '
								);
							}
							setPassword(newPassword);
						}}
						type='password'
						id='password'
						name='password'
					/>
				</InputContainer>

				<InputContainer>
					<label htmlFor='confirmPassword'>
						Confirmer le mot de passe
					</label>
					<input
						onChange={(e) => {
							const newConfirmPassword = e.target.value;
							setPasswordsMessage(null);
							if (
								password !== '' &&
								newConfirmPassword !== '' &&
								password !== newConfirmPassword
							) {
								setPasswordsMessage(
									'Les mots de passe ne correspondent pas'
								);
							} else if (
								password !== '' &&
								newConfirmPassword !== ''
							) {
								setPasswordsMessage(
									'Les mots de passe correspondent :) '
								);
							}
							setConfirmPassword(confirmPassword);
						}}
						type='password'
						id='confirmPassword'
						name='confirmPassword'
					/>
				</InputContainer>

				{passwordsMessage ? <p>{passwordsMessage}</p> : null}

				{error !== '' ? <p>{error}</p> : null}

				<button type='submit'>S&apos;inscrire</button>
			</form>
		</div>
	);
};

export default Register;
