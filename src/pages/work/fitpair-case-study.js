import React from 'react';
import { Link } from 'gatsby';

import Base from '../../components/Base';
import SEO from '../../components/SEO';
import BannerSection from '../../components/sections/BannerSection';
import PageSection from '../../components/layout/PageSection';
import ResponsiveContainer from '../../components/layout/ResponsiveContainer';
import AboutSection from '../../components/sections/AboutSection';

const FitPairCaseStudy = () => (
  <Base>
    <SEO title="FitPair case study" />
    <BannerSection title="FitPair" subtitle="Mobile, Web, Android, iOS" />
    <PageSection>
      <ResponsiveContainer>
        <div>Case study content and assets.</div>
      </ResponsiveContainer>
    </PageSection>
    <PageSection dark>
      <ResponsiveContainer>
        More of our work.
        <Link to="/work/peachjar-case-study">&lt;- Peachjar </Link>
        <Link to="/work/facebook-case-study">Facebook -&gt;</Link>
      </ResponsiveContainer>
    </PageSection>
    <AboutSection />
  </Base>
);

export default FitPairCaseStudy;
