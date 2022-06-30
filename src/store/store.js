import { configureStore } from '@reduxjs/toolkit';
import itemSlice from '../features/item/itemSlice';
import cartSlice from '../features/cart/cartSlice';

export const store = configureStore({
	reducer: {
		item: itemSlice,
		cartItem: cartSlice,
	},
});
