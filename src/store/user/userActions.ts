import { IUser } from '../../helpers/userData';
import { createActionFactory } from '../actionFactory';

export const login = createActionFactory('login')<IUser>();
export const logout = createActionFactory('logout')();

export type UserActions = ReturnType<typeof login> | ReturnType<typeof logout>;
