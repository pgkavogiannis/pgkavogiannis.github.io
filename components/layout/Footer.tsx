import React from 'react';
import { ContainerLayout } from './container-layout';
import { LinkedInSvgIconLink } from '../icons/LinkedInSvgIconLink';
import { GitLabSvgIconLink } from '../icons/GitLabSvgIconLink';
import { GitHubSvgIconLink } from '../icons/GitHubSvgIconLink';
import { MailSvgIconLink } from '../icons/MailSvgIconLink';

export const Footer: React.FC = () => (
    <footer className="bg-tj-dark-blue text-neutral-content py-4 mt-8">
        <ContainerLayout>
            {/* Main Footer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                {/* Quick Links Section */}
                <div>
                    <h4 className="font-bold text-lg mb-6 border-b-2 border-primary pb-3">Quick Links</h4>
                    <nav className="space-y-2" aria-label="Footer navigation">
                        <a href="#hero" className="block link link-hover text-neutral-content/80 hover:text-secondary transition-colors">
                            Home
                        </a>
                        <a href="#about" className="block link link-hover text-neutral-content/80 hover:text-secondary transition-colors">
                            About Me
                        </a>
                        <a href="#experience" className="block link link-hover text-neutral-content/80 hover:text-secondary transition-colors">
                            Experience
                        </a>
                        <a href="#skills" className="block link link-hover text-neutral-content/80 hover:text-secondary transition-colors">
                            Skills
                        </a>
                        <a href="#contact" className="block link link-hover text-neutral-content/80 hover:text-secondary transition-colors">
                            Contact
                        </a>
                    </nav>
                </div>

                {/* Connect Section */}
                <div>
                    <h4 className="font-bold text-lg mb-6 border-b-2 border-primary pb-3">Connect</h4>
                    <nav className="space-y-3" aria-label="Social media links">
                        <a href="https://linkedin.com/in/panagiotis.gkavogiannis" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 link link-hover text-neutral-content/80 hover:text-secondary transition-colors">
                            <LinkedInSvgIconLink />
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://github.com/pgkavogiannis" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 link link-hover text-neutral-content/80 hover:text-secondary transition-colors">
                            <GitHubSvgIconLink />
                            <span>GitHub</span>
                        </a>
                        <a href="https://gitlab.com/pgkavogiannis" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 link link-hover text-neutral-content/80 hover:text-secondary transition-colors">
                            <GitLabSvgIconLink />
                            <span>GitLab</span>
                        </a>
                        <a href="mailto:panagiotis.gkavogiannis@proton.me" className="flex items-center gap-3 link link-hover text-neutral-content/80 hover:text-secondary transition-colors">
                            <MailSvgIconLink />
                            <span>Email</span>
                        </a>
                    </nav>
                </div>

                {/* Built With Section */}
                <div>
                    <h4 className="font-bold text-lg mb-6 border-b-2 border-primary pb-3">Built With</h4>
                    <p className="text-sm text-neutral-content/80 leading-relaxed mb-4">
                        This portfolio is built with modern web technologies for performance and accessibility.
                    </p>
                    <div className="space-y-2 text-sm text-neutral-content/70">
                        <p>✨ Next.js 16</p>
                        <p>⚛️ React 19</p>
                        <p>🎨 Tailwind CSS 4</p>
                        <p>🌼 DaisyUI 5</p>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="divider divider-neutral opacity-20 my-0"></div>

            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 text-sm text-neutral-content/70">
                <div>
                    <p>&copy; {new Date().getFullYear()} Panagiotis Gkavogiannis. All rights reserved.</p>
                </div>
                <div className="text-center md:text-right">
                    <p>Last Updated: November 2025</p>
                </div>
            </div>
        </ContainerLayout>
    </footer>
);
