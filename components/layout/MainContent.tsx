import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { SkillsSection } from '../sections/SkillsSection';
import { ContactSection } from '../sections/ContactSection';

const jobs = [
    {
        jobTitle: 'Full Stack Software Engineer',
        jobPeriod: 'October 2022 - Present',
        companyTitle: 'Sword Services Greece S.A.',
        jobDescription:
            'Developed and supported applications for European Commission\'s Customs Offices using JavaEE and Angular.' +
            'Utilized tools like Jenkins, WebLogic, Jira and Monday.com for efficient project management.' +
            'Mentored newcomers by documenting core concepts on Confluence to facilitate on-boarding.',
    },
    {
        jobTitle: 'Full Stack Software Engineer',
        jobPeriod: 'November 2021 - September 2022',
        companyTitle: 'Hellenic Army',
        jobDescription:
            'Developed and supported military applications for Health Informatics at Hellenic Army using React, PHP (Symfony), and Docker.' +
            'Collaborated with cross-functional teams to enhance Electronic Health Service Center (Η.Κ.Ε.Λ.Υ.) applications.' +
            'Implemented innovative solutions to improve user experience and efficiency in military healthcare technology.',
    },
    {
        jobTitle: 'Full Stack Software Engineer',
        jobPeriod: 'May 2020 - September 2021',
        companyTitle: 'Intrasoft International | Athens, Greece',
        jobDescription:
            'Developed and supported applications for PERSEUS product using JavaEE, Maven, Hibernate, and Primefaces. ' +
            'Assisted in local development migration to Docker for improved efficiency. ' +
            'Mentored newcomers by documenting core concepts on Confluence to facilitate on-boarding.' +
            'Utilized tools like Kafka, Jenkins, Drools, jBPM, WebLogic, WildFly, and Jira.',
    },
    {
        jobTitle: 'Software Trainee',
        jobPeriod: 'November 2019 - April 2020',
        companyTitle: 'Intrasoft International | Athens, Greece',
        jobDescription:
            'Developed and supported applications for the Single Social Security Fund (EFKA) using JavaEE, Primefaces, and Oracle PL/SQL.' +
            'Deployed applications on the Oracle WebLogic server and managed version control with Git and SVN.',
    },
];

const languages = [
    { name: 'Greek', level: 'Native Speaker' },
    { name: 'English', level: 'Professional Working Proficiency' },
    { name: 'Spanish', level: 'Elementary Working Proficiency' },
];

const technologies = [
    'React',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'PHP',
    'Symfony',
    'JavaEE',
    'Docker',
    'PostgreSQL',
    'Oracle',
    'Kafka',
    'Jenkins',
    'Git',
    'Maven',
];

const skillBadges = [
    'Clean Code',
    'Documentation',
    'Collaboration',
    'Problem Solving',
    'Full Stack Development',
    'Scalability',
];

export const MainContent: React.FC = () => (
    <>
        <HeroSection />
        <AboutSection skillBadges={skillBadges} />
        <ExperienceSection jobs={jobs} />
        <SkillsSection languages={languages} technologies={technologies} />
        <ContactSection />
    </>
);
