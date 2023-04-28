import { COURSES_URL, CREATE_COURSE_URL, COURSE_URL } from '../../constants';
import { makeRequest } from '../../helpers/makeRequest';
import { getUserToken } from '../../helpers/userData';
import { ICourse, INewCourse, IUpdatedCourse } from '../../models/Course';
import {
	courseAdded,
	courseDeleted,
	coursesLoaded,
	courseUpdated,
	setSingleCourse,
} from './coursesActions';

interface ICoursesResponse {
	successful: boolean;
	result: Array<ICourse>;
}

interface ICourseDeleteResponse {
	successful: boolean;
	result: string;
}

interface ICourseCreateResponse {
	successful: boolean;
	result: ICourse;
}

interface ICourseResponse {
	successful: boolean;
	result: ICourse;
}

export const loadCourses =
	(courses: Array<ICourse> | null) => async (dispatch: any) => {
		if (courses) {
			dispatch(coursesLoaded(courses));
		} else {
			makeRequest<ICoursesResponse>(COURSES_URL).then(
				(resp: ICoursesResponse) => {
					if (resp.successful) {
						dispatch(coursesLoaded(resp.result));
					}
				}
			);
		}
	};

export const deleteCourse = (courseId: string) => async (dispatch: any) => {
	const token = getUserToken();
	makeRequest<ICourseDeleteResponse>(COURSE_URL(courseId), {
		method: 'DELETE',
		headers: {
			Authorization: token || '',
		},
	}).then((resp) => {
		if (resp.successful) {
			dispatch(courseDeleted(courseId));
		}
	});
};

export const createCourse = (course: INewCourse) => async (dispatch: any) => {
	const token = getUserToken();
	makeRequest<ICourseCreateResponse>(CREATE_COURSE_URL, {
		method: 'POST',
		headers: {
			Authorization: token || '',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(course),
	}).then((resp) => {
		if (resp.successful) {
			dispatch(courseAdded(resp.result));
		}
	});
};

export const updateCourse =
	(course: IUpdatedCourse, id?: string) => async (dispatch: any) => {
		const token = getUserToken();
		if (token && id) {
			makeRequest<ICourseCreateResponse>(COURSE_URL(id), {
				method: 'PUT',
				headers: {
					Authorization: token || '',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(course),
			}).then((resp) => {
				if (resp.successful) {
					dispatch(courseUpdated(resp.result));
				}
			});
		}
	};

export const loadCourse = (id?: string) => async (dispatch: any) => {
	const token = getUserToken();
	if (token && id) {
		makeRequest<ICourseResponse>(COURSE_URL(id), {
			headers: {
				Authorization: token || '',
			},
		}).then((resp) => {
			if (resp.successful) {
				dispatch(setSingleCourse(resp.result));
			}
		});
	}
};
