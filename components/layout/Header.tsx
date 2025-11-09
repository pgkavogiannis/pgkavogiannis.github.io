import Head from 'next/head';
import React from 'react';

export const Header: React.FC = () => (
    <Head>
        <title>Panagiotis Gkavogiannis' Portfolio</title>

        <meta name="description"
              content="Full Stack Software Engineer portfolio showcasing React, TypeScript, and modern web development projects."/>
        <meta name="keywords" content="Full Stack Developer, React, TypeScript, JavaScript, Software Engineer, Portfolio"/>
        <meta name="author" content="Your Name"/>

        {/* Google Search Console */}
        <meta name="google-site-verification" content="your-verification-code"/>

        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Panagiotis Gkavogiannis' Portfolio"/>
        <meta property="og:description"
              content="Full Stack Software Engineer portfolio showcasing React, TypeScript, and modern web development projects."/>
        <meta property="og:image" content="https://pgkavogiannis.github.io/og-image.png"/>
        <meta property="og:url" content="https://pgkavogiannis.github.io"/>

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Panagiotis Gkavogiannis' Portfolio"/>
        <meta name="twitter:description"
              content="Full Stack Software Engineer portfolio showcasing React, TypeScript, and modern web development projects."/>
        <meta name="twitter:image" content="https://pgkavogiannis.github.io/og-image.png"/>

        {/* Viewport and Charset */}
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        {/* Canonical URL */}
        <link rel="canonical" href="https://pgkavogiannis.github.io"/>

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico"/>
    </Head>
);
