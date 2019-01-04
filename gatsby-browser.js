/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import polyfillIntersectionObserver from './scripts/polyfill-intersection-observer';
import polyfillObjectFitAndPosition from './scripts/polyfill-object-fit-and-position';

export const onClientEntry = () => {
  // Polyfills for gatsby-image (Safari, IE)
  polyfillIntersectionObserver();
  polyfillObjectFitAndPosition();
};
