import { useState } from 'react';

function Compteur() {
	const [count, setCount] = useState(0);

	console.log("Je suis le composant compteur et je m'éxécute a nouveau");
	return (
		<>
			<p>Compteur : {count}</p>

			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Ajouter 1
			</button>
		</>
	);
}

export default Compteur;
