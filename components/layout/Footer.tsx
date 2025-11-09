import React from 'react';
import { ContainerLayout } from './container-layout';
import { LinkedInSvgIconLink } from '../icons/LinkedInSvgIconLink';
import { GitLabSvgIconLink } from '../icons/GitLabSvgIconLink';
import { GitHubSvgIconLink } from '../icons/GitHubSvgIconLink';
import { MailSvgIconLink } from '../icons/MailSvgIconLink';

export const Footer: React.FC = () => (
    <div className="dark:bg-primary bg-tj-dark-blue text-neutral-content">
        <ContainerLayout>
            <footer className="footer text-neutral-content flex flex-row justify-evenly items-center">
                <div className="footer-title opacity-100 border-neutral-content/25">Contact me at</div>
                <div className="grid grid-flow-col gap-4 text-secondary">
                    <MailSvgIconLink/>
                    <LinkedInSvgIconLink/>
                    <GitLabSvgIconLink/>
                    <GitHubSvgIconLink/>
                </div>
            </footer>
        </ContainerLayout>
    </div>
);
