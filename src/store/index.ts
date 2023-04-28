import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { authorsReducer } from './authors/authorsReducer';
import { coursesReducer, singleCourse } from './courses/coursesReducer';
import { userReducer } from './user/userReducer';
import ReduxThunk from 'redux-thunk';

export const rootReducer = combineReducers({
	user: userReducer,
	courses: coursesReducer,
	course: singleCourse,
	authors: authorsReducer,
});

const middleware = [ReduxThunk];

export function configureStore() {
	const composeEnhancers =
		(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	return createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(...middleware))
	);
}

export type StoreType = ReturnType<typeof rootReducer>;
