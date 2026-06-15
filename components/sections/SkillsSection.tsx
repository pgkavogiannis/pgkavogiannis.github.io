import React from 'react';
import { ContainerLayout } from '../layout/container-layout';

interface Language {
    name: string;
    level: string;
}

interface Certification {
    name: string;
    issuer: string;
    year: string;
}

interface SkillsSectionProps {
    languages: Language[];
    technologies: string[];
    certifications: Certification[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ languages, technologies, certifications }) => (
    <section id="skills" className="py-4 md:py-8 bg-gradient-to-br from-base-100 to-base-200">
        <ContainerLayout>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 border-b-4 border-secondary pb-4">Skills & Tech Stack</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Languages */}
                <div className="card bg-base-100 shadow-md border border-secondary border-opacity-30">
                    <div className="card-body">
                        <h3 className="card-title text-2xl mb-6 text-secondary">Languages</h3>
                        <div className="space-y-3">
                            {languages.map((lang) => (
                                <div
                                    key={lang.name}
                                    className="flex justify-between items-center p-3 bg-base-200 rounded-lg hover:bg-base-300 transition"
                                >
                                    <span className="font-semibold text-base-content">{lang.name}</span>
                                    <span className="badge badge-secondary">{lang.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Technologies & Tools */}
                <div className="card bg-base-100 shadow-md border border-primary border-opacity-30">
                    <div className="card-body">
                        <h3 className="card-title text-2xl mb-6 text-primary">Technologies & Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech) => (
                                <span key={tech} className="badge badge-lg badge-primary text-white">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Certifications */}
            <div className="card bg-base-100 shadow-md border border-secondary border-opacity-30 mt-8">
                <div className="card-body">
                    <h3 className="card-title text-2xl mb-6 text-secondary">Certifications</h3>
                    <div className="flex flex-col gap-3">
                        {certifications.map((cert) => (
                            <div
                                key={cert.name}
                                className="flex justify-between items-center p-3 bg-base-200 rounded-lg hover:bg-base-300 transition"
                            >
                                <div className="flex items-center gap-3">
                                    <i className="fa-brands fa-aws text-2xl text-[#FF9900]" aria-hidden="true" />
                                    <div>
                                        <p className="font-semibold text-base-content">{cert.name}</p>
                                        <p className="text-sm text-base-content/70">{cert.issuer}</p>
                                    </div>
                                </div>
                                <span className="badge badge-secondary">{cert.year}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Additional Skills Summary */}
            <div className="card bg-gradient-to-r from-primary to-secondary shadow-lg mt-8 text-primary-content">
                <div className="card-body">
                    <h3 className="card-title text-xl mb-3">Additional Expertise</h3>
                    <ul className="list-disc list-inside space-y-2 text-lg">
                        <li>Full Stack Web Development (Frontend & Backend)</li>
                        <li>RESTful API Design & Development</li>
                        <li>Database Design (SQL & NoSQL)</li>
                        <li>Containerization with Docker</li>
                        <li>Version Control (Git, SVN)</li>
                        <li>Agile Development & Scrum Methodologies</li>
                        <li>Code Documentation & Technical Writing</li>
                        <li>Team Mentoring & Knowledge Sharing</li>
                    </ul>
                </div>
            </div>
        </ContainerLayout>
    </section>
);
