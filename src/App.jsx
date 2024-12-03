import './App.css';
import Compteur from './components/Compteur';
import Movie from './components/Movie';

function App() {
	// partie logique du composant

	console.log("Je suis APP et je m'éxécute a nouveau");

	const movies = ['Terminator', 'Matrix', 'Star Wars', 'Inception'];

	const htmlMovies = movies.map((movie) => {
		return <Movie key={movie} movie={movie} />;
	});

	// partie graphique du composant -> JSX, des tags, des variables JS, des conditions, des boucles
	return (
		<>
			<h1>Films</h1>
			<ul>{htmlMovies}</ul>
			<Compteur />

			<footer>Ceci est mon footer</footer>
		</>
	);
}

export default App;
