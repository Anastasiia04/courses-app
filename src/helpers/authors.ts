import { mockedAuthorsList } from '../constants';

export const getAuthors = (authors: Array<string>): string => {
	const authorsList: Array<string> = [];
	authors.forEach((authorId) => {
		const name = mockedAuthorsList.find(
			(author) => author.id === authorId
		)?.name;
		if (name) authorsList.push(name);
	});
	authorsList.join(', ');
	return authorsList.join(', ');
};
