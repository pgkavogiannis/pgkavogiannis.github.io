import React from 'react';
import {WorkExperience} from "../utility/WorkExperience";
import {Section} from "../utility/Section";

const jobs = [
	{
		jobTitle: "Full Stack Software Engineer",
		jobPeriod: "November 2021 - September 2022",
		companyTitle: "Hellenic Army",
		jobDescription: "Developing and supporting new and existing military applications related " +
				"to Health Informatics, such as Electronic Health Service Center (Η.Κ.Ε.Λ.Υ.), " +
				"using React, PHP (Symfony) and Docker"
	},
	{
		jobTitle: "Full Stack Software Engineer",
		jobPeriod: "May 2020 - September 2021",
		companyTitle: "Intrasoft International | Athens, Greece",
		jobDescription: "Developing and supporting new and existing applications related to PERSEUS product " +
				"using JavaEE (Maven, Hibernate) and Primefaces " +
				"Helped with local development migration to Docker " +
				"Worked with tools such as: Kafka, Jenkins, Drools, jBPM, WebLogic, WildFly and Jira " +
				"Mentored several newcomers with their on-boarding on the team by documenting core concepts on Confluence"
	},
	{
		jobTitle: "Software Trainee",
		jobPeriod: "November 2019 - April 2020",
		companyTitle: "Intrasoft International | Athens, Greece",
		jobDescription: "Developing and supporting new and existing applications related to " +
				"Single Social Security Fund (EFKA) (e-ΕΦΚΑ) using JavaEE (Maven, JDBC), Primefaces and Oracle PL/SQL " +
				"Deployed applications using Oracle WebLogic application server " +
				"Worked with Git and SVN version control systems"
	},
]

const languages = [
	{
		name: "Greek",
		level: "Native Speaker"
	},
	{
		name: "English",
		level: "Professional Working Proficiency"
	},
	{
		name: "Spanish",
		level: "Elementary Working Proficiency"
	}
]

const languagesList = () => <ul>
	{
		languages.map(language =>
				<li key={language.name} className="flex flex-col">
					<span className="text-secondary">{language.name}</span>
					<span>{language.level}</span>
				</li>
		)
	}
</ul>;

export const MainContent: React.FC = () => (
		<div className="card rounded-none lg:card-side bg-base-100 shadow-xl mx-auto">
			<div className="card-body grid grid-cols-2">
				<div>
					<div className="avatar placeholder mb-4">
						<div className="bg-primary-focus text-neutral-content rounded-full w-24">
							<span className="text-3xl">PG</span>
						</div>
					</div>
					<h2 className="card-title text-primary-focus">PANAGIOTIS GKAVOGIANNIS</h2>
					<p className="text-neutral-content">Full Stack Software Engineer</p>
					<div className="mt-6">
						<Section
								title="About Me"
								content={<p className='text-justify'>Throughout my career as a software developer I've
									focused on developing scalable and well documented code.
									I enjoy working collaboratively but can also run with projects on my own
								</p>}
						/>
						<Section
								title="Languages"
								content={languagesList()}
						/>
					</div>
				</div>
				<div>
					<span className="footer-title border-b-2 border-neutral-content/25 w-full">Work Experience</span>
					{
						jobs.map(job => <WorkExperience
								key={job.jobPeriod}
								jobTitle={job.jobTitle}
								jobPeriod={job.jobPeriod}
								companyTitle={job.companyTitle}
								jobDescription={job.jobDescription}/>
						)
					}
				</div>
			</div>
		</div>
)