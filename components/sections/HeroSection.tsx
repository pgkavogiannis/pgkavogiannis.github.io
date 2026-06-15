import React from 'react';
import { ContainerLayout } from '../layout/container-layout';

export const HeroSection: React.FC = () => (
    <section id="hero" className="bg-gradient-to-br from-tj-dark-blue via-neutral to-primary py-4 md:py-8">
        <ContainerLayout>
            <div className="flex flex-col items-center text-center gap-4">
                {/* Avatar */}
                <div className="avatar">
                    <div className="w-32 md:w-40 rounded-full ring-4 ring-primary ring-offset-2 ring-offset-tj-dark-blue overflow-hidden">
                        <img
                            src="https://avatars.githubusercontent.com/u/59098876?v=4"
                            alt="Panagiotis Gkavogiannis"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-3">
                    <h1 className="text-4xl md:text-6xl font-bold text-neutral-content/80">Panagiotis Gkavogiannis</h1>
                    <p className="text-2xl md:text-3xl font-semibold text-secondary">Tech Lead / Team Lead</p>
                    <p className="text-lg text-neutral-content/80 max-w-2xl mx-auto leading-relaxed">
                        Senior Full Stack Software Engineer with 6 years of experience delivering enterprise-grade applications for EU
                        public sector clients — including the European Commission&apos;s Customs domain and the Greek Social Security Fund
                        (EFKA). Specialised in JavaEE, Angular (eUI Framework), and event-driven architectures. Experienced in technical
                        mentoring and structured knowledge transfer within regulated, compliance-heavy environments.
                    </p>
                </div>

                {/* Social Links Preview */}
                <div className="flex gap-6 pt-4 text-2xl text-secondary">
                    <a href="https://linkedin.com" title="LinkedIn" className="hover:text-primary transition">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com" title="GitHub" className="hover:text-primary transition">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="mailto:panagiotis.gkavogiannis@proton.me" title="Email" className="hover:text-primary transition">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        </ContainerLayout>
    </section>
);
