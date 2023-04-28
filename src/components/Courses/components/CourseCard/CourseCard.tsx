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
import { selectUser } from '../../../../store/user/userSelector';
import { deleteCourse } from '../../../../store/courses/thunk';
import { UserRole } from '../../../../helpers/userData';

interface ICourseProps {
	course: ICourse;
}

export function CourseCard({ course }: ICourseProps) {
	useAuthors();
	const navigate = useNavigate();
	const authors = useSelector(selectAuthors);
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	const deleteCourseHandler = (id: string) => {
		deleteCourse(id)(dispatch);
	};
	const { title, description } = course;
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	return (
		<div className='course-card' data-testid='courseCard'>
			<section className='course-card__title-section'>
				<h2 data-testid='title'>{title}</h2>
				<p data-testid='description'>{description}</p>
			</section>
			<section className='course-card__additional-info'>
				<div className='course-card__additional-info-content'>
					<span className='course-card__authors'>
						<b>Authors: </b>
						<span data-testid='authors'>
							{getAuthors(course.authors, authors)}
						</span>
					</span>
					<span>
						<b>Duration: </b>
						<span data-testid='duration'>
							{getFormattedDuration(course.duration)}
						</span>
					</span>
					<span>
						<b>Created: </b>
						<span data-testid='creationDate'>
							{getFormattedDate(course.creationDate)}
						</span>
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

					{user?.role === UserRole.admin ? (
						<>
							<Link
								className='course-card__edit-button'
								to={generatePath(ROUTES.updateCourse, {
									courseId: course.id,
								})}
							>
								<EditIcon aria-label='Edit' />
							</Link>
							<Button
								className='course-card__delete-button'
								onClick={() => {
									deleteCourseHandler(course.id);
								}}
							>
								<DeleteIcon aria-label='Delete' />
							</Button>
						</>
					) : null}
				</div>
			</section>
		</div>
	);
}
