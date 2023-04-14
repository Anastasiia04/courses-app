import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useCourses } from 'src/hooks/useCourses';
import { selectCourses } from 'src/store/courses/coursesSelector';
import { Button } from '../../common/Button/Button';
import { ADD_NEW_COURSE_BUTTON_TEXT, ROUTES } from '../../constants';
import { ICourse } from '../../models/Course';
import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import './Courses.scss';

export function Courses() {
	const loading = useCourses();
	const navigate = useNavigate();
	const storeCourses = useSelector(selectCourses);
	const [courses, setCourses] = useState<Array<ICourse> | null>(storeCourses);

	useEffect(() => {
		setCourses(storeCourses);
	}, [storeCourses]);

	function onSearch(value: string) {
		if (!value) {
			setCourses(storeCourses);
			return;
		}

		const findedCourses = storeCourses?.filter(
			(course) =>
				course.id.toLowerCase().includes(value.toLowerCase()) ||
				course.title.toLowerCase().indexOf(value.toLowerCase()) > -1
		);
		if (findedCourses) {
			setCourses(findedCourses);
		} else {
			setCourses(null);
		}
	}
	return (
		<section className='courses'>
			<nav className='search-bar'>
				<SearchBar search={onSearch} />
				<Link className='search-bar__button' to={ROUTES.addCourse}>
					{ADD_NEW_COURSE_BUTTON_TEXT}
				</Link>
			</nav>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<main>
					{courses?.length ? (
						courses.map((course) => (
							<CourseCard key={course.id} course={course} />
						))
					) : (
						<h1>No active courses found</h1>
					)}
				</main>
			)}
		</section>
	);
}
