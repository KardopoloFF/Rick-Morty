import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/App.less';
import NavBar from '../components/UI/NavBar/NavBar';
import Main from '../components/pages/Main/Main';
import AboutHero from '../components/pages/About/AboutHero';
import FavoriteHero from '../components/pages/Favorite/FavoriteHero';
import Error from '../components/pages/Error/Error';
import Footer from '../components/footer/Footer';

function App() {
	return (
		<div className="container">
			<NavBar />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/about" element={<AboutHero />} />
				<Route path="/favorite" element={<FavoriteHero />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
