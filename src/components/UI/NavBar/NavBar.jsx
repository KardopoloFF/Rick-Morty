import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { findHero, setHero } from '../../../redux/actions/findHero';
import ClearButton from '../ClearButton/ClearButton';
import './NavBar.less';

export default function NavBar() {
	const [findHeroes, setFindHero] = useState('');
	const [dirtySearch, setDirtySearch] = useState(false);
	const [searchError, setSearchError] = useState('Поиск не может быть пустым');
	const [formValid, setFormValid] = useState(false);
	const dispatch = useDispatch();

	const blurHandler = (e) => {
		switch (e.target.name) {
			case 'findHeroes':
				setDirtySearch(true);
				break;
			default:
				break;
		}
	};

	const handler = (e) => {
		setFindHero(e.target.value);
		const reg = /^(?:\d,?)+$/;
		if (!reg.test((e.target.value))) {
			setSearchError('Введите только цифры от 1 до 826');
		} else {
			setSearchError('');
		}
	};

	useEffect(() => {
		if (searchError) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [searchError]);

	return (
		<>
			<nav className="nav_panel">
				<div className="nav_logo">
					<Link to="/">
						<img src="/image/logo.png" alt="nav_logo" />
					</Link>
				</div>
				<div className="nav_searchBar">
					<input onBlur={(e) => blurHandler(e)} name="findHeroes" type="search" value={findHeroes} placeholder="Введите цифру(ы) 1-826" onChange={(e) => { handler(e); }} />
					<button disabled={!formValid} type="button" onClick={() => dispatch(findHero(findHeroes))}>найти</button>
				</div>
					<ClearButton />
				<div className="nav_favorite_link">
					<Link className="link" to="/favorite">понравившейся</Link>
				</div>
			</nav>
			{(dirtySearch && searchError) && <div className="error_lable">{searchError}</div>}
		</>
	);
}
