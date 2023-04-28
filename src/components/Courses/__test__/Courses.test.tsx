import { mockedState, renderApp } from '../../../helpers/testUtils';
import { screen } from '@testing-library/react';
import { Courses } from '../Courses';
import userEvent from '@testing-library/user-event';
import { ADD_NEW_COURSE_BUTTON_TEXT, ROUTES } from '../../../constants';
import React from 'react';

describe('Courses tests  ', () => {
	it('Should display amount of CourseCard equal length of courses array', () => {
		renderApp(<Courses />);
		expect(screen.getAllByTestId('courseCard').length).toEqual(
			mockedState.courses.length
		);
	});

	it('Should display Empty container if courses array length is 0', () => {
		const mockedState = {
			user: {},
			courses: [],
			authors: [],
		};
		const mockedStore: any = {
			getState: () => mockedState,
			subscribe: jest.fn(),
			dispatch: jest.fn(),
		};
		renderApp(<Courses />, mockedStore);
		expect(screen.getByTestId('noCourses')).toBeVisible();
	});

	it('CourseForm should be showed after a click on a button "Add new course"', () => {
		const mockedState = {
			user: {
				role: 'admin',
			},
			courses: [],
			authors: [],
		};
		const mockedStore: any = {
			getState: () => mockedState,
			subscribe: jest.fn(),
			dispatch: jest.fn(),
		};
		renderApp(<Courses />, mockedStore);
		userEvent.click(screen.getByText(ADD_NEW_COURSE_BUTTON_TEXT));
		const location = window.location.pathname;
		expect(location).toEqual(ROUTES.addCourse);
	});
});
