import { useRef, useState } from 'react';
import './App.css';
import Compteur from './components/Compteur';
import MoviesContainer from './components/MoviesContainer';

function App() {
	// partie logique du composant

	const [name, setName] = useState('');
	const inputRef = useRef(null);

	console.log("Je suis APP et je m'éxécute a nouveau");

	const handleChangeName = () => {
		console.log(inputRef.current);
		setName(inputRef.current.value);
	};

	// partie graphique du composant -> JSX, des tags, des variables JS, des conditions, des boucles
	return (
		<>
			<h1>Films</h1>
			<MoviesContainer />

			<Compteur />

			<div className='card'>
				<h2>Mon profil</h2>
				<label htmlFor='name'>Votre nom</label>
				<input ref={inputRef} type='text' name='name' id='name' />

				<button onClick={handleChangeName}>Mettre a jour</button>

				{
					// Votre nom est XXXXX
					// x-----
					// -x----
					// --x---
				}
				<p>{name}</p>
			</div>

			<footer>Ceci est mon footer</footer>
		</>
	);
}

export default App;
