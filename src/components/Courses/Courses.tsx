import React from 'react';
// eslint-disable-next-line no-duplicate-imports
import { useState } from 'react';
import { Button } from '../../common/Button/Button';
import { mockedCoursesList } from '../../constants';
import { ICourse } from '../../models/Course';
import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import './Courses.scss';

interface ICoursesProps {
	addNewCourse: () => void;
}

export function Courses({ addNewCourse }: ICoursesProps) {
	const [courses, setCourses] = useState<Array<ICourse>>(mockedCoursesList);

	const onSearch = (value: string) => {
		if (!value) {
			setCourses(mockedCoursesList);
			return;
		}
		const findedCourses = mockedCoursesList.filter(
			(course) =>
				course.id.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
				course.title.toLowerCase().indexOf(value.toLowerCase()) > -1
		);
		setCourses(findedCourses);
	};
	return (
		<section className='courses'>
			<nav className='search-bar'>
				<SearchBar search={onSearch} />
				<Button
					className='search-bar__button'
					buttonText='Add new course'
					buttonType='button'
					onClick={addNewCourse}
				/>
			</nav>
			<main>
				{courses.map((course) => (
					<CourseCard
						key={course.id}
						title={course.title}
						description={course.description}
						duration={course.duration}
						authors={course.authors}
						creationDate={course.creationDate}
					/>
				))}
			</main>
		</section>
	);
}
