'use client'
import React from 'react';
import { LanguageProvider } from '@/components/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Mission } from '@/components/Mission';
import { Programs } from '@/components/Programs';
import { FeaturedProject } from '@/components/FeaturedProject';
import { Ramadan } from '@/components/Ramadan';
import { Testimonial } from '@/components/Testimonial';
import { Donation } from '@/components/Donation';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { SplashScreen } from '@/components/SplashScreen';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Documents } from '@/components/Documents';

export default function Home() {
  return (
    <LanguageProvider>
      <SplashScreen />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <AnimatedSection animation="fade-up" delay={0}>
          <Mission />
        </AnimatedSection>
        <AnimatedSection animation="fade-up" delay={0}>
          <Programs />
        </AnimatedSection>
        <AnimatedSection animation="zoom-in" delay={0}>
          <FeaturedProject />
        </AnimatedSection>
        <AnimatedSection animation="fade-left" delay={0}>
          <Ramadan />
        </AnimatedSection>
        <AnimatedSection animation="fade-up" delay={0}>
          <Testimonial />
        </AnimatedSection>
        <AnimatedSection animation="fade-right" delay={0}>
          <Donation />
        </AnimatedSection>
        <AnimatedSection animation="fade-up" delay={0}>
          <Documents />
        </AnimatedSection>
        <AnimatedSection animation="fade-up" delay={0}>
          <Footer />
        </AnimatedSection>
        <Toaster />
      </main>
    </LanguageProvider>
  );
}
