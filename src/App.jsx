import { useEffect, useRef, useState } from 'react';
import './App.css';
import Compteur from './components/Compteur';
import Movie from './components/Movie';

function App() {
	// partie logique du composant

	const [name, setName] = useState('');
	const [todos, setTodos] = useState([]);
	const inputRef = useRef(null);

	console.log("Je suis APP et je m'éxécute a nouveau");

	const movies = ['Terminator', 'Matrix', 'Star Wars', 'Inception'];

	const htmlMovies = movies.map((movie) => {
		return <Movie key={movie} movie={movie} />;
	});

	const handleChangeName = () => {
		console.log(inputRef.current);
		setName(inputRef.current.value);
	};

	useEffect(() => {
		console.log('Mon composant APP est monté');

		const getData = async () => {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/todos'
			);

			const data = await response.json();
			setTodos(data);
		};

		getData();
		return () => {
			console.log('Mon composant APP est démonté');
		};
	}, []);

	// partie graphique du composant -> JSX, des tags, des variables JS, des conditions, des boucles
	return (
		<>
			{todos.map((todo) => {
				return (
					<p key={todo.id}>
						{todo.userId}, {todo.id}, {todo.title}
					</p>
				);
			})}
			<h1>Films</h1>
			<ul>{htmlMovies}</ul>
			<Compteur />
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

			<footer>Ceci est mon footer</footer>
		</>
	);
}

export default App;
