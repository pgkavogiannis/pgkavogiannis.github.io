import React, { JSX } from 'react';

type SectionProps = {
    title: string | undefined;
    content: JSX.Element | undefined;
}

export const Section: React.FC<SectionProps> = (
    {title, content}
) => (<div className="pb-4">
    <span className="footer-title border-b-2 border-neutral-content/25 w-full">{title}</span>
    {content}
</div>);
