import * as React from 'react';
import { css, cx } from 'emotion';

import { fluidType } from '../constants/typography';
import 'normalize.css';
import './Base.css';

import Header from './Header';
import Footer from './Footer';

const baseFontSize = fluidType('1rem', '1.125rem');

const Base = ({ children }) => (
  <div className={cx(baseFontSize, cn.base)}>
    <Header />
    <main className={cn.main}>{children}</main>
    <Footer />
  </div>
);

const cn = {
  base: css`
    display: flex;
    flex-flow: column nowrap;
    min-height: 100vh;
  `,
  main: css`
    flex: 1 1 auto;
  `,
};

export default Base;
