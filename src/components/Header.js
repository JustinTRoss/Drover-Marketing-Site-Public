import React from 'react';
import { css, cx } from 'emotion';
import { Link } from 'gatsby';

import { BLOG_URL } from '../constants/urls';
import { colors, colorWithAlpha } from '../constants/colors';
import { tablet, desktop } from '../constants/breakpoints';
import { BRANDBAR_HEIGHT } from '../constants/general';

import ResponsiveContainer from './layout/ResponsiveContainer';
import Logo from './Logo';

const Header = ({ dark }) => (
  <header className={cx(cn.base, dark && cn.dark)}>
    <ResponsiveContainer className={cn.wrapper}>
      <Logo />
      <nav className={cx(cn.nav, dark && cn.navDark)} role="navigation">
        <Link className={cn.navItem} to="/work">
          Work
        </Link>
        <Link className={cn.navItem} to="/about">
          About
        </Link>
        <a
          className={cn.navItem}
          href={BLOG_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
        <Link className={cn.navItem} to="/contact">
          Contact
        </Link>
      </nav>
    </ResponsiveContainer>
  </header>
);

const cn = {
  base: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: ${BRANDBAR_HEIGHT};
    box-shadow: 0 0 4px 0 ${colorWithAlpha('black', 0.125)};
    z-index: 1;
  `,
  wrapper: css`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  nav: css`
    display: flex;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    font-family: Montserrat, sans-serif;
    letter-spacing: 1px;

    flex-flow: column nowrap;
    @media (min-width: ${tablet}) {
      flex-flow: row wrap;
      justify-content: flex-end; // Helpful during row wrap
    }

    color: ${colorWithAlpha('white', 0.4)};
    & a:hover {
      color: ${colors.lightText};
    }
  `,
  navDark: css`
    color: ${colorWithAlpha('black', 0.4)};
    & a:hover {
      color: ${colors.darkText};
    }
  `,
  navItem: css`
    cursor: pointer;
    text-decoration: none;
    color: inherit;

    padding: 0.125rem;
    @media (min-width: ${tablet}) {
      padding: 0.5rem 0.25rem;
    }

    margin-left: 1rem;
    @media (min-width: ${desktop}) {
      margin-left: 3rem;
    }
  `,
};

export default Header;
