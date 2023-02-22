import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { aboutHero } from '../../../redux/actions/aboutHero';
import { likeHero } from '../../../redux/actions/addFavorite';
import './HeroCard.less';

function HeroCard({ hero }) {
	const dispatch = useDispatch();
	return (
		<div className="card_container">
			<div className="hero_image">
				<img src={hero?.image} alt="hero_image" />
			</div>
			<div className="description">
				<div className="hero_name">
					<span>
						<strong>Имя</strong>
						{' '}
						{hero.name}
					</span>
				</div>
			</div>
			<div className="buttons">
				<button type="button" onClick={() => dispatch(likeHero(hero))}>в избранное</button>
				<Link to="/about">
					<button type="button" onClick={() => dispatch(aboutHero(hero))}>
						подробнее
					</button>
				</Link>
			</div>
		</div>
	);
}

export default HeroCard;
