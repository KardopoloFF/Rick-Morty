import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../footer/Footer';
import HeroCard from '../../UI/HeroCard/HeroCard';

import './Main.less';

function Main() {
	const foundHeroes = useSelector((store) => store.hero.items);
	const isFetching = useSelector((store) => store.hero.isFetching);
	const dispatch = useDispatch();

	return (
		<div className="main_container">
			{
				isFetching === false
					? (
						<div className="hero_container">
							{foundHeroes.map((el) => <HeroCard key={el.id} hero={el} />)}
						</div>
					)
					: (
						<div className="find_animation">
							<span>Ищем...</span>
						</div>
					)
			}
		</div>
	);
}

export default Main;
