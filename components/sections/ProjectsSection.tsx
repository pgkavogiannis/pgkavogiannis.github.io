import React from 'react';
import { ContainerLayout } from '../layout/container-layout';

interface Project {
    title: string;
    description: string;
    url: string;
    tech: string[];
}

interface ProjectsSectionProps {
    projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => (
    <section id="projects" className="py-4 md:py-8 bg-base-100">
        <ContainerLayout>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 border-b-4 border-primary pb-4">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="card bg-gradient-to-r from-base-100 to-base-200 shadow-md border-l-4 border-primary hover:shadow-lg transition-shadow"
                    >
                        <div className="card-body">
                            <h3 className="text-xl md:text-2xl font-bold text-primary">{project.title}</h3>
                            <p className="text-base-content leading-relaxed mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t) => (
                                    <span key={t} className="badge badge-outline badge-primary text-xs">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="card-actions">
                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                                    Visit Site
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </ContainerLayout>
    </section>
);
