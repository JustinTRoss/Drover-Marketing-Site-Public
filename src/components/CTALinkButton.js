import * as React from 'react';
import { css, cx } from 'emotion';
import { Link } from 'gatsby';

import {
  lightText,
  darkText,
  buttonBackgroundInverted,
  buttonTextInverted,
} from '../constants/colors';

import Arrow from './icons/Arrow.svg';

const CTALinkButton = ({ style, className, children, to, light, inverted }) => (
  <Link to={to}>
    <span
      style={style}
      className={cx(
        cn.base,
        light && cn.light,
        inverted && cn.inverted,
        className
      )}
    >
      {children}
      <Arrow
        className={cx(
          cn.arrow,
          light && cn.arrowLight,
          inverted && cn.arrowInverted
        )}
      />
    </span>
  </Link>
);

const cn = {
  base: css`
    display: inline-block;
    position: relative;
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 1;
    padding: 1rem 2.625rem;
    transition: 0.25s ease all;

    color: ${darkText};
    border: 2px solid ${darkText};

    &:hover {
      color: ${buttonTextInverted};
      border: 2px solid ${buttonBackgroundInverted};

      background-color: ${buttonBackgroundInverted};
      & svg * {
        fill: ${buttonTextInverted};
      }
    }
  `,
  light: css`
    color: ${lightText};
    border: 2px solid ${lightText};

    &:hover {
      color: ${buttonTextInverted};
      border: 2px solid ${buttonBackgroundInverted};

      background-color: ${buttonBackgroundInverted};
    }
  `,
  arrow: css`
    margin-left: 0.5rem;

    & * {
      fill: ${darkText};
    }
  `,
  arrowLight: css`
    & * {
      fill: ${lightText};
    }
  `,
  arrowInverted: css`
    & * {
      fill: ${buttonTextInverted};
    }
  `,
  inverted: css`
    color: ${buttonTextInverted};
    // & svg * {
    //   fill: ${buttonTextInverted};
    // }
    background-color: ${buttonBackgroundInverted};
    border: 2px solid ${buttonBackgroundInverted};
  `,
};

export default CTALinkButton;
