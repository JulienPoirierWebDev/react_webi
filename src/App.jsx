import './App.css';
import Authentication from './components/Authentication/Autentication';
import MoviesSearch from './components/MoviesSearch';

function App() {
	// partie logique du composant

	// partie graphique du composant -> JSX, des tags, des variables JS, des conditions, des boucles
	return (
		<>
			<h1>Films</h1>

			<MoviesSearch />

			<footer>Ceci est mon footer</footer>
		</>
	);
}

export default App;
