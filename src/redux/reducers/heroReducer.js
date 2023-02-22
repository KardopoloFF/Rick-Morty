import {
	SET_HERO, SET_IS_ABOUT, SET_IS_FETCHTING, SET_ADD_FAVORITE, REMOVE_FROM_FAVORITE, CLEAR_BUTTON,
} from '../types';

const defaultState = {
	favorite: [],
	about: [],
	items: [],
	isFetching: false,
};

export default function heroReducer(state = defaultState, action) {
	const { type, payload } = action;
	switch (type) {
		case SET_HERO:
			return {
				...state,
				items: action.payload,
				isFetching: false,
			};

		case SET_IS_FETCHTING:
			return {
				...state,
				isFetching: action.payload,
			};

		case SET_IS_ABOUT:
			return {
				...state,
				about: [action.payload],
			};

		case SET_ADD_FAVORITE:
			return {
				...state,
				favorite: [...state.favorite, action.payload],
			};

		case REMOVE_FROM_FAVORITE:
			return {
				...state,
				favorite: state.favorite.filter((el) => el.id !== action.payload),
			};

		case CLEAR_BUTTON:
			return {
				...state,
				items: [],
			};

		default:
			return state;
	}
}
