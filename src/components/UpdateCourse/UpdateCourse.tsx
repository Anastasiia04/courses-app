import { Formik } from 'formik';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCourse } from 'src/hooks/useCourse';
import { ROUTES } from '../../constants';
import { IUpdatedCourse } from '../../models/Course';
import {
	CreateCourseForm,
	ICreateCourseFormValues,
} from '../CreateCourse/components/CreateCourseForm/CreateCourseForm';

export function UpdateCourse() {
	const { courseId } = useParams();
	const { loading, course } = useCourse(courseId);
	const navigate = useNavigate();

	const onSubmit = (inputCourse: ICreateCourseFormValues) => {
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
