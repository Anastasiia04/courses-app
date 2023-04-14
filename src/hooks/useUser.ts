import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserToken, IUser } from '../helpers/userData';
import { makeRequest } from '../helpers/makeRequest';
import { USER } from '../constants';
import { login, logout } from '../store/user/userActions';

interface IUserResponse {
	successful: boolean;
	result: IUser;
}

export const useUser = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const dispatch = useDispatch();

	useEffect(() => {
		const token = getUserToken();
		if (token) {
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
				setLoading(false);
			});
		} else {
			setLoading(false);
		}
	}, []);

	return loading;
};
