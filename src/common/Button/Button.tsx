import React from 'react';
// eslint-disable-next-line no-duplicate-imports
import { MouseEvent } from 'react';

interface IButtonProps {
	buttonText: string;
	buttonType: 'button' | 'submit' | 'reset' | undefined;
	className?: string;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
	buttonText,
	className,
	buttonType,
	onClick,
}: IButtonProps) => (
	<button className={className} onClick={onClick} type={buttonType}>
		{buttonText}
	</button>
);
