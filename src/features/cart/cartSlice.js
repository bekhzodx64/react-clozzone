import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItems: [],
};

export const cartSlice = createSlice({
	name: 'cartItems',
	initialState,
	reducers: {
		addItem: (state, action) => {
			console.log(state);
			console.log(action);
		},
	},
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
