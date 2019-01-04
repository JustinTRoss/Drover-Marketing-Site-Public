import { css } from 'emotion';
import { tablet, largeScreen } from './breakpoints';

const getUnitless = unitValue => parseFloat(unitValue);

export const fluidType = (minFontSize = '13px', maxFontSize = '16px') => {
  const minWidth = tablet;
  const maxWidth = largeScreen;
  const minFontSizeUnitless = getUnitless(minFontSize);
  const maxFontSizeUnitless = getUnitless(maxFontSize);
  const minWidthUnitless = getUnitless(minWidth);
  const maxWidthUnitless = getUnitless(maxWidth);
  const fontSizeDifferential = maxFontSizeUnitless - minFontSizeUnitless;
  const widthDifferential = maxWidthUnitless - minWidthUnitless;

  return css`
    font-size: ${minFontSize};
    @media screen and (min-width: ${tablet}) {
      font-size: calc(
        ${minFontSize} + ${fontSizeDifferential} * (100vw - ${tablet}) /
          ${widthDifferential}
      );
    }
    @media screen and (min-width: ${largeScreen}) {
      font-size: ${maxFontSize};
    }
  `;
};
