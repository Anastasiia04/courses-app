import { createContext } from 'react';

import { useUser } from '../hooks/useUser';

const defaultUserContext = {
	loading: true,
	user: {
		name: '',
		token: '',
	},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setUser: () => {},
};

export const UserContext =
	createContext<ReturnType<typeof useUser>>(defaultUserContext);
