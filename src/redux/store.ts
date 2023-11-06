import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from ".";

export default () => {
	const store = configureStore({
		reducer: rootReducer,
		devTools: process.env.NODE_ENV !== "production",
	});

	return store;
};
