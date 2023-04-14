import React, { MouseEvent, ButtonHTMLAttributes } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
}

export const Button = ({ className, ...props }: IButtonProps) => {
	const style = `general-button ${className}`;
	return <button {...props} className={style} />;
};
