import * as React from 'react';
import { css } from 'emotion';
import { StaticQuery, graphql } from 'gatsby';
import Image from './Image';

import { lightText } from '../constants/colors';
import { BRANDBAR_HEIGHT } from '../constants/general';
import Triangle from './icons/Triangle.svg';
import CTALinkButton from './CTALinkButton';
import ResponsiveContainer from './layout/ResponsiveContainer';
import { extremelyLargeScreen, smallScreen } from '../constants/breakpoints';

export const ImageFragment = graphql`
  fragment Image on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;
const SplashImage = graphql`
  query {
    circle: file(relativePath: { eq: "all-devices-mixed-circle-3.png" }) {
      ...Image
    }
  }
`;

const Splash = () => (
  <StaticQuery
    query={SplashImage}
    render={data => (
      <section className={cn.splash}>
        <div className={cn.triangle}>
          <Triangle preserveAspectRatio="xMaxYMax meet" />
        </div>
        <Image fluid={data.circle.childImageSharp.fluid} />
        <ResponsiveContainer className={cn.content}>
          <div>
            <div className={cn.display}>
              <h1>A Custom Software Design and Development Team.</h1>
              <p>
                We help organizations build better software, happier teams, and
                more productive users.
              </p>
            </div>
            <CTALinkButton light to="/contact#contact-form">
              Get Started
            </CTALinkButton>
          </div>
          <div className={cn.boxWrapper}>
            {/* <Box className={cn.box} /> */}
          </div>
          <Image
            fluid={data.circle.childImageSharp.fluid}
            objFit="contain"
            objPosition="90% 50%"
            className={cn.circleImage}
            style={{
              overflow: 'unset',
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
            imgStyle={{
              zIndex: 1,
              top: '-10%',
              width: '110%',
              height: '120%',
            }}
          />
        </ResponsiveContainer>
      </section>
    )}
  />
);

const cn = {
  splash: css`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    color: ${lightText};
    background: radial-gradient(650px at 50% 50%, #303b64 0%, #000027 100%);

    text-align: center;
    @media (min-width: ${smallScreen}) {
      text-align: start;
    }
  `,
  triangle: css`
    position: absolute;
    top: ${BRANDBAR_HEIGHT};
    right: 0;
    bottom: 0;
    left: 568px;
    z-index: 0;

    display: none;
    @media (min-width: ${smallScreen}) {
      display: unset;
    }
  `,
  circleImage: css`
    display: none;
    @media (min-width: ${'10000px' || extremelyLargeScreen}) {
      display: unset;
    }
  `,
  content: css`
    display: flex;
    align-items: center;

    justify-content: center;
    @media (min-width: ${smallScreen}) {
      justify-content: space-between;
    }
  `,
  display: css`
    max-width: 500px;
    margin-bottom: 4.2361rem;
    z-index: 2;
  `,
};

export default Splash;
