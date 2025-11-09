import React from 'react';
import { ContainerLayout } from '../layout/container-layout';

interface Job {
    jobTitle: string;
    jobPeriod: string;
    companyTitle: string;
    jobDescription: string;
}

interface ExperienceSectionProps {
    jobs: Job[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({jobs}) => <section id="experience" className="py-4 md:py-8 bg-base-100">
    <ContainerLayout>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 border-b-4 border-primary pb-4">Work Experience</h2>

        <div className="space-y-6">
            {jobs.map(job => <div key={job.jobTitle}
                                  className="card bg-gradient-to-r from-base-100 to-base-200 shadow-md border-l-4 border-primary hover:shadow-lg transition-shadow">
                    <div className="card-body">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-3">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-primary">{job.jobTitle}</h3>
                                <p className="text-base-content/70 font-semibold text-lg">{job.companyTitle}</p>
                            </div>
                            <div className="badge badge-lg badge-outline badge-primary min-w-fit">{job.jobPeriod}</div>
                        </div>

                        <p className="text-base-content/80 leading-relaxed">{job.jobDescription}</p>
                    </div>
                </div>)}
        </div>
    </ContainerLayout>
</section>;
