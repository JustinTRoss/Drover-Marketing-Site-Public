import * as React from 'react';
import { css, cx } from 'emotion';

import { lightText, lightBackground } from '../../constants/colors';
import { tablet } from '../../constants/breakpoints';

import ResponsiveContainer from '../layout/ResponsiveContainer';
import PageSection from '../layout/PageSection';
import CTALinkButton from '../CTALinkButton';

const CaseStudySection = ({
  title,
  subtitle,
  description,
  to,
  dark,
  ImageComponent,
}) => {
  const isCTAButtonInverted = dark;
  const isDarkSection = dark;
  const sectionClass = dark ? cn.darkCaseStudy : cn.lightCaseStudy;

  return (
    <PageSection dark={isDarkSection} className={cx(cn.base, sectionClass)}>
      <ImageComponent
        objFit="none"
        objPosition="12.5% 0%"
        style={{
          overflow: 'unset',
          position: 'absolute',
          top: 0,
          left: '50%',
          bottom: 0,
          right: 0,
        }}
        className={cn.image}
      />
      <ResponsiveContainer>
        <div className={cn.wrapper}>
          <div className={cn.caseStudyInfo}>
            <h2>{title}</h2>
            <h5>{subtitle}</h5>
            <hr />
            <p className={cn.caseStudyDescription}>{description}</p>
            <CTALinkButton
              light={isCTAButtonInverted}
              to={to}
              className={cn.button}
            >
              View Case Study
            </CTALinkButton>
          </div>
        </div>
      </ResponsiveContainer>
    </PageSection>
  );
};

const cn = {
  base: css`
    overflow: hidden;
    position: relative;
  `,
  wrapper: css`
    display: flex;
    align-items: center;

    justify-content: center;
    @media (min-width: ${tablet}) {
      justify-content: flex-start;
    }
  `,
  lightCaseStudy: css`
    border-bottom: 1em solid ${lightText};
  `,
  darkCaseStudy: css`
    border-bottom: 1em solid ${lightBackground};
  `,
  caseStudyInfo: css`
    @media (min-width: ${tablet}) {
      max-width: 18rem;
    }
  `,
  caseStudyDescription: css`
    margin-top: 1.5rem;
  `,
  button: css`
    margin-top: 3rem;
  `,
  image: css`
    display: none;
    @media (min-width: ${tablet}) {
      display: unset;
    }
  `,
};

export default CaseStudySection;
