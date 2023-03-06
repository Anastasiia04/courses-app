import { useField } from 'formik';
import React, { ChangeEvent } from 'react';
interface IInputProps {
	name: string;
	labelText: string;
	placeholdetText: string;
	className?: string;
	type?: string;
}

export function Input({
	name,
	labelText,
	placeholdetText,
	className,
	type = 'text',
}: IInputProps) {
	const [field] = useField(name);
	const { value, onChange } = field;
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange({ target: { value: event.target.value, name } });
	};
	return (
		<div className={className}>
			{' '}
			<label htmlFor={name}>{labelText}</label>{' '}
			<input
				type={type}
				id={name}
				name={name}
				value={value}
				placeholder={placeholdetText}
				onChange={handleChange}
			></input>{' '}
		</div>
	);
}
