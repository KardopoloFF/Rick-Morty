import { REMOVE_FROM_FAVORITE } from '../types';

export const removeFavorite = (oneCard) => ({ type: REMOVE_FROM_FAVORITE, payload: oneCard });
