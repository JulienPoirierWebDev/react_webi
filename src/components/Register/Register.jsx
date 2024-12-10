import InputContainer from '../InputContainer/InputContainer';
import styles from './Register.module.css';

const Register = () => {
	return (
		<div>
			<form>
				<InputContainer>
					<label htmlFor='lastName'>Nom</label>
					<input type='text' id='lastName' name='lastName' />
				</InputContainer>

				<InputContainer>
					<label htmlFor='firstName'>Prénom</label>
					<input type='text' id='firstName' name='firstName' />
				</InputContainer>
				<InputContainer>
					<label htmlFor='birthdate'>Date de naissance</label>
					<input type='date' id='birthdate' name='birthdate' />
				</InputContainer>
				<InputContainer>
					<label htmlFor='email'>Email</label>
					<input type='email' id='email' name='email' />
				</InputContainer>
				<InputContainer>
					<label htmlFor='password'>Mot de passe</label>
					<input type='password' id='password' name='password' />
				</InputContainer>

				<InputContainer>
					<label htmlFor='confirmPassword'>
						Confirmer le mot de passe
					</label>
					<input
						type='password'
						id='confirmPassword'
						name='confirmPassword'
					/>
				</InputContainer>

				<button type='submit'>S&apos;inscrire</button>
			</form>
		</div>
	);
};

export default Register;
