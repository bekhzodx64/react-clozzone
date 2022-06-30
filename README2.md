- Устанавливаем redux-toolkit: `yarn add @reduxjs/toolkit`
- Устанавливаем react-redux: `yarn add react-redux`
- В папке `src` создаем папку `store` а внутри этой папки создаем `store.js`
- Настройка `store.js`:

```jsx
store.js;

import { configureStore } from '@redux/toolkit';

export const store = configureStore({
	reducer: {},
});
```

- Оборачиваем наше приложение хранилищем store:

```jsx
index.js;

import { store } from './store/store.js';
import { Provider } from 'react-redux';

<Provider store={store}>
	<App />
</Provider>;
```

- В папке `src` создаем папку `features`, внутри него создаем папку `user` а потом `userSlice.js`. Мы создаем эти файлы для того что бы можно было удобно управлять нашем хранилищем. Это как бы мы разделяем функционал нашего хранилище. `userSlice.js` отвечает за действие с нашим пользователем.

- Настройка `userSlice.js`:

```jsx
userSlice.js;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	firstName: '',
	lastName: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setFirstName: (state, action) => {
			state.firstName = action.payload;
		},
	},
});

export const { setFirstName } = userSlice.actions;
export default userSlice.reducer;
```

- Подключаем `userSlice` в `store.js`:

```jsx
store.js;

import userSlice from '../features/user/userSlice';

export const store = configureStore({
	reducer: {
		user: userSlice,
	},
});
```

- Применяем наш state в `User.js`

```jsx
User.js;

import { useDispatch } from 'react-redux';
import { setFirstName } from '../features/user/userSlice';

const User = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<input
				placeholder='First Name'
				onChange={(e) => dispatch(setFirstName(e.target.value))}
			/>
		</div>
	);
};
```

- Отображаем результат `firstName` в компоненте `FirstName.js`

```jsx
FirstName.js;

import { useSelector } from 'react-redux';

const FirstName = () => {
	const name = useSelector((state) => state.user.firstName);

	return <div>{name}</div>;
};
```

На этом мы завершили вывод `firstName`, а дальше уже идет точно такая же структура для `lastName`.

- Добавляем `setLastName` в `userSlice.js`

```jsx
userSlice.js;

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setFirstName: (state, action) => {
			state.firstName = action.payload;
		},
		setLastName: (state, action) => {
			state.lastName = action.payload;
		},
	},
});

export const { setFirstName, setLastName } = userSlice.actions;
export default userSlice.reducer;
```

- Снова применяем state в `User.js`

```jsx
User.js;

import { setFirstName, setLastName } from '../features/user/userSlice';

const User = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<input
				placeholder='First Name'
				onChange={(e) => dispatch(setFirstName(e.target.value))}
			/>
			<input
				placeholder='Second Name'
				onChange={(e) => dispatch(setLastName(e.target.value))}
			/>
		</div>
	);
};
```

- Отображаем результат lastName в компоненте `LastName.js`

```jsx
LastName.js;

import { useSelector } from 'react-redux';

const LastName = () => {
	const lastName = useSelector((state) => state.user.lastName);
	return <div>{lastName}</div>;
};
```
