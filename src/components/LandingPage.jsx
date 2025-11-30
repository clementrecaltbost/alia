import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './landing/Navigation';
import HeroSlider from './landing/HeroSlider';
import StorySection from './landing/StorySection';
import FeaturesSection from './landing/FeaturesSection';
import TeamSection from './landing/TeamSection';
import ReviewSection from './landing/ReviewSection';
import Footer from './landing/Footer';

export default function LandingPage() {
  return (
    <div className="bg-white">
      <Navigation />
      <HeroSlider />
      <FeaturesSection />
      <StorySection />
      <TeamSection />
      <ReviewSection />
      <Footer />
    </div>
  );
}

