import { Formik, FormikProps, useField } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuthors } from '../../../../hooks/useAuthors';
import { authorAdded } from '../../../../store/authors/authorsActions';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';

import { Button } from '../../../../common/Button/Button';
import { Input } from '../../../../common/Input/Input';
import { Textarea } from '../../../../common/Textarea/Textarea';
import { selectAuthors } from '../../../../store/authors/authorsSelector';
import { addAuthor } from '../../../../store/authors/thunk';

import {
	ADD_AUTHOR_BUTTON_TEXT,
	COURSE_AUTHORS_LIST_IS_EMPTY,
	COURSE_AUTHORS_LIST_TITLE,
	CREATE_AUTHOR_BUTTON_TEXT,
	CREATE_COURSE_ADD_AUTHOR_LABEL_TEXT,
	CREATE_COURSE_ADD_AUTHOR_PLACEHOLDER_TEXT,
	CREATE_COURSE_ADD_AUTHOR_TITLE,
	CREATE_COURSE_AUTHORS_LIST_TITLE,
	CREATE_COURSE_BUTTON_TEXT,
	CREATE_COURSE_DESCRIPTION_LABEL_TEXT,
	CREATE_COURSE_DESCRIPTION_PLACEHOLDER_TEXT,
	CREATE_COURSE_DURATION_PLACEHOLDER_TEXT,
	CREATE_COURSE_DURATION_TITLE,
	CREATE_COURSE_TITLE_LABEL_TEXT,
	CREATE_COURSE_TITLE_PLACEHOLDER_TEXT,
	DELETE_AUTHOR_BUTTON_TEXT,
} from '../../../../constants';
import { getFormattedDuration } from '../../../../helpers/pipeDuration';
import { IAuthor } from '../../../../models/Author';

import '../../CreateCourse.scss';

export interface ICreateCourseFormValues {
	titleInput: string;
	description: string;
	duration: string;
	authors: Array<any>;
}

const AuthorNameValidationSchema = Yup.object().shape({
	authorName: Yup.string()
		.min(2, 'Author name should contain at least 2 symbols!')
		.required('Author name is required!'),
});

export function CreateCourseForm(props: FormikProps<ICreateCourseFormValues>) {
	const dispatch = useDispatch();
	const authors = useSelector(selectAuthors);
	const [authorsField] = useField<Array<IAuthor>>('authors');
	const { value: courseAuthors, onChange: onCourseAuthorsChange } =
		authorsField;

	const [durationField] = useField<string>('duration');
	const { value: durationValue } = durationField;

	const setCourseAuthors = (authors: Array<IAuthor>) => {
		onCourseAuthorsChange({ target: { value: authors, name: 'authors' } });
	};

	interface IAuthorInput {
		authorName: string;
	}

	const createAuthor = (values: IAuthorInput) => {
		if (!values.authorName) return;

		addAuthor(values.authorName)(dispatch);
	};

	const addAuhorToCourseAuthors = (author: IAuthor) => {
		if (courseAuthors.includes(author)) return;
		const authors = [...courseAuthors, author];
		setCourseAuthors(authors);
	};

	const removeAuhorFromCourseAuthors = (author: IAuthor) => {
		const authors = courseAuthors.filter(
			(courseAuthor) => courseAuthor.id !== author.id
		);
		setCourseAuthors(authors);
	};

	return (
		<form className='create-course-form' onSubmit={props.handleSubmit}>
			<section>
				<div>
					<div className='title'>
						<div>
							<Input
								name='titleInput'
								labelText={CREATE_COURSE_TITLE_LABEL_TEXT}
								placeholdetText={CREATE_COURSE_TITLE_PLACEHOLDER_TEXT}
								type='text'
							/>
						</div>
						<Button />
					</div>
					<div>
						<Textarea
							name='description'
							className='description'
							labelText={CREATE_COURSE_DESCRIPTION_LABEL_TEXT}
							placeholdetText={CREATE_COURSE_DESCRIPTION_PLACEHOLDER_TEXT}
						/>
					</div>
				</div>
			</section>
			<section className='course-additional-info'>
				<div className='course-additional-info--top'>
					<div className='course-additional-info__add-author'>
						<h3 className='course-additional-info__add-author-title'>
							{CREATE_COURSE_ADD_AUTHOR_TITLE}
						</h3>
						<Formik
							initialValues={{ authorName: '' }}
							onSubmit={(values) => createAuthor(values)}
							validationSchema={AuthorNameValidationSchema}
						>
							{(authorProps) => {
								const handleCreateAuthor = () => {
									if (authorProps.getFieldMeta('authorName').error) return;
									createAuthor(authorProps.values);
								};
								return (
									<>
										<div>
											<Input
												name='authorName'
												className='course-additional-info__input'
												labelText={CREATE_COURSE_ADD_AUTHOR_LABEL_TEXT}
												placeholdetText={
													CREATE_COURSE_ADD_AUTHOR_PLACEHOLDER_TEXT
												}
												type='text'
											/>
											{authorProps.getFieldMeta('authorName').error ? (
												<div className='error'>
													{authorProps.getFieldMeta('authorName').error}
												</div>
											) : null}
										</div>
										<Button
											className='course-additional-info__button'
											onClick={handleCreateAuthor}
										/>
									</>
								);
							}}
						</Formik>
					</div>
					<div className='course-additional-info__author-list'>
						<h3>{CREATE_COURSE_AUTHORS_LIST_TITLE}</h3>
						<div>
							{authors && authors.length ? (
								authors.map((author) => (
									<div
										key={author.id}
										className='course-additional-info__author-list-item'
									>
										<span>{author.name}</span>
										<Button onClick={() => addAuhorToCourseAuthors(author)} />
									</div>
								))
							) : (
								<h1>No suggested authors</h1>
							)}
						</div>
					</div>
				</div>
				<div className='course-additional-info--bottom'>
					<div className='course-additional-info__duration'>
						<h3 className='course-additional-info__duration-title'>
							{CREATE_COURSE_DURATION_TITLE}
						</h3>
						<div>
							<Input
								name='duration'
								className='course-additional-info__input'
								labelText={CREATE_COURSE_DURATION_TITLE}
								placeholdetText={CREATE_COURSE_DURATION_PLACEHOLDER_TEXT}
								type='number'
							/>
						</div>
						<p>
							{CREATE_COURSE_DURATION_TITLE}:{' '}
							{getFormattedDuration(parseInt(durationValue))}
						</p>
					</div>
					<div className='course-additional-info__author-list'>
						<h3>{COURSE_AUTHORS_LIST_TITLE}</h3>
						{courseAuthors.length ? (
							courseAuthors.map((a, id) => (
								<div
									key={id}
									className='course-additional-info__author-list-item'
								>
									<span>{a.name}</span>
									<Button onClick={() => removeAuhorFromCourseAuthors(a)}>
										DELETE_AUTHOR_BUTTON_TEXT
									</Button>
								</div>
							))
						) : (
							<div>{COURSE_AUTHORS_LIST_IS_EMPTY}</div>
						)}
						{props.getFieldMeta('authors').error ? (
							<div className='error'>{props.getFieldMeta('authors').error}</div>
						) : null}
					</div>
				</div>
			</section>
		</form>
	);
}
