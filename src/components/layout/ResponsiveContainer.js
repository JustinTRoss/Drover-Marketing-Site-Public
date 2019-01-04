import * as React from 'react';
import { css, cx } from 'emotion';
import {
  tablet,
  smallScreen,
  desktop,
  largeScreen,
} from '../../constants/breakpoints';

const ResponsiveContainer = ({ style, className, children }) => (
  <div style={style} className={cx(cn.base, className)}>
    {children}
  </div>
);

const cn = {
  base: css`
    // Mobile first
    position: relative;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;

    @media (min-width: ${tablet}) {
      max-width: 584px;
    }
    @media (min-width: ${smallScreen}) {
      max-width: 720px;
    }
    @media (min-width: ${desktop}) {
      max-width: 960px;
    }
    @media (min-width: ${largeScreen}) {
      max-width: 80%;
    }
  `,
};

export default ResponsiveContainer;
