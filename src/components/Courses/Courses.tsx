import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import {
	ADD_NEW_COURSE_BUTTON_TEXT,
	mockedCoursesList,
	ROUTES,
} from '../../constants';
import { ICourse } from '../../models/Course';
import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import './Courses.scss';

export function Courses() {
	const [courses, setCourses] = useState<Array<ICourse>>(mockedCoursesList);

	const onSearch = (value: string) => {
		if (!value) {
			setCourses(mockedCoursesList);
			return;
		}
		const findedCourses = mockedCoursesList.filter(
			(course) =>
				course.id.toLowerCase().includes(value.toLowerCase()) ||
				course.title.toLowerCase().indexOf(value.toLowerCase()) > -1
		);
		setCourses(findedCourses);
	};
	const navigate = useNavigate();
	return (
		<section className='courses'>
			<nav className='search-bar'>
				<SearchBar search={onSearch} />
				<Button
					className='search-bar__button'
					buttonText='Add new course'
					buttonType='button'
					onClick={() => {
						navigate(ROUTES.addCourse);
					}}
				/>
			</nav>
			<main>
				{courses.map((course) => (
					<CourseCard key={course.id} course={course} />
				))}
			</main>
		</section>
	);
}
