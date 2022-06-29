import { createContext, useState } from 'react';

function addCartItem(cartItems, productToAdd) {
	const existingCartItem = cartItems.find((cartItem) => {
		return cartItem.mainId === productToAdd.mainId;
	});

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.mainId === productToAdd.mainId
				? {
						...cartItem,
						quantity: cartItem.quantity + 1,
				  }
				: cartItem
		);
	}

	return [...cartItems, { ...productToAdd, quantity: 1 }];
}

function removeCartItem(cartItems, cartItemToRemove) {
	const existingCartItem = cartItems.find((cartItem) => {
		return cartItem.mainId === cartItemToRemove.mainId;
	});

	if (existingCartItem.quantity === 1) {
		return cartItems.filter(
			(cartItem) => cartItem.mainId !== cartItemToRemove.mainId
		);
	}

	return cartItems.map((cartItem) =>
		cartItem.mainId === cartItemToRemove.mainId
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
}

function clearCartItem(cartItems, cartItemToClear) {
	return cartItems.filter(
		(cartItem) => cartItem.mainId !== cartItemToClear.mainId
	);
}

const CartContext = createContext({
	cartItems: [],
	searchItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [searchItems, setSearchItems] = useState([]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const removeItemFromCart = (cartItemToRemove) => {
		setCartItems(removeCartItem(cartItems, cartItemToRemove));
	};

	const clearItemFromCart = (cartItemToClear) => {
		setCartItems(clearCartItem(cartItems, cartItemToClear));
	};

	const value = {
		cartItems,
		searchItems,
		addItemToCart,
		removeItemFromCart,
		clearItemFromCart,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
