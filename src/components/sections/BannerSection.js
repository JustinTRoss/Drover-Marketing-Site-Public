import * as React from 'react';
import { css, cx } from 'emotion';

import { lightText } from '../../constants/colors';
import ResponsiveContainer from '../layout/ResponsiveContainer';
import { BRANDBAR_HEIGHT, BRANDBAR_HEIGHT_PX } from '../../constants/general';

const BannerSection = ({ title, subtitle, className, BannerImage }) => (
  <section className={cx(cn.base, className)}>
    {BannerImage ? BannerImage : null}
    <ResponsiveContainer>
      <div className={cn.bannerContent}>
        <h1>{title}</h1>
        <p className={cn.bannerSubtitle}>{subtitle}</p>
      </div>
    </ResponsiveContainer>
  </section>
);

const cn = {
  base: css`
    position: relative;
    padding-top: ${2 * BRANDBAR_HEIGHT_PX}px;
    padding-bottom: ${BRANDBAR_HEIGHT};
    width: 100vw;
    min-height: 75vh;
    display: flex;
    align-items: center;

    color: ${lightText};
    background: linear-gradient(
      180deg,
      #07060e 0%,
      #0e0b1c 18.18%,
      #14112a 63.54%,
      #1b264f 100%
    );
  `,
  bannerContent: css`
    text-align: center;
  `,
  bannerSubtitle: css`
    font-style: italic;
  `,
};

export default BannerSection;
