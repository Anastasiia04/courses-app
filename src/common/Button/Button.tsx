import React, { MouseEvent } from 'react';
interface IButtonProps {
	buttonText: string;
	type?: 'button' | 'submit' | 'reset';
	className?: string;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ buttonText, ...props }: IButtonProps) => (
	<button {...props}> {buttonText}</button>
);
