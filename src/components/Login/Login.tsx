import { Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from 'src/store/user/userActions';
import * as Yup from 'yup';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import { LOGIN_URL, ROUTES } from '../../constants';
import { makeRequest } from '../../helpers/makeRequest';
import { IUser, putUserToken } from '../../helpers/userData';

import './Login.scss';

interface ILoginData {
	email: string;
	password: string;
}

interface ILoginResponse {
	successful: boolean;
	user: IUser;
	result: string;
	errors: Array<string>;
}

const loginFormInitState: ILoginData = {
	email: '',
	password: '',
};

const LoginFormSchema = Yup.object().shape({
	email: Yup.string()
		.email('Email should be in correct format!')
		.required('Email field is required!'),
	password: Yup.string().required('Password field is required!'),
});

export function Login() {
	const [errors, setErrors] = useState<Array<string>>([]);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onSubmit = async (values: ILoginData) => {
		const { email, password } = values;
		const user = { email, password };
		const options = {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const response = await makeRequest<ILoginResponse>(LOGIN_URL, options);

		if (response.successful) {
			const user: IUser = {
				name: response.user.name,
				token: response.result,
				isAuth: true,
				email: response.user.email,
			};
			dispatch(login(user));
			putUserToken(user);
			navigate(ROUTES.courses);
		} else {
			if (response.result) {
				setErrors([response.result]);
			} else {
				setErrors(response.errors);
			}
		}
	};
	return (
		<section className='login-wrapper'>
			<h1>Login</h1>
			{errors?.length > 0
				? errors.map((error, index) => (
						<div key={index} className='error'>
							{error}
						</div>
				  ))
				: null}
			<Formik
				initialValues={loginFormInitState}
				onSubmit={onSubmit}
				validationSchema={LoginFormSchema}
			>
				{(props) => (
					<form onSubmit={props.handleSubmit} className='login'>
						<Input
							name='email'
							labelText='Email'
							placeholdetText='Enter email'
							className='login__input'
						></Input>
						<Input
							name='password'
							labelText='Password'
							placeholdetText='Enter password'
							className='login__input'
							type='password'
						></Input>
						<Button
							buttonText='Login'
							buttonType='submit'
							className='login__button'
						></Button>
					</form>
				)}
			</Formik>
			<p>
				If you not have an account you can{' '}
				<Link to={ROUTES.registration}>Register</Link>
			</p>
		</section>
	);
}
