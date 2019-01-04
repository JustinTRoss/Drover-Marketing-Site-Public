const NAMED_COLORS = {
  // grayscale (light to dark)
  white: 'rgba(254, 254, 254, 1)',
  darkWhite: 'rgba(246, 246, 246, 1)',
  lightGrey: 'rgba(230,230,230,1)',
  droverBlueMuted: 'rgba(172, 172, 172, 1)',
  darkGrey: 'rgba(39, 39, 39, 1)',
  // darkGrey: 'rgba(44, 44, 44, 1)',
  black: 'rgba(0, 0, 39, 1)',

  // rest
  droverBlue: 'rgba(63,124,172,1)',
  droverYellow: 'rgba(246,226,127,1)',
  purple: '#261F4F',
};

const BRAND_COLORS = {
  brandPrimary: NAMED_COLORS.droverBlue,
  brandPrimaryMuted: NAMED_COLORS.droverBlueMuted,
  brandSecondary: NAMED_COLORS.droverYellow,
};

const TEXT_COLORS = {
  lightText: NAMED_COLORS.lightGrey,
  darkText: NAMED_COLORS.darkGrey,
  logoText: BRAND_COLORS.brandPrimary,
  mutedLogoText: BRAND_COLORS.brandPrimaryMuted,
};

const BACKGROUND_COLORS = {
  lightBackground: NAMED_COLORS.white,
  darkLightBackground: NAMED_COLORS.darkWhite,
  darkBackground: NAMED_COLORS.darkGrey,
};

const BUTTON_COLORS = {
  buttonTextInverted: TEXT_COLORS.lightText,
  buttonBackgroundInverted: BRAND_COLORS.brandPrimary,
};

const COLORS = {
  ...NAMED_COLORS,
  ...BRAND_COLORS,
  ...TEXT_COLORS,
  ...BACKGROUND_COLORS,
  ...BUTTON_COLORS,

  // cellBorder: NAMED_COLORS.darkGrey,
};

module.exports = {
  ...COLORS,
  colors: COLORS,

  colorWithAlpha(name = 'brandPrimary', opacity = 1) {
    if (!COLORS[name]) {
      name = 'brandPrimary';
    }
    return COLORS[name].split(', 1)').join(`, ${opacity})`);
  },

  colorForTopic(count, index) {
    const hue = Math.round((360 * index) / (count + 1));
    return `hsl(${hue}, 74%, 65%)`;
  },
};
