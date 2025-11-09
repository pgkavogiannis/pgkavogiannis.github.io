import clsx from "clsx";
import React from 'react';

type ContainerLayoutProps = {
    children?: React.ReactNode;
    className?: string;
};

export const ContainerLayout: React.FC<ContainerLayoutProps> = ({ children, className }) => (
    <div className={clsx("container mx-auto px-4 py-6", className)}>
        {children}
    </div>
);
