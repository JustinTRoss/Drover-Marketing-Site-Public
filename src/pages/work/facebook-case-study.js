import React from 'react';
import { css } from 'emotion';

import { smallScreen } from '../../constants/breakpoints';
import { colors } from '../../constants/colors';

import Base from '../../components/Base';
import SEO from '../../components/SEO';
import BannerSection from '../../components/sections/BannerSection';
import PageSection from '../../components/layout/PageSection';
import ResponsiveContainer from '../../components/layout/ResponsiveContainer';
import AboutSection from '../../components/sections/AboutSection';

// Images and Assets
import { FacebookCaseStudyBannerImage } from '../../components/queriedImages/BannerImages';
import DualPhonesFB from '../../components/queriedImages/DualPhonesFB';
import FacebookShowcase from '../../components/queriedImages/FacebookShowcase';

const FacebookCaseStudy = () => (
  <Base>
    <SEO title="Facebook case study" />
    <BannerSection
      title="Facebook"
      subtitle="Mobile, Web, iOS, Android"
      BannerImage={<FacebookCaseStudyBannerImage />}
    />
    {/* TODO: create case study description component*/}
    <PageSection>
      <ResponsiveContainer>
        <div className={cn.base}>
          <div className={cn.dualPhones}>
            <DualPhonesFB />
          </div>
          <div className={cn.info}>
            <h3>Project</h3>
            <p>
              The client needed a way to monitor datacenter alerts in real time
              that would be accessible out in the field and also viewable on
              large TVs in offices.
            </p>
            <h3>Solution</h3>
            <p>
              We created an iOS and Android app using React Native to make
              viewing and responding to alerts possible when away from the
              office or out at the problem site.
            </p>
            <h3>Conclusion</h3>
            <p>
              We created a web app with two views: a dashboard view suited for
              getting high level information about the current status of alerts
              from a quick glance at the monitor, and another desktop view with
              identical functionality to the mobile apps.
            </p>
          </div>
        </div>
      </ResponsiveContainer>
    </PageSection>
    {/* End case study description component*/}
    <PageSection className={cn.showcase} dark>
      <FacebookShowcase
        objFit="contain"
        objPosition="50% 50%"
        style={{ maxHeight: '750px' }}
        imgStyle={{ maxHeight: '750px' }}
      />
    </PageSection>
    <AboutSection />
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
  info: css`
    flex: 0 0 40%;
    & p:last-child {
      margin-bottom: 0;
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
  showcase: css`
    padding: 0 0 0 0;
    background: radial-gradient(750px at 50% 50%, #303b64 0%, #000027 100%);
    border-top: 1rem solid ${colors.lightText};
    border-bottom: 1rem solid ${colors.lightText};
    border-top-left-radius: 40%;
    border-bottom-right-radius: 40%;
  `,
};

export default FacebookCaseStudy;
