import { createContext, useState } from 'react';

const CartContext = createContext({
	items: [],
	addItem: (item) => {},
	removeItem: (id) => {},
});

export function CartContextProvider({ children }) {
	const [cart, setCart] = useState([]);

	function addItem(item) {
		setCart((prevState) => {
			return [...prevState, item];
		});
	}

	function removeItem(id) {}

	const context = { items: cart, addItem };

	return (
		<CartContext.Provider value={context}>{children}</CartContext.Provider>
	);
}
