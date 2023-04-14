import { USER_INFO } from '../constants';

export interface IUser {
	name: string;
	isAuth: boolean;
	email: string;
	token: string;
}

export function putUserToken(user: IUser) {
	localStorage.setItem(USER_INFO.token, user.token);
}

export function clearUserToken() {
	localStorage.removeItem(USER_INFO.token);
}

export function getUserToken(): string | null {
	return localStorage.getItem(USER_INFO.token);
}
