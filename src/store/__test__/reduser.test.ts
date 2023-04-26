import { ICourse } from '../../models/Course';
import {
	courseAdded,
	courseDeleted,
	courseUpdated,
} from '../courses/coursesActions';
import { coursesReducer } from '../courses/coursesReducer';

const initAction: any = { type: 'courses_loaded', payload: null };

describe('Courses reducer tests  ', () => {
	it('Reducer should return default value', () => {
		expect(coursesReducer(undefined, initAction)).toEqual(null);
	});

	it('Reducer should handle add course', () => {
		const course: ICourse = {
			id: 'mock-id',
			title: 'mock title',
			description: 'mock description',
			creationDate: '28/02/2022',
			duration: 0,
			authors: [],
		};
		expect(coursesReducer(undefined, courseAdded(course))).toEqual([course]);
	});

	it('Reducer should handle delete course', () => {
		const initialState: Array<ICourse> = [
			{
				id: 'mock-id',
				title: 'mock title',
				description: 'mock description',
				creationDate: '28/02/2022',
				duration: 0,
				authors: [],
			},
			{
				id: 'mock-id2',
				title: 'mock title 2',
				description: 'mock description 2',
				creationDate: '28/02/2022',
				duration: 0,
				authors: [],
			},
			{
				id: 'mock-id3',
				title: 'mock title 3',
				description: 'mock description 3',
				creationDate: '28/02/2022',
				duration: 0,
				authors: [],
			},
		];
		const expectedState = [
			{
				id: 'mock-id2',
				title: 'mock title 2',
				description: 'mock description 2',
				creationDate: '28/02/2022',
				duration: 0,
				authors: [],
			},
			{
				id: 'mock-id3',
				title: 'mock title 3',
				description: 'mock description 3',
				creationDate: '28/02/2022',
				duration: 0,
				authors: [],
			},
		];
		expect(coursesReducer(initialState, courseDeleted('mock-id'))).toEqual(
			expectedState
		);
	});

	it('Reducer should handle update course', () => {
		const initialState: Array<ICourse> = [
			{
				id: 'mock-id',
				title: 'mock title',
				description: 'mock description',
				creationDate: '28/02/2022',
				duration: 0,
				authors: [],
			},
		];
		const updatedCourse: ICourse = {
			id: 'mock-id',
			title: 'updated mock title',
			description: 'mock description',
			creationDate: '28/02/2022',
			duration: 0,
			authors: ['test author id'],
		};
		expect(coursesReducer(initialState, courseUpdated(updatedCourse))).toEqual([
			updatedCourse,
		]);
	});
});
