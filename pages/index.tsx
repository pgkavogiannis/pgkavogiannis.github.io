import Head from 'next/head';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import { Layout } from '../components/layout/layout';
import { MainContent } from '../components/layout/MainContent';

const Home: NextPageWithLayout = () => (
    <>
        <Head>
            {/* Primary Meta Tags */}
            <title>Panagiotis Gkavogiannis | Full Stack Software Engineer</title>
            <meta name="description" content="Full Stack Software Engineer with 5+ years of experience in React, TypeScript, PHP, and JavaEE. I build scalable, well-documented web applications using modern technologies. Available for new projects." />
            <meta name="keywords" content="Full Stack Developer, React Developer, TypeScript, JavaScript, Software Engineer, Athens, Greece, Web Development" />
            <meta name="author" content="Panagiotis Gkavogiannis" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="UTF-8" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://pgkavogiannis.github.io/" />
            <meta property="og:title" content="Panagiotis Gkavogiannis | Full Stack Software Engineer" />
            <meta property="og:description" content="Full Stack Software Engineer with expertise in React, TypeScript, PHP, and JavaEE. Building scalable web applications." />
            <meta property="og:image" content="https://pgkavogiannis.github.io/og-image.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content="https://pgkavogiannis.github.io/" />
            <meta name="twitter:title" content="Panagiotis Gkavogiannis | Full Stack Developer" />
            <meta name="twitter:description" content="Full Stack Software Engineer portfolio - React, TypeScript, PHP, JavaEE" />
            <meta name="twitter:image" content="https://pgkavogiannis.github.io/og-image.png" />

            {/* Canonical URL */}
            <link rel="canonical" href="https://pgkavogiannis.github.io/" />

            {/* Alternate Languages */}
            <link rel="alternate" hrefLang="en" href="https://pgkavogiannis.github.io/en" />
            <link rel="alternate" hrefLang="el" href="https://pgkavogiannis.github.io/el" />
            <link rel="alternate" hrefLang="es" href="https://pgkavogiannis.github.io/es" />
            <link rel="alternate" hrefLang="x-default" href="https://pgkavogiannis.github.io" />

            {/* Favicon */}
            <link rel="icon" href="/assets/favicon.ico" />
            <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />

            {/* Preconnect to external resources */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />

            {/* Robots and Crawlers */}
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: 'Panagiotis Gkavogiannis',
                        url: 'https://pgkavogiannis.github.io',
                        image: 'https://pgkavogiannis.github.io/avatar.png',
                        description: 'Full Stack Software Engineer',
                        jobTitle: 'Full Stack Software Engineer',
                        birthPlace: 'Athens, Greece',
                        sameAs: [
                            'https://linkedin.com/in/panagiotis.gkavogiannis',
                            'https://github.com/pgkavogiannis',
                            'https://gitlab.com/pgkavogiannis',
                        ],
                        contact: {
                            '@type': 'ContactPoint',
                            contactType: 'Personal',
                            email: 'panagiotis.gkavogiannis@proton.me',
                        },
                        knowsAbout: [
                            'React',
                            'TypeScript',
                            'Next.js',
                            'JavaScript',
                            'PHP',
                            'JavaEE',
                            'Docker',
                            'PostgreSQL',
                            'Full Stack Development',
                        ],
                        worksFor: {
                            '@type': 'Organization',
                            name: 'Full Stack Developer (Freelance)',
                        },
                    }),
                }}
            />

            {/* Organization Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            {
                                '@type': 'ListItem',
                                position: 1,
                                name: 'Home',
                                item: 'https://pgkavogiannis.github.io',
                            },
                            {
                                '@type': 'ListItem',
                                position: 2,
                                name: 'About',
                                item: 'https://pgkavogiannis.github.io#about',
                            },
                            {
                                '@type': 'ListItem',
                                position: 3,
                                name: 'Experience',
                                item: 'https://pgkavogiannis.github.io#experience',
                            },
                            {
                                '@type': 'ListItem',
                                position: 4,
                                name: 'Contact',
                                item: 'https://pgkavogiannis.github.io#contact',
                            },
                        ],
                    }),
                }}
            />

            {/* Google Search Console */}
            <meta name="google-site-verification" content="your-verification-code-here" />

            {/* Performance: Prevent Cumulative Layout Shift */}
            <meta name="color-scheme" content="light dark" />
        </Head>

        <MainContent />
    </>
);

Home.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default Home;
