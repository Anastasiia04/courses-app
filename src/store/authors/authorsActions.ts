import { IAuthor } from '../../models/Author';
import { createActionFactory } from '../actionFactory';

export const authorsLoaded =
	createActionFactory('authors_loaded')<Array<IAuthor>>();
export const authorAdded = createActionFactory('author_added')<IAuthor>();
export const authorDeleted = createActionFactory('author_deleted')<string>();

export type AuthorsActions =
	| ReturnType<typeof authorsLoaded>
	| ReturnType<typeof authorAdded>
	| ReturnType<typeof authorDeleted>;
