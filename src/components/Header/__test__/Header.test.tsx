import { screen } from '@testing-library/react';
import { Header } from '../Header';
import { mockedState, renderApp } from '../../../helpers/testUtils';
import React from 'react';

describe('Header tests  ', () => {
	beforeEach(() => {
		renderApp(<Header />);
	});

	it('Should render logo', () => {
		expect(screen.getByTestId('logo')).toBeVisible();
	});

	it('Should render username', () => {
		expect(screen.getByTestId('username').textContent).toEqual(
			mockedState.user.name
		);
	});
});
