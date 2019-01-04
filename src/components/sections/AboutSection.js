import * as React from 'react';
import { css } from 'emotion';

import { smallScreen } from '../../constants/breakpoints';

import CTALinkButton from '../CTALinkButton';
import ResponsiveContainer from '../layout/ResponsiveContainer';
import PageSection from '../layout/PageSection';

const AboutSection = ({ dark }) => (
  <PageSection id="about" dark={dark}>
    <ResponsiveContainer>
      <div className={cn.base}>
        <div className={cn.column}>
          <h2>We Create Custom Software That Transforms Organizations.</h2>
        </div>
        <div className={cn.column}>
          <div className={cn.about}>
            <p>
              Drover is a San Francisco and San Diego-based design and
              engineering consultancy.
            </p>
            <p>
              Our team builds mobile apps, progressive web apps, GraphQL
              APIs–any digital product that interfaces with users–for some of
              the world’s most trusted organizations.
            </p>
            <p>
              Launching a new product? Need help with an existing project?
              Looking to level up your team?
            </p>
          </div>
          <CTALinkButton to="/contact" inverted>
            Work With Us
          </CTALinkButton>
        </div>
      </div>
    </ResponsiveContainer>
  </PageSection>
);

const cn = {
  base: css`
    display: flex;
    justify-content: space-between;

    flex-flow: column nowrap;
    @media (min-width: ${smallScreen}) {
      flex-flow: row nowrap;

      padding-top: 6rem;
      padding-bottom: 6rem;
    }
  `,
  column: css`
    flex: 0 0 40%;
  `,
  about: css`
    margin-bottom: 3rem;
  `,
};

export default AboutSection;
