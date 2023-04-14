import { REGISTRATION_URL } from 'src/constants';
import { makeRequest } from '../../helpers/makeRequest';
import { IRegistrationData, IRegistrationResponse } from './Registration';

export async function registrationSubmit(values: IRegistrationData) {
	const { name, password, email } = values;
	const newUser = {
		name,
		password,
		email,
	};
	const options = {
		method: 'POST',
		body: JSON.stringify(newUser),
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const response = await makeRequest<IRegistrationResponse>(
		REGISTRATION_URL,
		options
	);
	return response;
}
