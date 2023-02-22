import { configureStore } from '@reduxjs/toolkit';
import heroReducer from './reducers/heroReducer';

const store = configureStore({
	reducer: {
		hero: heroReducer,
	},
});

export default store;
