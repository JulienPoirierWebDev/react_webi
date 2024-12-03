/* eslint-disable react/prop-types */

import style from './Movie.module.css';

function Movie({ movie }) {
	// partie logique
	console.log(style);

	// partie visuelle
	return (
		<div className={style.card} key={movie.id}>
			<p className={style.title}>{movie.original_title}</p>
			<p className={style.paragraph}>{movie.overview}</p>
			<img
				className={style.img}
				src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
				alt={`Affiche de ${movie.original_title}`}
			/>
		</div>
	);
}

export default Movie;
