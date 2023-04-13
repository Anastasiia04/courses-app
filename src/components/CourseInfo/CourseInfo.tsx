import React from 'react';
// eslint-disable-next-line no-duplicate-imports
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { selectAuthors } from '../../store/authors/authorsSelector';
import { selectCourses } from '../../store/courses/coursesSelector';

import { ROUTES } from '../../constants';
import { getAuthors } from '../../helpers/authors';
import { getFormattedDate } from '../../helpers/dateGenerator';
import { getFormattedDuration } from '../../helpers/pipeDuration';
import { ICourse } from '../../models/Course';

import './CourseInfo.scss';

const defauldCourse: ICourse = {
	id: '',
	title: '',
	description: '',
	duration: 0,
	creationDate: '',
	authors: [],
};

export function CourseInfo() {
	const { courseId } = useParams();
	const courses = useSelector(selectCourses);
	const authors = useSelector(selectAuthors);
	const course = courses.find((c) => c.id === courseId) || defauldCourse;
	return (
		<div className='course-info'>
			<header className='course-info__back'>
				<Link to={ROUTES.courses}>{'< Back to courses'}</Link>
			</header>
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
		</div>
	);
}
