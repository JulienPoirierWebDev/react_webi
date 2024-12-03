import { useEffect, useState } from 'react';
import Movie from './Movie/Movie';

const MoviesContainer = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function getMovies() {
			const response = await fetch(
				'https://movies-api.julienpoirier-webdev.com/search/movies/termi'
			);

			const data = await response.json();

			setMovies(data.results);
		}

		getMovies();

		return () => {
			console.log('Mon composant APP est démonté');
		};
	}, []);
	return (
		<div>
			{movies.map((movie) => {
				return <Movie key={movie.id} movie={movie} />;
			})}
		</div>
	);
};

export default MoviesContainer;
