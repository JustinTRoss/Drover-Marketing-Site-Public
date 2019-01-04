import React from 'react';
import { Link } from 'gatsby';

import Base from '../../components/Base';
import SEO from '../../components/SEO';
import BannerSection from '../../components/sections/BannerSection';
import PageSection from '../../components/layout/PageSection';
import ResponsiveContainer from '../../components/layout/ResponsiveContainer';
import AboutSection from '../../components/sections/AboutSection';

const NationalMillworksCaseStudy = () => (
  <Base>
    <SEO title="NationalMillworks case study" />
    <BannerSection title="National Millworks" subtitle="Responsive Web App" />
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

export default NationalMillworksCaseStudy;
