import React from 'react';
import { css, cx } from 'emotion';

import { desktop, tablet } from '../constants/breakpoints';
import { colors, colorWithAlpha } from '../constants/colors';

import Base from '../components/Base';
import SEO from '../components/SEO';
import Button from '../components/Button';
import ResponsiveContainer from '../components/layout/ResponsiveContainer';
import AlternateBannerSection from '../components/sections/AlternateBannerSection';
import LocationSection from '../components/sections/LocationSection';
import PageSection from '../components/layout/PageSection';

const ContactUsPage = () => (
  <Base>
    <SEO title="Contact Us" />
    <AlternateBannerSection title="Contact Us" />
    <PageSection className={cn.contactPanel} id="contact-form">
      <ResponsiveContainer>
        <div className={cn.sectionTitle}>
          <h1>Let’s Discuss Your Project.</h1>
          <p className={cn.subTitle}>
            Fill the form below so we can learn more about your needs.
          </p>
        </div>
        <div className={cn.formContainer}>
          <div className={cn.formWrapper}>
            <form name="contact" method="POST" data-netlify="true">
              <div className={cn.fieldRow}>
                <label>
                  <h6 className={cn.fieldLabel}>Name*</h6>
                  <input
                    type="text"
                    name="name"
                    required="required"
                    className={cn.input}
                  />
                </label>
              </div>
              <div className={cn.fieldRow}>
                <label>
                  <h6 className={cn.fieldLabel}>Email*</h6>
                  <input
                    type="email"
                    name="email"
                    required="required"
                    className={cn.input}
                  />
                </label>
              </div>
              <div className={cn.fieldRow}>
                <label>
                  <h6 className={cn.fieldLabel}>Company</h6>
                  <input type="text" name="company" className={cn.input} />
                </label>
              </div>
              <div className={cn.fieldRow}>
                <label>
                  <h6 className={cn.fieldLabel}>Tell us about your project</h6>
                  <textarea
                    name="message"
                    placeholder="What are you looking to build? What's the deadline? Do you have a specific budget range?"
                    className={cx(cn.input, cn.textarea)}
                  />
                </label>
              </div>
              <p>
                <Button type="submit" inverted>
                  Send
                </Button>
              </p>
            </form>
          </div>
        </div>
      </ResponsiveContainer>
    </PageSection>
    <LocationSection />
  </Base>
);

const cn = {
  subTitle: css`
    font-style: italic;
  `,
  formContainer: css`
    display: flex;
    justify-content: center;
  `,
  contactPanel: css`
    display: flex;
    flex-direction: column;
    background-color: ${colors.darkLightBackground};
    align-items: center;
  `,
  sectionTitle: css`
    text-align: center;
    margin: 3rem 0rem;
  `,
  formWrapper: css`
    background-color: ${colors.lightBackground};
    margin: 2rem 0rem 4rem 0rem;
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.05),
      0 2px 7px 0 rgba(72, 22, 66, 0.05);
    flex: 0 1 750px;

    padding: 2rem 1rem;
    @media (min-width: ${tablet}) {
      padding: 2rem 2rem;
    }
    @media (min-width: ${desktop}) {
      padding: 4rem 4rem;
    }
  `,
  fieldRow: css`
    margin-bottom: 1.5rem;
  `,
  fieldLabel: css`
    margin-bottom: 0.75rem;
    font-weight: bold;
    font-size: 0.75rem;
  `,
  input: css`
    width: 100%;
    background-color: ${colors.lightBackground};
    border-radius: 5px;
    font-size: 1.125rem;
    padding: 0 1.5rem;
    transition: border-color 0.2s ease-in-out;
    height: 4rem;
    line-height: 4;
    color: ${colors.darkText};

    border: 1px solid ${colorWithAlpha('darkText', 0.2)};
    &:hover {
      border-color: ${colorWithAlpha('darkText', 0.4)};
    }
  `,
  textarea: css`
    resize: vertical;
    min-height: 10rem;
    line-height: 1.3;
    padding: 1.5rem;
    white-space: pre-wrap;
    overflow-wrap: break-word;
  `,
};

export default ContactUsPage;
