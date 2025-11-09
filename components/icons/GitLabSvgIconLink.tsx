import React from 'react';
import { SvgIconLink } from '../utility/SvgIconLink';

const svgPaths = [
    'M24 43L16 20 32 20z',
    'M24 43L42 20 32 20z',
    'M37 5L42 20 32 20z',
    'M24 43L42 20 45 28z',
    'M24 43L6 20 16 20z',
    'M11 5L6 20 16 20z',
    'M24 43L6 20 3 28z'
];

export const GitLabSvgIconLink: React.FC = () => (
    <SvgIconLink href="https://gitlab.com/pgkavogiannis/" svgPaths={svgPaths}/>
);
