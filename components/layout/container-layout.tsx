import clsx from "clsx";
import React from 'react';

type ContainerLayoutProps = {
	children?: JSX.Element;
	className?: string;
}

export const ContainerLayout: React.FC<ContainerLayoutProps> = ({children, className}) => (
		<div className={clsx('lg:container lg:mx-auto p-1 lg:p-4', className)}>
			{children}
		</div>
);