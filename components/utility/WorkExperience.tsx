import React from 'react';

type WorkExperienceProps = {
	jobTitle: string | undefined;
	jobPeriod: string | undefined;
	companyTitle: string | undefined;
	jobDescription: string | undefined;
}

export const WorkExperience: React.FC<WorkExperienceProps> = (
		{jobTitle, companyTitle, jobPeriod, jobDescription}
) => (
		<div className="mb-4">
			<p>{jobTitle} at {companyTitle}</p>
			<div className="flex flex-col justify-between">
				<p className="text-secondary">{jobPeriod}</p>
				<p className="text-justify">{jobDescription}</p>
			</div>
		</div>
);