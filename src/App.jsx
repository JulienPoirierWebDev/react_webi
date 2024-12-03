import './App.css';
import Movie from './components/Movie';

function App() {
	// partie logique du composant

	const movies = ['Terminator', 'Matrix', 'Star Wars', 'Inception'];

	const htmlMovies = movies.map((movie) => {
		return <Movie key={movie} movie={movie} />;
	});

	// partie graphique du composant -> JSX, des tags, des variables JS, des conditions, des boucles
	return (
		<>
			<h1>Films</h1>
			<ul>{htmlMovies}</ul>

			<footer>Ceci est mon footer</footer>
		</>
	);
}

export default App;
