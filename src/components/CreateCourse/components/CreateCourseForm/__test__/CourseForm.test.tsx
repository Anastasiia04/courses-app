/* eslint-disable @typescript-eslint/no-empty-function */
import { renderApp } from '../../../../../helpers/testUtils';
import { screen } from '@testing-library/react';
import { CreateCourse } from '../../../CreateCourse';
import React from 'react';

describe('Course form tests  ', () => {
	it('Should show authors lists (all and course authors)', () => {
		renderApp(<CreateCourse />);
		expect(screen.getAllByTestId('authors').length).toEqual(1);
		expect(screen.getByTestId('noCourseAuthors')).toBeVisible();
	});

	it('"Create author" click button should call dispatch', () => {});

	it('"Add author" button click should add an author to course authors list', () => {});

	it('"Delete author" button click should delete an author from the course list', () => {});
});
