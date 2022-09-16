const WHITE = "#FFF";
const BLACK = "#000";
const LIGHT_GRAY = "#CCC";

const TINT_COLOR_LIGHT = "#2fdc46";
const TINT_COLOR_DARK = WHITE;
const IOS_BLUE_HYPERLINK = "#007AFF";
const TRANSPARENT = "transparent";

// Splash Screen background color
const LAUREL_GREEN = "#B3BFAA";

const OLIVINE = "#92B677";
const FLUORESCENT_BLUE = "#71F5EA";
const VENETIAN_RED = "#C70808";
const LEMON_GLACIER = "#F2FA07";

const sizes = [ 6, 12, 18, 24, 32 ];

export default {
  light: {
    text: BLACK,
    background: WHITE,
    tint: TINT_COLOR_LIGHT,
    tabIconDefault: LIGHT_GRAY,
    tabIconSelected: TINT_COLOR_LIGHT,
  },
  dark: {
    text: WHITE,
    background: BLACK,
    tint: TINT_COLOR_DARK,
    tabIconDefault: LIGHT_GRAY,
    tabIconSelected: TINT_COLOR_DARK,
  },
  primary: {
    text: BLACK,
    background: OLIVINE,
    tint: TINT_COLOR_DARK,
    tabIconDefault: LIGHT_GRAY,
    tabIconSelected: TINT_COLOR_DARK,
  },
  secondary: {
    text: WHITE,
    background: BLACK,
    tint: TINT_COLOR_DARK,
    tabIconDefault: LIGHT_GRAY,
    tabIconSelected: TINT_COLOR_DARK,
  },
  success: {
    text: WHITE,
    background: BLACK,
    tint: TINT_COLOR_DARK,
    tabIconDefault: LIGHT_GRAY,
    tabIconSelected: TINT_COLOR_DARK,
  },
  error: {
    text: WHITE,
    background: VENETIAN_RED,
    tint: TINT_COLOR_DARK,
    tabIconDefault: LIGHT_GRAY,
    tabIconSelected: TINT_COLOR_DARK,
  },
  info: {
    text: WHITE,
    background: BLACK,
    tint: TINT_COLOR_DARK,
    tabIconDefault: LIGHT_GRAY,
    tabIconSelected: TINT_COLOR_DARK,
  },
  link: {
    text: IOS_BLUE_HYPERLINK,
    background: TRANSPARENT,
    tint: TINT_COLOR_DARK,
    tabIconDefault: LIGHT_GRAY,
    tabIconSelected: TINT_COLOR_DARK,
  },
  transparent: {
    text: BLACK,
    background: TRANSPARENT,
    tint: TINT_COLOR_DARK,
    tabIconDefault: LIGHT_GRAY,
    tabIconSelected: TINT_COLOR_DARK,
  },
};

const theme = {
  sizes: {
    xs: sizes[0],
    s: sizes[1],
    m: sizes[2],
    l: sizes[3],
    xl: sizes[4],
  },
  primary: {
    backgroundColor: "#57d8b3",
  },
  textVariants: {
    header: {
      fontFamily: "Lato_100Thin",
      fontSize: sizes[4],
      fontWeight: "bold",
    },
    body: {
      // fontFamily: "Merriweather",
      fontSize: sizes[2],
    },
  },
};

export { theme };
