import React from 'react';

type SvgIconLinkProps = {
    svgPaths: Array<string>;
}

export const SvgIconLink: React.FC<SvgIconLinkProps> = ({svgPaths}) => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
     viewBox="0 0 48 48"
     className="fill-current">
    {
        svgPaths.map(path => <path key={path} d={path}></path>)
    }
</svg>;
