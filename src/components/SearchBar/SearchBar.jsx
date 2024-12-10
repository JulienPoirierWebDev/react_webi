/* eslint-disable react/prop-types */
import { useRef } from 'react';
import InputContainer from '../InputContainer/InputContainer';

const SearchBar = ({ setMovies }) => {
	const inputRef = useRef(null);
	async function getMovies(searchTerm) {
		const response = await fetch(
			`http://localhost:3000/query-movies/${searchTerm}`
		);

		const data = await response.json();

		setMovies(data.data.results);
	}

	const handleSubmit = (event, data) => {
		event.preventDefault();

		//console.log(event.target.children[0].children[1].value);
		//console.log(inputRef.current.value);
		getMovies(data.searchTerm);
	};
	return (
		<form action='' onSubmit={handleSubmit}>
			<InputContainer>
				<label htmlFor='search'>Rechercher un film</label>
				<input ref={inputRef} type='text' id='search' name='search' />
			</InputContainer>
			<input type='submit' value='Rechercher' />
		</form>
	);
};

export default SearchBar;
