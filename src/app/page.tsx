import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import ResearchSection from '@/app/components/ResearchSection';
import CredentialsSection from '@/app/components/CredentialsSection';
import TeachingSkillsSection from '@/app/components/TeachingSkillsSection';
import NewsSection from '@/app/components/NewsSection';
import ContactSection from '@/app/components/ContactSection';
import ScrollAnimationInit from '@/app/components/ScrollAnimationInit';

export default function HomePage() {
  return (
    <>
      <div className="grid-bg-fixed" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />
      <ScrollAnimationInit />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <CredentialsSection />
        <TeachingSkillsSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
