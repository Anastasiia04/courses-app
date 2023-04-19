import { USER_INFO } from '../constants';

export enum UserRole {
	admin = 'admin',
	user = 'user',
}

export interface IUser {
	name: string;
	isAuth: boolean;
	email: string;
	token: string;
	role: UserRole;
}

export function putUserToken(token: string) {
	localStorage.setItem(USER_INFO.token, token);
}

export function clearUserToken() {
	localStorage.removeItem(USER_INFO.token);
}

export function getUserToken(): string | null {
	return localStorage.getItem(USER_INFO.token);
}
