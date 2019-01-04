import * as React from 'react';
import { css, cx } from 'emotion';

import { lightText, darkText, droverBlue } from '../constants/colors';

const Button = ({ style, className, children, type, light, inverted }) => (
  <button
    type={type}
    style={style}
    className={cx(
      cn.base,
      light && cn.light,
      inverted && cx(cn.light, cn.inverted),
      className
    )}
  >
    {children}
  </button>
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
      color: ${lightText};
      background-color: ${droverBlue};
      border: 2px solid ${droverBlue};
      & * {
        fill: ${lightText};
      }
    }
  `,
  light: css`
    color: ${lightText};
    border: 2px solid ${lightText};
    &:hover {
      background-color: ${droverBlue};
      border: 2px solid ${droverBlue};
    }
  `,
  inverted: css`
    background-color: ${droverBlue};
    border: 2px solid ${droverBlue};
  `,
};

export default Button;
