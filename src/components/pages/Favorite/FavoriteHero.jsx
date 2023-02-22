import React from 'react';
import { useSelector } from 'react-redux';
import FavoriteHeroCard from '../../UI/FavoriteHeroCard/FavoriteHeroCard';

function FavoriteHero() {
	const likedHero = useSelector((store) => store.hero.favorite);

	return (
		<div className="hero_container">
			{likedHero.map((el) => <FavoriteHeroCard key={el.id} hero={el} />)}
		</div>
	);
}

export default FavoriteHero;
