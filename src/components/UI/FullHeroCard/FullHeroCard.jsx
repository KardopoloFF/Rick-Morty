import React from 'react';
import { Link } from 'react-router-dom';
import './FullHeroCard.less';

function FullHeroCard({ hero }) {
	return (
		<div className="full_card_container">
			<div className="full_hero_image">
				<img src={hero?.image} alt="hero_image" />
			</div>
			<div className="full_description">
				<div className="hero_name">
					<span>
						<strong>Имя</strong>
						-
						{' '}
						{hero.name}
					</span>
				</div>
				<div className="hero_gender">
					<span>
						<strong>Пол</strong>
						-
						{' '}
						{hero.gender}
					</span>
				</div>
				<div className="hero_species">
					<span>
						<strong>Раса</strong>
						-
						{' '}
						{hero.species}
					</span>
				</div>
				<div className="hero_status">
					<span>
						<strong>Статус</strong>
						-
						{' '}
						{hero.status}
					</span>
				</div>
			</div>
			<div className="buttons">
				<button type="button">в избранное</button>
				<Link to="/">
					<button type="button">обратно</button>
				</Link>
			</div>
		</div>
	);
}

export default FullHeroCard;
