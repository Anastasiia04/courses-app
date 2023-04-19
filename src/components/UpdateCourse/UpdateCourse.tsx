import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useCourse } from 'src/hooks/useCourse';
import { ROUTES } from '../../constants';
import { IUpdatedCourse } from '../../models/Course';
import { updateCourse } from '../../store/courses/thunk';
import {
	CreateCourseForm,
	ICreateCourseFormValues,
} from 'src/components/CreateCourse/components/CreateCourseForm/CreateCourseForm';
import React from 'react';

export function UpdateCourse() {
	const { courseId } = useParams();
	const { loading, course } = useCourse(courseId);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onSubmit = (inputCourse: ICreateCourseFormValues) => {
		const course: IUpdatedCourse = {
			title: inputCourse.titleInput,
			description: inputCourse.description,
			duration: parseInt(inputCourse.duration),
			authors: inputCourse.authors.map((author) => {
				return author.id;
			}),
			id: '',
		};
		updateCourse(course, courseId)(dispatch);

		navigate(ROUTES.courses);
	};

	return (
		<>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<Formik
					initialValues={course}
					onSubmit={onSubmit}
					validationSchema={CreateCourseForm}
				>
					{(props) => <CreateCourseForm {...props} />}
				</Formik>
			)}
		</>
	);
}
