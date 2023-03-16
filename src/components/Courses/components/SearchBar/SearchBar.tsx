import { Formik } from 'formik';
import React from 'react';
import { Button } from '../../../../common/Button/Button';
import { Input } from '../../../../common/Input/Input';
import './SearchBar.scss';
interface ISearchBarProps {
	search: (value: string) => void;
}

interface formValue {
	searchInput: string;
}

export function SearchBar({ search }: ISearchBarProps) {
	const onSubmit = ({ searchInput }: formValue) => {
		search(searchInput);
	};
	return (
		<Formik initialValues={{ searchInput: '' }} onSubmit={onSubmit}>
			{(props) => (
				<form className='search-bar-wrapper' onSubmit={props.handleSubmit}>
					<Input
						name='searchInput'
						labelText='Search course'
						placeholdetText='Enter course name...'
						className='search-bar-wrapper__input'
					/>
					<Button
						className='search-bar-wrapper__button'
						buttonText='Search'
						buttonType='submit'
					/>
				</form>
			)}
		</Formik>
	);
}
