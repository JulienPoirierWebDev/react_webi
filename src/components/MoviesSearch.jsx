import { useEffect, useState } from 'react';
import Movie from './Movie/Movie';

const MoviesSearch = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function getMovies() {
			const response = await fetch(
				'http://localhost:3000/query-movies/avengers'
			);

			const data = await response.json();

			console.log(data.data.results);

			setMovies(data.data.results);
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

export default MoviesSearch;
