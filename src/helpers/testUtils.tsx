import { createBrowserHistory } from 'history';
import { render } from '@testing-library/react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';

const history = createBrowserHistory();

export const mockedState = {
	user: {
		isAuth: true,
		name: 'Test Name',
	},
	courses: [
		{
			id: 'mock-id',
			title: 'mock title',
			description: 'mock description',
			creationDate: '28/02/2022',
			duration: 40,
			authors: ['mock author id'],
		},
	],
	authors: [
		{
			id: 'mock author id',
			name: 'mock author name',
		},
	],
};
export const mockedStore: any = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

export function renderApp(ui: JSX.Element, store = mockedStore) {
	return render(
		<HistoryRouter history={history}>
			<Provider store={store}>{ui}</Provider>
		</HistoryRouter>
	);
}
