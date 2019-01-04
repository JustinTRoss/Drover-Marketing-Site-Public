import React from 'react';

import Base from '../components/Base';
import SEO from '../components/SEO';
import AlternateBannerSection from '../components/sections/AlternateBannerSection';
import AboutSection from '../components/sections/AboutSection';
import LocationSection from '../components/sections/LocationSection';
import BottomCTASection from '../components/sections/BottomCTASection';

const AboutPage = () => (
  <Base>
    <SEO title="Home" keywords={['App', 'Software']} />
    <AlternateBannerSection title="About our Company" />
    <AboutSection />
    <BottomCTASection
      dark
      title="Want to learn more? Check out some of our past work."
      ctaText="View Case Studies"
    />
    <LocationSection />
  </Base>
);

export default AboutPage;
