import { useEffect, useState, useRef } from 'react';
import Movie from './Movie/Movie';
import InputContainer from './InputContainer/InputContainer.jsx';

const MoviesSearch = () => {
	const [movies, setMovies] = useState([]);
	const inputRef = useRef(null);

	async function getMovies(searchTerm) {
		const response = await fetch(
			`http://localhost:3000/query-movies/${searchTerm}`
		);

		const data = await response.json();

		setMovies(data.data.results);
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		//console.log(event.target.children[0].children[1].value);
		//console.log(inputRef.current.value);
		const searchTerm = inputRef.current.value;
		getMovies(searchTerm);
	};

	return (
		<div>
			<form action='' onSubmit={handleSubmit}>
				<InputContainer>
					<label htmlFor='search'>Rechercher un film</label>
					<input
						ref={inputRef}
						type='text'
						id='search'
						name='search'
					/>
				</InputContainer>
				<input type='submit' value='Rechercher' />
			</form>
			{movies.map((movie) => {
				return <Movie key={movie.id} movie={movie} />;
			})}
		</div>
	);
};

export default MoviesSearch;
