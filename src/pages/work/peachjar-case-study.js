import React from 'react';
import { css } from 'emotion';

import { smallScreen } from '../../constants/breakpoints';

import Base from '../../components/Base';
import SEO from '../../components/SEO';
import BannerSection from '../../components/sections/BannerSection';
import AboutSection from '../../components/sections/AboutSection';
import BottomCTASection from '../../components/sections/BottomCTASection';
import PageSection from '../../components/layout/PageSection';
import ResponsiveContainer from '../../components/layout/ResponsiveContainer';

// Images and Assets
import { PeachjarCaseStudyBannerImage } from '../../components/queriedImages/BannerImages';
import DualPhonesPJ from '../../components/queriedImages/DualPhonesPJ';

const PeachjarCaseStudy = () => (
  <Base>
    <SEO title="Peachjar case study" />
    <BannerSection
      title="Peachjar"
      subtitle="Mobile first web app"
      BannerImage={<PeachjarCaseStudyBannerImage />}
    />
    {/* TODO: create case study description component */}
    <PageSection>
      <ResponsiveContainer>
        <div className={cn.base}>
          <div className={cn.dualPhones}>
            <DualPhonesPJ />
          </div>
          <div className={cn.info}>
            <h3>Project</h3>
            <p>
              Peachjar needed a family friendly web app to connect parents with
              the latest updates and opportunities from their children's schools
              and districts. It was important to Peachjar that we conform with
              government accessibility requirements and enable customization at
              the individual school and district levels while also maintaining
              backward compatibility with their legacy products. With over 70%
              of traffic coming from mobile devices, the app had to be designed
              and developed for the mobile experience first.
            </p>
            <h3>Solution</h3>
            <p>
              We created a responsive React application focused on the mobile
              experience and continuously ran iterations through accessibility
              test suites to ensure both a pleasant assisted user experience and
              compliance with WCAG 2.0 AA requirements. We used a unified design
              with Peachjar's existing email designs to create a seamless
              experience for parents.
            </p>
            <h3>Conclusion</h3>
            <p>
              Peachjar's new parent application integrated seamlessly into their
              legacy products and created a unified feel across their brand.
              Peachjar's commitment to accessibility improved districts'
              confidence in Peachjar's solution and became a major talking point
              in their sales deck. The new parent application now represents
              ~90% of traffic to Peachjar's sites.
            </p>
          </div>
        </div>
      </ResponsiveContainer>
    </PageSection>
    {/* End case study description component */}
    <AboutSection dark />
    <BottomCTASection
      title="What can we build for you?"
      ctaText="Let's get started"
    />
  </Base>
);

const cn = {
  base: css`
    display: flex;
    justify-content: space-between;

    flex-flow: column nowrap;
    @media (min-width: ${smallScreen}) {
      flex-flow: row nowrap;
      align-items: center;
    }
  `,
  dualPhones: css`
    flex: 0 0 40%;

    margin-top: -2.5rem;
    margin-bottom: 2.5rem;
    @media (min-width: ${smallScreen}) {
      margin-top: 0;
      margin-bottom: 0;
    }
  `,
  info: css`
    flex: 0 0 40%;
    & p:last-child {
      margin-bottom: 0;
    }
  `,
  showcase: css`
    padding: 0 0 0 0;
  `,
};

export default PeachjarCaseStudy;
