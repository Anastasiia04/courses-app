import { combineReducers, createStore, compose } from 'redux';
import { authorsReducer } from './authors/authorsReducer';
import { coursesReducer } from './courses/coursesReducer';
import { userReducer } from './user/userReducer';

export const rootReducer = combineReducers({
	user: userReducer,
	courses: coursesReducer,
	authors: authorsReducer,
});

export function configureStore() {
	const composeEnhancers =
		(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	return createStore(rootReducer, composeEnhancers());
}

export type StoreType = ReturnType<typeof rootReducer>;
