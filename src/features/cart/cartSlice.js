import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItems: [],
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
};

export const cartSlice = createSlice({
	name: 'cartItems',
	initialState,
	reducers: {
		addItemToCart(state, action) {
			state.cartItems.push(action.payload);
		},
	},
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
