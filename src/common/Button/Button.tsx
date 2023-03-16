import React, { MouseEvent } from 'react';
// eslint-disable-next-line no-duplicate-imports
import { ButtonHTMLAttributes } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	buttonText: string;
	buttonType: 'button' | 'submit' | 'reset' | undefined;
	className?: string;
}

export const Button = ({
	buttonText,
	className,
	buttonType,
	onClick,
}: IButtonProps) => {
	const style = `general-button ${className}`;
	return (
		<button className={style} onClick={onClick} type={buttonType}>
			{buttonText}
		</button>
	);
};
