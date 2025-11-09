import React from 'react';
import { ContainerLayout } from '../layout/container-layout';

export const ContactSection: React.FC = () => (
    <section id="contact" className="py-4 md:py-8 bg-base-100">
        <ContainerLayout>
            {/* Main Contact Card with Better Contrast */}
            <div className="card bg-gradient-to-r from-primary via-accent to-secondary shadow-2xl text-primary-content overflow-hidden">
                <div className="card-body text-center py-16">
                    {/* Main Heading */}
                    <h2 className="card-title justify-center text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
                        Let's Build Something Great Together
                    </h2>

                    {/* Tagline with better contrast */}
                    <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 font-medium drop-shadow-md">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>

                    {/* Divider */}
                    <div className="divider divider-primary opacity-30 my-4"></div>

                    {/* Contact Methods Grid - Improved Contrast */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                        {/* Email Card */}
                        <a
                            href="mailto:panagiotis.gkavogiannis@proton.me"
                            className="group transition-all duration-300 hover:scale-105"
                        >
                            <div
                                className="bg-white/95 backdrop-blur-md p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">✉️</div>
                                <p className="text-sm font-bold text-tj-dark-blue opacity-70 mb-2 uppercase tracking-wide">Email</p>
                                <p className="font-bold text-lg text-tj-dark-blue break-all hover:text-primary transition-colors">
                                    panagiotis.gkavogiannis@proton.me
                                </p>
                                <p className="text-xs text-gray-600 mt-3">Click to send an email</p>
                            </div>
                        </a>

                        {/* LinkedIn Card */}
                        <a
                            href="https://linkedin.com/in/panagiotis-gkavogiannis"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group transition-all duration-300 hover:scale-105"
                        >
                            <div
                                className="bg-white/95 backdrop-blur-md p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">💼</div>
                                <p className="text-sm font-bold text-tj-dark-blue opacity-70 mb-2 uppercase tracking-wide">LinkedIn</p>
                                <p className="font-bold text-lg text-tj-dark-blue hover:text-primary transition-colors">View Profile</p>
                                <p className="text-xs text-gray-600 mt-3">Connect with me</p>
                            </div>
                        </a>

                        {/* GitHub Card */}
                        <a
                            href="https://github.com/pgkavogiannis"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group transition-all duration-300 hover:scale-105"
                        >
                            <div
                                className="bg-white/95 backdrop-blur-md p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">👨‍💻</div>
                                <p className="text-sm font-bold text-tj-dark-blue opacity-70 mb-2 uppercase tracking-wide">GitHub</p>
                                <p className="font-bold text-lg text-tj-dark-blue hover:text-primary transition-colors">View Projects</p>
                                <p className="text-xs text-gray-600 mt-3">Check my repositories</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </ContainerLayout>
    </section>
);
