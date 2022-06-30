import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_KEY } from '../../config';

const initialState = {
	items: [],
};

export const getItems = createAsyncThunk(
	'items/getItems',
	async (_, { rejectWithValue, dispatch }) => {
		const res = await fetch('https://fortniteapi.io/v2/shop?lang=ru', {
			headers: {
				Authorization: API_KEY,
			},
		}).then((res) => res.json());
		dispatch(setItems(res.shop));
	}
);

export const itemSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {
		setItems: (state, action) => {
			state.items = action.payload;
		},
	},
});

export const { setItems } = itemSlice.actions;
export default itemSlice.reducer;
