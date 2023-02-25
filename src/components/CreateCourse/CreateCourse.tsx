import { Formik } from 'formik';
import React from 'react';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { getFormattedDuration } from '../../helpers/pipeDuration';

export function CreateCourse() {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	const onSubmit = () => {};
	return (
		<>
			<Formik initialValues={{}} onSubmit={onSubmit}>
				{(props) => (
					<form className='search-bar-wrapper' onSubmit={props.handleSubmit}>
						<section>
							<div>
								<Input
									name='titleInput'
									labelText='Title'
									placeholdetText='Enter title...'
								/>
								<Button buttonText='Create course' buttonType='submit' />
								<div>
									<label>Deacription</label>
									<textarea placeholder='Enter description'></textarea>
								</div>
							</div>
						</section>
						<section>
							<div>
								<div>
									<h5>Add author</h5>
									<Input
										name='authorName'
										labelText='Author name'
										placeholdetText='Enter author name...'
									/>
									<Button buttonText='Create author' buttonType='button' />
								</div>
								<div>
									<h5>Duration</h5>
									<Input
										name='duration'
										labelText='Duration'
										placeholdetText='Enter durstion in minutes...'
									/>
									<p>Duration: {getFormattedDuration(60)}</p>
								</div>
							</div>
							<div>
								<div>
									<h5>Authors</h5>
									<div>
										<div>
											<span>Name....</span>{' '}
											<Button buttonText='Add author' buttonType='button' />
										</div>
										<div>
											<span>Name....</span>{' '}
											<Button buttonText='Add author' buttonType='button' />
										</div>
										<div>
											<span>Name....</span>{' '}
											<Button buttonText='Add author' buttonType='button' />
										</div>
										<div>
											<span>Name....</span>{' '}
											<Button buttonText='Add author' buttonType='button' />
										</div>
									</div>
								</div>
								<div>
									<h5>Course authors</h5>
									<div>Author list is empty</div>
								</div>
							</div>
						</section>
					</form>
				)}
			</Formik>
		</>
	);
}
