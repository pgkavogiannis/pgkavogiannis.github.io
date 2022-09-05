import React from 'react';

type SvgIconLinkProps = {
	href: string | undefined;
	svgPaths: Array<string>;
}

export const SvgIconLink: React.FC<SvgIconLinkProps> = ({href, svgPaths}) => (
		<a href={href} target="_blank" rel="noreferrer">
			<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
				 viewBox="0 0 48 48"
				 className="fill-current">
				{
					svgPaths.map((path, index) => <path key={index} d={path}></path>)
				}
			</svg>
		</a>
);