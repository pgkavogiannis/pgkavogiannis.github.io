import React from 'react';
import { ContainerLayout } from '../layout/container-layout';

interface AboutSectionProps {
    skillBadges: string[];
}

export const AboutSection: React.FC<AboutSectionProps> = ({ skillBadges }) => (
    <section id="about" className="py-4 md:py-8 bg-base-100">
        <ContainerLayout>
            <div className="card bg-gradient-to-r from-base-100 to-base-200 shadow-lg border border-primary border-opacity-20">
                <div className="card-body">
                    <h2 className="card-title text-3xl md:text-4xl border-b-4 border-primary pb-4">About Me</h2>

                    <p className="text-base-content/80 leading-relaxed text-lg">
                        Based in Athens, Greece, I have spent 6 years building enterprise software for high-stakes environments — from EU
                        customs clearance systems to military health informatics. I thrive in regulated, compliance-heavy settings where
                        precision and documentation matter as much as the code itself.
                    </p>

                    <p className="text-base-content/80 leading-relaxed text-lg">
                        My passion lies in solving complex problems and mentoring team members. I&apos;ve authored Confluence knowledge
                        articles that became part of standard onboarding programmes at two employers, and I enjoy structured knowledge
                        transfer within regulated environments.
                    </p>

                    <div className="divider"></div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary">Core Competencies</h3>
                        <div className="flex flex-wrap gap-3">
                            {skillBadges.map((skill) => (
                                <span key={skill} className="badge badge-lg badge-primary text-white">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </ContainerLayout>
    </section>
);
