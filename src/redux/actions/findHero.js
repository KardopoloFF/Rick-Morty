import axios from 'axios';
import {
	SET_HERO, SET_IS_FETCHTING,
} from '../types';

export const setHero = (hero) => ({ type: SET_HERO, payload: hero });

export const setIsFetching = (bool) => ({ type: SET_IS_FETCHTING, payload: bool });

export const findHero = (findHeroes) => (dispatch) => {
	dispatch(setIsFetching(true));
	axios.get(`https://rickandmortyapi.com/api/character/${findHeroes}`)
	.then((res) => {
		dispatch(setHero(Array.isArray(res.data) ? res.data : [res.data]));
	});
};
