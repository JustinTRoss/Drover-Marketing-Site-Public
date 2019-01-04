import React from 'react';
import { Link } from 'gatsby';
import { css } from 'emotion';

import { colors, colorWithAlpha } from '../constants/colors';
import { smallScreen } from '../constants/breakpoints';
import { BLOG_URL, CONTACT_US_EMAIL } from '../constants/urls';

import Triangle from './icons/Triangle.svg';
import Logo from './Logo';
import ResponsiveContainer from './layout/ResponsiveContainer';

const Footer = () => (
  <footer className={cn.footer}>
    <ResponsiveContainer className={cn.wrapper}>
      <nav className={cn.nav}>
        <Link to="/work" className={cn.navItem}>
          Work
        </Link>
        <Link to="/about" className={cn.navItem}>
          About
        </Link>
        <a
          href={BLOG_URL}
          className={cn.navItem}
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
        <Link to="/contact" className={cn.navItem}>
          Contact
        </Link>
      </nav>
      <div className={cn.test}>
        <Logo muted />
        <div className={cn.locations}>San Francisco | San Diego</div>
        <div className={cn.email}>{CONTACT_US_EMAIL}</div>
      </div>
    </ResponsiveContainer>
    <Triangle className={cn.triangle} />
    <Triangle className={cn.triangle} transform="rotate(-90)" />
  </footer>
);

const cn = {
  footer: css`
    position: relative;
    height: 152px;
    display: flex;
    box-shadow: 0 0 4px 0 ${colorWithAlpha('black', 0.125)};
    background: ${colors.darkBackground};
    color: ${colors.lightText};
    padding: 1rem 0;
  `,
  wrapper: css`
    display: flex;

    flex-flow: column nowrap;
    @media (min-width: ${smallScreen}) {
      flex-flow: row-reverse wrap;
      align-items: center;
      justify-content: space-between;
    }
  `,
  triangle: css`
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
  `,
  locations: css`
    color: ${colors.lightText};
    font-family: Montserrat, sans-serif;
    text-transform: uppercase;
  `,
  email: css`
    color: ${colors.mutedDroverBlue};
  `,
  nav: css`
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-family: Montserrat, sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;

    justify-content: space-between;
    @media (min-width: ${smallScreen}) {
      justify-content: flex-end;
    }
  `,
  navItem: css`
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    padding: 0.125rem;
    @media (min-width: ${smallScreen}) {
      margin-left: 1rem;
      padding: 0.5rem 0.25rem;
    }
  `,
};

export default Footer;
