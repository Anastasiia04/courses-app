import { IAuthor } from '../../models/Author';
import {
	authorAdded,
	authorDeleted,
	AuthorsActions,
	authorsLoaded,
} from './authorsActions';

export type AuthorsState = Array<IAuthor> | null;

export function authorsReducer(
	state: AuthorsState = null,
	action: AuthorsActions
): AuthorsState {
	let filteredAuthorsList;
	switch (action.type) {
		case authorsLoaded.type:
			return action.payload;
		case authorAdded.type:
			// eslint-disable-next-line no-case-declarations
			const nonEmptyState = state || [];
			return [action.payload, ...nonEmptyState];
		case authorDeleted.type:
			if (!state || !action.payload) {
				return state;
			}
			filteredAuthorsList = state.filter(
				(author) => author.id !== action.payload
			);
			return filteredAuthorsList;
		default:
			return state;
	}
}
