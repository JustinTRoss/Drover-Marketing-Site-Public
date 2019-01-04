import React from 'react';

import Base from '../components/Base';
import SEO from '../components/SEO';
import AlternateBannerSection from '../components/sections/AlternateBannerSection';
import CaseStudySection from '../components/sections/CaseStudySection';
import BottomCTASection from '../components/sections/BottomCTASection';
import DualPhonesFB from '../components/queriedImages/DualPhonesFB';
import DualPhonesPJ from '../components/queriedImages/DualPhonesPJ';

const WorkPage = () => (
  <Base>
    <SEO title="Home" keywords={['App', 'Software']} />
    <AlternateBannerSection
      title="Our Work"
      subtitle="We have worked with organizations of all sizes to design and deliver complex applications that delight."
    />
    <CaseStudySection
      title="Facebook"
      subtitle="Mobile, Web, iOS, Android"
      description="Cross platform application for monitoring and acting upon alerts in
            datacenters."
      to="/work/facebook-case-study"
      ImageComponent={DualPhonesFB}
    />
    <CaseStudySection
      title="Peachjar"
      subtitle="Mobile first web app"
      description="An app that allows parents to access the latest opportunities from their children's schools."
      to="/work/peachjar-case-study"
      ImageComponent={DualPhonesPJ}
    />
    <BottomCTASection
      colorful
      title="What can we build for you?"
      ctaText="Let's get started"
    />
  </Base>
);

export default WorkPage;
