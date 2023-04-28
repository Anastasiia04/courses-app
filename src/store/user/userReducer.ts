import { IUser } from '../../helpers/userData';
import { login, logout, UserActions } from './userActions';

export type UserState = IUser | null;

export function userReducer(
	state: UserState = null,
	action: UserActions
): UserState {
	switch (action.type) {
		case login.type:
			return action.payload;
		case logout.type:
			return null;
		default:
			return state;
	}
}
