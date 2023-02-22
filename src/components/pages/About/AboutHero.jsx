import React from 'react';
import { useSelector } from 'react-redux';
import FullHeroCard from '../../UI/FullHeroCard/FullHeroCard';

function AboutHero() {
	const aboutHero = useSelector((store) => store.hero.about);

	return (
		<div className="hero_container">
			{aboutHero.map((el) => <FullHeroCard key={el.id} hero={el} />)}
		</div>
	);
}

export default AboutHero;
