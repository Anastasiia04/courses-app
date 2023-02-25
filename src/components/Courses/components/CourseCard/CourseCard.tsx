import React from 'react';
import { Button } from '../../../../common/Button/Button';
import { getAuthors } from '../../../../helpers/authors';
import { getFormattedDate } from '../../../../helpers/dateGenerator';
import { getFormattedDuration } from '../../../../helpers/pipeDuration';
import './CourseCard.scss';

interface ICourseCardProps {
	title: string;
	description: string;
	authors: Array<string>;
	duration: number;
	creationDate: string;
}

export function CourseCard({
	title,
	description,
	authors,
	duration,
	creationDate,
}: ICourseCardProps) {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	const showCourse = () => {};
	return (
		<div className='course-card'>
			<section>
				<h2>{title}</h2>
				<p>{description}</p>
			</section>
			<section className='course-card__additional-info'>
				<div className='course-card__additional-info-content'>
					<span className='course-card__authors'>
						<b>Authors: </b>
						{getAuthors(authors)}
					</span>
					<span>
						<b>Duration: </b>
						{getFormattedDuration(duration)}
					</span>
					<span>
						<b>Created: </b>
						{getFormattedDate(creationDate)}
					</span>
				</div>
				<Button
					className='course-card__additional-info-button'
					buttonText='Show course'
					buttonType='button'
					onClick={showCourse}
				/>
			</section>
		</div>
	);
}
