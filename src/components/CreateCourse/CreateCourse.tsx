import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import {
	CreateCourseForm,
	ICreateCourseFormValues,
} from './components/CreateCourseForm/CreateCourseForm';

import './CreateCourse.scss';
import { ROUTES } from '../../constants';
import React from 'react';
import { useDispatch } from 'react-redux';
import { createCourse } from '../../store/courses/thunk';
import { INewCourse } from 'src/models/Course';
import { courseAdded } from 'src/store/courses/coursesActions';

export const CreateCourseFormSchema = Yup.object().shape({
	titleInput: Yup.string()
		.min(2, 'Title should contain at least 2 symbols!')
		.required('Title field is required!'),
	description: Yup.string()
		.min(2, 'Descripion should contain at least 2 symbols!')
		.required('Description field is required!'),
	duration: Yup.number()
		.min(1, 'Duration should be more than 0!')
		.required('Duration field is required!'),
	authors: Yup.array()
		.of(
			Yup.object().shape({
				name: Yup.string().required(),
				id: Yup.string().required(),
			})
		)
		.min(1, 'Course authors list should contain at least one author!'),
});

const init: ICreateCourseFormValues = {
	titleInput: '',
	description: '',
	duration: '0',
	authors: [],
};

export function CreateCourse() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const onSubmit = (inputCourse: ICreateCourseFormValues) => {
		const course: INewCourse = {
			title: inputCourse.titleInput,
			description: inputCourse.description,
			duration: parseInt(inputCourse.duration),
			authors: inputCourse.authors.map((author) => {
				return author.id;
			}),
			creationDate: '',
		};
		createCourse(course)(dispatch);
		navigate(ROUTES.courses);
	};

	return (
		<Formik
			initialValues={init}
			onSubmit={onSubmit}
			validationSchema={CreateCourseFormSchema}
		>
			{(props) => <CreateCourseForm {...props} />}
		</Formik>
	);
}
