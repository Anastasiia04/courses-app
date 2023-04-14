import { useField } from 'formik';
import React, { ChangeEvent } from 'react';

interface ITextareaProps {
	name: string;
	labelText: string;
	placeholdetText: string;
	className?: string;
}

export function Textarea({
	name,
	labelText,
	className,
	...props
}: ITextareaProps) {
	const [field, meta] = useField<string>(name);
	const { value, onChange } = field;

	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		onChange({ target: { value: event.target.value, name } });
	};

	return (
		<div className={className}>
			<label htmlFor={name}>{labelText}</label>
			<textarea
				id={name}
				name={name}
				value={value}
				{...props}
				onChange={handleChange}
			></textarea>
			{meta.touched && meta.error ? (
				<div className='error'>{meta.error}</div>
			) : null}
		</div>
	);
}
