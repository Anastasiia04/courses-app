import { Formik } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { REGISTRATION_URL, ROUTES } from '../../constants';
import { makeRequest } from '../../helpers/makeRequest';

import './Registration.scss';

export interface IRegistrationData {
	name: string;
	email: string;
	password: string;
}

export interface IRegistrationResponse {
	successful: boolean;
	errors: Array<string>;
}

const registrationFormInitState: IRegistrationData = {
	name: '',
	email: '',
	password: '',
};

const RegistrationFormSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, 'Name should contain at least 2 symbols!')
		.required('Name field is required!'),
	email: Yup.string()
		.email('Email should be in correct format!')
		.required('Email field is required!'),
	password: Yup.string()
		.min(6, 'Password should contain at least 6 symbols!')
		.required('Password field is required!'),
});

function createOptions(body: any) {
	return {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
		},
	};
}

export function Registration() {
	const [errors, setErrors] = useState<Array<string>>([]);
	const navigate = useNavigate();

	const onSubmit = async (values: IRegistrationData) => {
		const { name, password, email } = values;
		const newUser = {
			name,
			password,
			email,
		};
		const options = createOptions(newUser);

		const response = await makeRequest<IRegistrationResponse>(
			REGISTRATION_URL,
			options
		);
		if (response.successful) {
			navigate(ROUTES.login);
		} else {
			setErrors(response.errors);
		}
	};
	return (
		<section className='registration-wrapper'>
			<h1>Registration</h1>
			{errors.length &&
				errors.map((error, index) => (
					<div key={index} className='error'>
						{error}
					</div>
				))}
			<Formik
				initialValues={registrationFormInitState}
				onSubmit={onSubmit}
				validationSchema={RegistrationFormSchema}
			>
				{(props) => (
					<form onSubmit={props.handleSubmit} className='registration'>
						<Input
							name='name'
							labelText='Name'
							placeholdetText='Enter name'
							className='registration__input'
						></Input>
						<Input
							name='email'
							labelText='Email'
							placeholdetText='Enter email'
							className='registration__input'
						></Input>
						<Input
							name='password'
							labelText='Password'
							placeholdetText='Enter password'
							className='registration__input'
						></Input>
						<Button className='registration__button'>Registration</Button>
					</form>
				)}
			</Formik>
			<p>
				If you have an account you can <Link to={ROUTES.login}>Login</Link>
			</p>
		</section>
	);
}
