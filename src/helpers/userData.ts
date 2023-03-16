import { USER_INFO } from '../constants';

export interface IUser {
	name: string;
	token: string;
}

export function getUserData(): IUser {
	const name = localStorage.getItem(USER_INFO.name);
	const token = localStorage.getItem(USER_INFO.token);
	if (name && token) return { name, token };
	return { name: '', token: '' };
}

export function putUserData(user: IUser) {
	localStorage.setItem(USER_INFO.name, user.name);
	localStorage.setItem(USER_INFO.token, user.token);
}

export function clearUserData() {
	localStorage.removeItem(USER_INFO.name);
	localStorage.removeItem(USER_INFO.token);
}
