import * as React from 'react';
import { css } from 'emotion';

import { lightText } from '../../constants/colors';
import { BRANDBAR_HEIGHT, BRANDBAR_HEIGHT_PX } from '../../constants/general';

import ResponsiveContainer from '../layout/ResponsiveContainer';

const AlternateBannerSection = ({ title, subtitle }) => (
  <section className={cn.splash}>
    <ResponsiveContainer className={cn.content}>
      <div>
        <div className={cn.display}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </ResponsiveContainer>
  </section>
);

const cn = {
  splash: css`
    position: relative;
    padding-top: ${2 * BRANDBAR_HEIGHT_PX}px;
    padding-bottom: ${BRANDBAR_HEIGHT};
    width: 100vw;
    min-height: 75vh;
    display: flex;
    align-items: center;

    color: ${lightText};
    // TODO: different gradient than main page that makes more sense for centered text
    background: radial-gradient(650px at 50% 50%, #303b64 0%, #000027 100%);
  `,
  content: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  display: css`
    text-align: center;
    max-width: 650px;
    margin-bottom: 4.2361rem;
    z-index: 2;
  `,
};

export default AlternateBannerSection;
