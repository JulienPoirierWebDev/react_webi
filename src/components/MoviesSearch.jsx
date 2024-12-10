import { useState } from 'react';
import Movie from './Movie/Movie';
import SearchBar from './SearchBar/SearchBar.jsx';

const MoviesSearch = () => {
	const [movies, setMovies] = useState([]);


	return (
		<div>
			<SearchBar setMovies={setMovies} />
			{movies.map((movie) => {
				return <Movie key={movie.id} movie={movie} />;
			})}
		</div>
	);
};

export default MoviesSearch;
