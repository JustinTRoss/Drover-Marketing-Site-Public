import * as React from 'react';
import { css, cx } from 'emotion';

import {
  darkBackground,
  darkText,
  lightBackground,
  lightText,
} from '../../constants/colors';
import { BRANDBAR_HEIGHT } from '../../constants/general';

const PageSection = ({ id, className, style, children, dark }) => (
  <section
    id={id}
    style={style}
    className={cx(cn.base, dark && cn.dark, className)}
  >
    {children}
  </section>
);

const cn = {
  base: css`
    padding-top: ${BRANDBAR_HEIGHT};
    padding-bottom: ${BRANDBAR_HEIGHT};
    width: 100vw;

    color: ${darkText};
    background-color: ${lightBackground};
  `,
  dark: css`
    color: ${lightText};
    background-color: ${darkBackground};
  `,
};

export default PageSection;
