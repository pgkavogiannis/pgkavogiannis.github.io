import React from 'react';
import { ContainerLayout } from '../layout/container-layout';

interface AboutSectionProps {
    skillBadges: string[];
}

export const AboutSection: React.FC<AboutSectionProps> = ({skillBadges}) => (
    <section id="about" className="py-4 md:py-8 bg-base-100">
        <ContainerLayout>
            <div className="card bg-gradient-to-r from-base-100 to-base-200 shadow-lg border border-primary border-opacity-20">
                <div className="card-body">
                    <h2 className="card-title text-3xl md:text-4xl border-b-4 border-primary pb-4">About Me</h2>

                    <p className="text-base-content/80 leading-relaxed text-lg mb-4">
                        Throughout my career as a software developer, I've focused on developing scalable and well-documented code. I enjoy
                        working collaboratively but can also run projects on my own. With experience in full-stack development, I specialize
                        in creating efficient solutions using modern technologies.
                    </p>

                    <p className="text-base-content/80 leading-relaxed text-lg mb-6">
                        My passion lies in solving complex problems, mentoring team members, and continuously learning new technologies. I
                        believe in writing clean, maintainable code and documenting my work thoroughly for better team collaboration.
                    </p>

                    <div className="divider"></div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary">Core Competencies</h3>
                        <div className="flex flex-wrap gap-3">
                            {skillBadges.map((skill) => (
                                <span key={skill} className="badge badge-lg badge-primary text-white">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </ContainerLayout>
    </section>
);
