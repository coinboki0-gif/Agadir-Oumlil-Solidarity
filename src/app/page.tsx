"use client"

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

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Mission />
        <Programs />
        <FeaturedProject />
        <Ramadan />
        <Testimonial />
        <Donation />
        <Footer />
        <Toaster />
      </main>
    </LanguageProvider>
  );
}
