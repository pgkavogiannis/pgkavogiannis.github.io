import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { SkillsSection } from '../sections/SkillsSection';
import { ContactSection } from '../sections/ContactSection';

const jobs = [
    {
        jobTitle: 'Tech Lead / Team Lead',
        jobPeriod: 'July 2026 - Present',
        companyTitle: 'Sword Services Greece S.A.',
        jobDescription:
            "Leading a cross-functional engineering team delivering enterprise applications for the European Commission's Customs Offices. " +
            'Setting technical direction, establishing code quality standards, and driving CI/CD quality gates in Jenkins. ' +
            'Mentoring junior engineers and overseeing structured knowledge transfer through XWiki documentation.',
    },
    {
        jobTitle: 'Full Stack Software Engineer',
        jobPeriod: 'October 2022 - June 2026',
        companyTitle: 'Sword Services Greece S.A.',
        jobDescription:
            "Engineered and maintained enterprise applications for the European Commission's Customs Offices using JavaEE (Maven, EclipseLink) and Angular (eUI Framework). " +
            'Drove test coverage uplift across multiple modules, establishing quality gates in Jenkins CI/CD pipelines that reduced regression defects. ' +
            'Led the local development migration to Azure Cloud, significantly reducing environment provisioning time. ' +
            "Onboarded and mentored junior engineers, authoring Confluence/XWiki knowledge articles now part of the team's standard onboarding programme.",
    },
    {
        jobTitle: 'Full Stack Software Engineer',
        jobPeriod: 'November 2021 - September 2022',
        companyTitle: 'Hellenic Army, KEPYES',
        jobDescription:
            'Developed and maintained H.K.E.L.Y. (Electronic Health Service Centre), a military health informatics platform, using React, PHP (Symfony), and Docker. ' +
            'Delivered multiple features within a mandatory service period, operating under military-grade security and data classification requirements.',
    },
    {
        jobTitle: 'Full Stack Software Engineer',
        jobPeriod: 'May 2020 - September 2021',
        companyTitle: 'Intrasoft International (Netcompany)',
        jobDescription:
            'Engineered applications for the PERSEUS product suite using JavaEE (Maven, Hibernate, Primefaces), deployed on WildFly and WebLogic. ' +
            'Drove local development migration to Docker, improving team onboarding efficiency. ' +
            'Leveraged Kafka, Drools, and jBPM for event-driven and rules-based processing pipelines. ' +
            'Mentored newcomers and authored structured onboarding documentation on Confluence.',
    },
    {
        jobTitle: 'Software Trainee',
        jobPeriod: 'November 2019 - April 2020',
        companyTitle: 'Intrasoft International (Netcompany)',
        jobDescription:
            'Developed applications for the Single Social Security Fund (EFKA / e-ΕΦΚΑ) using JavaEE (Maven, JDBC), Primefaces, and Oracle PL/SQL. ' +
            'Deployed applications on Oracle WebLogic; used both Git and SVN for version control.',
    },
];

const languages = [
    { name: 'Greek', level: 'Native Speaker' },
    { name: 'English', level: 'Professional Working Proficiency' },
    { name: 'Spanish', level: 'Elementary Working Proficiency' },
];

const technologies = [
    'Java EE',
    'Angular',
    'TypeScript',
    'React',
    'Next.js',
    'SQL',
    'Oracle PL/SQL',
    'Maven',
    'Jenkins',
    'Docker',
    'Git',
    'Azure Cloud',
    'JMS',
    'Kafka',
    'Oracle WebLogic',
    'WildFly',
    'Apache TomEE',
    'Hibernate',
    'EclipseLink',
    'Oracle DB',
    'PostgreSQL',
    'MariaDB',
    'Drools',
    'jBPM',
    'Tailwind CSS',
    'Jira',
    'Confluence',
    'JDBC',
    'Sonatype Nexus OSS',
    'Monday.com',
];

const skillBadges = [
    'Clean Code',
    'Documentation',
    'Collaboration',
    'Problem Solving',
    'Full Stack Development',
    'Scalability',
    'Leadership',
];

const certifications = [
    {
        name: 'AWS Certified Solutions Architect – Associate',
        issuer: 'Amazon Web Services',
        year: '2026',
    },
];

const projects = [
    {
        title: 'misthotosifreelancer.gr',
        description:
            'A Greek net income calculator for freelancers. Helps independent professionals estimate their take-home pay after taxes and social contributions.',
        url: 'https://misthotosifreelancer.gr',
        tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    },
    {
        title: 'TravelJox.com',
        description:
            'A booking platform for travel offices and end customers. Designed and developed end-to-end from architecture through deployment.',
        tech: ['React', 'AngularJS', 'JavaEE', 'EclipseLink', 'Maven', 'Apache TomEE'],
    },
];

export const MainContent: React.FC = () => (
    <>
        <HeroSection />
        <AboutSection skillBadges={skillBadges} />
        <ExperienceSection jobs={jobs} />
        <ProjectsSection projects={projects} />
        <SkillsSection languages={languages} technologies={technologies} certifications={certifications} />
        <ContactSection />
    </>
);
