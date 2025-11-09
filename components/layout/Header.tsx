import React from 'react';
import { ContainerLayout } from './container-layout';
import { ThemeToggle } from '../ThemeToggle';

export const Header: React.FC = () => {
    return (
        <header className="bg-tj-dark-blue text-neutral-content shadow-md sticky top-0 z-50 transition-colors duration-300">
            <ContainerLayout>
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <a href="#hero" className="text-2xl font-bold hover:text-secondary transition-colors" title="Go to home">
                        PG
                    </a>

                    {/* Navigation Links - Desktop */}
                    <nav className="hidden md:flex gap-6" aria-label="Main navigation">
                        <a href="#about" className="link link-hover text-neutral-content hover:text-secondary transition-colors">
                            About
                        </a>
                        <a href="#experience" className="link link-hover text-neutral-content hover:text-secondary transition-colors">
                            Experience
                        </a>
                        <a href="#skills" className="link link-hover text-neutral-content hover:text-secondary transition-colors">
                            Skills
                        </a>
                        <a href="#contact" className="link link-hover text-neutral-content hover:text-secondary transition-colors">
                            Contact
                        </a>
                    </nav>

                    {/* Theme Toggle */}
                    <ThemeToggle />
                </div>

                {/* Mobile Navigation Menu */}
                <nav className="md:hidden mt-4 pt-4 border-t border-neutral-content/20" aria-label="Mobile navigation">
                    <div className="flex flex-wrap gap-4">
                        <a href="#about" className="link link-hover text-neutral-content hover:text-secondary text-sm">
                            About
                        </a>
                        <a href="#experience" className="link link-hover text-neutral-content hover:text-secondary text-sm">
                            Experience
                        </a>
                        <a href="#skills" className="link link-hover text-neutral-content hover:text-secondary text-sm">
                            Skills
                        </a>
                        <a href="#contact" className="link link-hover text-neutral-content hover:text-secondary text-sm">
                            Contact
                        </a>
                    </div>
                </nav>
            </ContainerLayout>
        </header>
    );
};
