import { IAuthor } from '../../models/Author';
import { createActionFactory } from '../actionFactory';

export const AUTHORS_LOADED = 'authors_loaded';

export const authorsLoaded =
	createActionFactory(AUTHORS_LOADED)<Array<IAuthor>>();

// Rest of the code remains the same
export const authorAdded = createActionFactory('author_added')<IAuthor>();
export const authorDeleted = createActionFactory('author_deleted')<string>();

export type AuthorsActions =
	| ReturnType<typeof authorsLoaded>
	| ReturnType<typeof authorAdded>
	| ReturnType<typeof authorDeleted>;
