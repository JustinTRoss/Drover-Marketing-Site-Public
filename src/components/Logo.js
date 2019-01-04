import React from 'react';
import { Link } from 'gatsby';
import { cx, css } from 'emotion';

import { colors } from '../constants/colors';

const Logo = ({ className, small, muted }) => (
  <Link
    className={cx(cn.base, small && cn.small, muted && cn.muted, className)}
    to="/"
  >
    Drover
  </Link>
);

const cn = {
  base: css`
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 2.625rem;
    color: ${colors.logoText};
    text-decoration: none;
  `,
  small: css`
    font-size: 1.75rem;
  `,
  muted: css`
    color: ${colors.mutedLogoText};
  `,
};

export default Logo;
