import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ROUTES } from '../../constants';
import { getAuthors } from '../../helpers/authors';
import { getFormattedDate } from '../../helpers/dateGenerator';
import { getFormattedDuration } from '../../helpers/pipeDuration';
import { selectAuthors } from '../../store/authors/authorsSelector';

import './CourseInfo.scss';
import {
	selectCourse,
	selectCourses,
} from '../../store/courses/coursesSelector';
import { setSingleCourse } from '../../store/courses/coursesActions';
import { loadCourse } from '../../store/courses/thunk';

export function CourseInfo() {
	const { courseId } = useParams();

	const dispatch = useDispatch();

	const course = useSelector(selectCourse);
	const courses = useSelector(selectCourses);
	const authors = useSelector(selectAuthors);

	useEffect(() => {
		const foundCourse = courses?.find((course) => course.id === courseId);
		if (foundCourse) {
			dispatch(setSingleCourse(foundCourse));
		} else {
			loadCourse(courseId)(dispatch);
		}

		return () => {
			dispatch(setSingleCourse(null));
		};
	}, [dispatch, courseId]);

	return (
		<div className='course-info'>
			<header className='course-info__back'>
				<Link to={ROUTES.courses}>{'< Back to courses'}</Link>
			</header>
			{!course ? (
				<h1>No such course</h1>
			) : (
				<>
					<h1 className='course-info__title'>{course.title}</h1>
					<main className='course-info__content-wrapper'>
						<section className='course-info__description'>
							{course.description}
						</section>
						<aside>
							<div>
								<b>ID: </b>
								{course.id}
							</div>
							<div>
								<b>Duration: </b>
								{getFormattedDuration(course.duration)}
							</div>
							<div>
								<b>Created: </b>
								{getFormattedDate(course.creationDate)}
							</div>
							<div>
								<b>Authors: </b>
								{getAuthors(course.authors, authors)}
							</div>
						</aside>
					</main>
				</>
			)}
		</div>
	);
}
