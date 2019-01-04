import * as React from 'react';
import { css } from 'emotion';

import ResponsiveContainer from '../layout/ResponsiveContainer';
import PageSection from '../layout/PageSection';
import ImageCard from '../ImageCard';
import SanDiegoSkyline from '../queriedImages/SanDiegoSkyline';
import SanFranciscoSkyline from '../queriedImages/SanFranciscoSkyline';

const LocationSection = () => (
  <PageSection id="about">
    <ResponsiveContainer>
      <div className={cn.title}>
        <h1>Where you can find us</h1>
        <p className={cn.description}>
          We’re a distributed team, but here are a few places we live and work.
        </p>
      </div>
      <div className={cn.locationTiles}>
        <ImageCard ImageComponent={SanFranciscoSkyline} title="San Francisco" />
        <ImageCard
          ImageComponent={SanDiegoSkyline}
          imagePosition="50% 10%"
          title="San Diego"
        />
      </div>
    </ResponsiveContainer>
  </PageSection>
);

const cn = {
  title: css`
    text-align: center;
    margin: 3rem 0rem;
  `,
  description: css`
    font-style: italic;
  `,
  locationTiles: css`
    display: flex;
    flex-flow: row wrap;
  `,
};

export default LocationSection;
