import { createContext, StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SearchMoviesPage from './pages/SearchMoviesPage/SearchMoviesPage';

const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
	const [token, setToken] = useState(null);

	return (
		<UserContext.Provider value={{ token: token, setToken: setToken }}>
			{children}
		</UserContext.Provider>
	);
};

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<UserContextProvider>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route
						path='/authentication'
						element={<AuthenticationPage />}
					/>
					<Route path='/recherche' element={<SearchMoviesPage />} />
					<Route path='*' element={<p>404</p>} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</UserContextProvider>
	</StrictMode>
);

export { UserContext };
