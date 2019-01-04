import React from 'react';

import Base from '../components/Base';
import Splash from '../components/Splash';
import AboutSection from '../components/sections/AboutSection';
import CaseStudySection from '../components/sections/CaseStudySection';
import SEO from '../components/SEO';
import BottomCTASection from '../components/sections/BottomCTASection';
import DualPhonesFB from '../components/queriedImages/DualPhonesFB';
import DualPhonesPJ from '../components/queriedImages/DualPhonesPJ';

const indexKeywords = [
  'Drover',
  'App',
  'Software',
  'Consultancy',
  'Developer',
  'Engineer',
  'Design',
  'Agency',
  'React Native',
  'React',
  'GraphQL',
];

const IndexPage = () => (
  <Base>
    <SEO title="Home" keywords={indexKeywords} />
    <Splash />
    <AboutSection />
    <CaseStudySection
      dark
      title="Facebook"
      subtitle="Mobile, Web, iOS, Android"
      description="Cross platform application for monitoring and responding to alerts in Facebook’s global datacenters."
      to="/work/facebook-case-study"
      ImageComponent={DualPhonesFB}
    />
    <CaseStudySection
      dark
      title="Peachjar"
      subtitle="Mobile first web app"
      description="An app that allows parents to access the latest opportunities from their children's schools."
      to="/work/peachjar-case-study"
      ImageComponent={DualPhonesPJ}
    />
    <BottomCTASection colorful />
  </Base>
);

export default IndexPage;
