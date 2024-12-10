import styles from './Register.module.css';

const Register = () => {
	return (
		<div>
			<form>
				<div className={styles.inputContainer}>
					<label htmlFor='lastName'>Nom</label>
					<input type='text' id='lastName' name='lastName' />
				</div>

				<div className={styles.inputContainer}>
					<label htmlFor='firstName'>Prénom</label>
					<input type='text' id='firstName' name='firstName' />
				</div>

				<div className={styles.inputContainer}>
					<label htmlFor='birthdate'>Date de naissance</label>
					<input type='date' id='birthdate' name='birthdate' />
				</div>

				<div className={styles.inputContainer}>
					<label htmlFor='email'>Email</label>
					<input type='email' id='email' name='email' />
				</div>

				<div className={styles.inputContainer}>
					<label htmlFor='password'>Mot de passe</label>
					<input type='password' id='password' name='password' />
				</div>

				<div className={styles.inputContainer}>
					<label htmlFor='confirmPassword'>
						Confirmer le mot de passe
					</label>
					<input
						type='password'
						id='confirmPassword'
						name='confirmPassword'
					/>
				</div>

				<button type='submit'>S&apos;inscrire</button>
			</form>
		</div>
	);
};

export default Register;
