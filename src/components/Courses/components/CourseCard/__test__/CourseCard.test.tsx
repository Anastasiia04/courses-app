import { mockedState, renderApp } from '../../../../../helpers/testUtils';
import { CourseCard } from '../CourseCard';
import { screen } from '@testing-library/react';
import { getFormattedDate } from '../../../../../helpers/dateGenerator';
import React from 'react';

const mockCourse = {
	id: 'mock-id',
	title: 'mock title',
	description: 'mock description',
	creationDate: '28/02/2022',
	duration: 40,
	authors: ['mock author id'],
};

describe('Course Card tests  ', () => {
	beforeEach(() => {
		renderApp(<CourseCard course={mockCourse} />);
	});

	it('Should display title', () => {
		expect(screen.getByTestId('title').textContent).toEqual(mockCourse.title);
	});

	it('Should display description', () => {
		expect(screen.getByTestId('description').textContent).toEqual(
			mockCourse.description
		);
	});

	it('Should display duration in the correct format', () => {
		expect(screen.getByTestId('duration').textContent).toEqual('00:40 hours');
	});

	it('Should display authors list', () => {
		expect(screen.getByTestId('authors').textContent).toEqual(
			mockedState.authors[0].name
		);
	});

	it('Should display created date in the correct format', () => {
		expect(screen.getByTestId('creationDate').textContent).toEqual(
			getFormattedDate(mockCourse.creationDate)
		);
	});
});
