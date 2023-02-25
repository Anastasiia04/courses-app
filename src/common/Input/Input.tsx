import { useField } from 'formik';
import React from 'react';
// eslint-disable-next-line no-duplicate-imports
import { ChangeEvent } from 'react';

interface IInputProps {
	name: string;
	labelText: string;
	placeholdetText: string;
	className?: string;
}

export function Input({
	name,
	labelText,
	placeholdetText,
	className,
}: IInputProps) {
	const [field] = useField<string>(name);
	const { value, onChange } = field;

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange({ target: { value: event.target.value, name } });
	};
	return (
		<div className={className}>
			<label htmlFor={name}>{labelText}</label>
			<input
				type='text'
				id={name}
				name={name}
				value={value}
				placeholder={placeholdetText}
				onChange={handleChange}
			></input>
		</div>
	);
}
