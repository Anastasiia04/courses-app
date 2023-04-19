import { LOGOUT_URL, USER } from '../../constants';
import { makeRequest } from '../../helpers/makeRequest';
import { getUserToken, IUser } from '../../helpers/userData';
import { login, logout } from './userActions';

interface IUserResponse {
	successful: boolean;
	result: IUser;
}

export const loginUser = (token: string) => async (dispatch: any) => {
	makeRequest<IUserResponse>(USER, {
		headers: {
			Authorization: token,
		},
	}).then((resp) => {
		if (resp.successful) {
			const user = {
				...resp.result,
				token,
			};
			dispatch(login(user));
		} else {
			dispatch(logout(null));
		}
	});
};

export const loadUser = (token: string) => async (dispatch: any) => {
	dispatch(loginUser(token));
};

export const logoutUser = () => async (dispatch: any) => {
	const token = getUserToken();
	if (token) {
		makeRequest<string>(LOGOUT_URL, {
			method: 'DELETE',
			headers: {
				Authorization: token,
			},
		}).then((resp) => {
			if (resp === 'OK') {
				dispatch(logout(null));
			}
		});
	}
};
