import * as React from 'react';
import { css } from 'emotion';

import CTALinkButton from '../CTALinkButton';
import ResponsiveContainer from '../layout/ResponsiveContainer';
import PageSection from '../layout/PageSection';

const BottomCTASection = ({
  dark,
  colorful,
  title = 'What can we do for you?',
  ctaText = "Let's Work Together",
}) => (
  <PageSection dark={dark}>
    <ResponsiveContainer>
      <div className={cn.base}>
        <h4>{title}</h4>
        <CTALinkButton
          light={dark && !colorful}
          inverted={colorful}
          to="/contact"
        >
          {ctaText}
        </CTALinkButton>
      </div>
    </ResponsiveContainer>
  </PageSection>
);

const cn = {
  base: css`
    text-align: center;
    h4 {
      margin-bottom: 2rem;
    }
  `,
};

export default BottomCTASection;
