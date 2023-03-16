import React from 'react';
import { useNavigate, generatePath } from 'react-router-dom';
import { ROUTES } from 'src/constants';
import { ICourse } from 'src/models/Course';
import { Button } from '../../../../common/Button/Button';
import { getAuthors } from '../../../../helpers/authors';
import { getFormattedDate } from '../../../../helpers/dateGenerator';
import { getFormattedDuration } from '../../../../helpers/pipeDuration';
import './CourseCard.scss';

interface ICourseProps {
	course: ICourse;
}

export function CourseCard({ course }: ICourseProps) {
	const navigate = useNavigate();
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	return (
		<div className='course-card'>
			<section className='course-card__title-section'>
				<h2>{course.title}</h2>
				<p>{course.description}</p>
			</section>
			<section className='course-card__additional-info'>
				<div className='course-card__additional-info-content'>
					<span className='course-card__authors'>
						<b>Authors: </b>
						{getAuthors(course.authors)}
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
				<Button
					className='course-card__additional-info-button'
					buttonText='Show course'
					buttonType='button'
					onClick={() => {
						const path = generatePath(ROUTES.course, {
							courseId: course.id,
						});
						navigate(path);
					}}
				/>
			</section>
		</div>
	);
}
