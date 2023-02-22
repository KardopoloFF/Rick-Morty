import { SET_ADD_FAVORITE } from '../types';

export const likeHero = (likedHero) => ({ type: SET_ADD_FAVORITE, payload: likedHero });
