import { IAuthor } from '../models/Author';

export const getAuthors = (
	authorsIds: Array<string>,
	authorsList: Array<IAuthor> | null
): string => {
	const authorsResultList: Array<string | undefined> = authorsIds.map(
		(authorId) => {
			return authorsList?.find((author) => author.id === authorId)?.name;
		}
	);
	return authorsResultList.join(', ');
};
