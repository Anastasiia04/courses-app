import React from 'react';
import { useNavigate, generatePath, Link } from 'react-router-dom';
import { ReactComponent as EditIcon } from 'src/assets/icons/edit-icon.svg';
import { ReactComponent as DeleteIcon } from 'src/assets/icons/bin.svg';
import { ICourse } from '../../../../models/Course';
import { Button } from '../../../../common/Button/Button';
import { getAuthors } from '../../../../helpers/authors';
import { getFormattedDate } from '../../../../helpers/dateGenerator';
import { getFormattedDuration } from '../../../../helpers/pipeDuration';
import { ROUTES, SHOW_COURSE_BUTTON_TEXT } from '../../../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { useAuthors } from '../../../../hooks/useAuthors';
import { selectAuthors } from '../../../../store/authors/authorsSelector';
import { courseDeleted } from '../../../../store/courses/coursesActions';
import './CourseCard.scss';

interface ICourseProps {
	course: ICourse;
}

export function CourseCard({ course }: ICourseProps) {
	useAuthors();
	const navigate = useNavigate();
	const authors = useSelector(selectAuthors);
	const dispatch = useDispatch();

	const deleteCourse = (id: string) => {
		dispatch(courseDeleted(id));
	};
	const { title, description } = course;
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	return (
		<div className='course-card'>
			<section className='course-card__title-section'>
				<h2>{title}</h2>
				<p>{description}</p>
			</section>
			<section className='course-card__additional-info'>
				<div className='course-card__additional-info-content'>
					<span className='course-card__authors'>
						<b>Authors: </b>
						{getAuthors(course.authors, authors)}
					</span>
					<span>
						<b>Duration: </b>
						{getFormattedDuration(course.duration)}
					</span>
					<span>
						<b>Created: </b>
						{getFormattedDate(course.creationDate)}
					</span>
				</div>
				<div className='course-card__buttons-wrapper'>
					<Button
						className='course-card__additional-info-button'
						onClick={() => {
							const path = generatePath(ROUTES.course, {
								courseId: course.id,
							});
							navigate(path);
						}}
					>
						{SHOW_COURSE_BUTTON_TEXT}
					</Button>
					<Button
						className='course-card__edit-button'
						onClick={() => {
							const path = generatePath(ROUTES.updateCourse, {
								courseId: course.id,
							});
							navigate(path);
						}}
					>
						<EditIcon aria-label='Edit' />
					</Button>

					<Button
						className='course-card__delete-button'
						onClick={() => {
							deleteCourse(course.id);
						}}
					>
						<DeleteIcon aria-label='Delete' />
					</Button>
				</div>
			</section>
		</div>
	);
}
