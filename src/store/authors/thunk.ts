import { AUTHORS_URL, CREATE_AUTHOR_URL } from '../../constants';
import { makeRequest } from '../../helpers/makeRequest';
import { getUserToken } from '../../helpers/userData';
import { IAuthor } from '../../models/Author';
import { authorAdded, authorsLoaded } from './authorsActions';

interface IAuthorsResponse {
	successful: boolean;
	result: Array<IAuthor>;
}

interface IAuthorCreateResponse {
	successful: boolean;
	result: IAuthor;
}

export const loadAuthors =
	(authors: Array<IAuthor> | null) => async (dispatch: any) => {
		if (authors) {
			dispatch(authorsLoaded(authors));
		} else {
			makeRequest<IAuthorsResponse>(AUTHORS_URL).then((resp) => {
				if (resp.successful) {
					dispatch(authorsLoaded(resp.result));
				} else {
					dispatch(authorsLoaded([]));
				}
			});
		}
	};

export const addAuthor = (authorName: string) => async (dispatch: any) => {
	const token = getUserToken();
	const payload = {
		name: authorName,
	};
	makeRequest<IAuthorCreateResponse>(CREATE_AUTHOR_URL, {
		method: 'POST',
		headers: {
			Authorization: token || '',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	}).then((resp) => {
		if (resp.successful) {
			dispatch(authorAdded(resp.result));
		}
	});
};
