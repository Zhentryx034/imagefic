import React from 'react';
import Hero from './sections/Hero';
import GallerySection from './sections/GallerySection';
import HighlightSection from './sections/HighlightSection';
import Footer from '../Footer';

const LandingPage: React.FC = () => {
  return (
    <main className="relative w-full h-auto bg-cover bg-center bg-no-repeat flex flex-col">
      <Hero />
      <GallerySection />
      <HighlightSection />
      <Footer />
    </main>
  );
};

export default LandingPage;
