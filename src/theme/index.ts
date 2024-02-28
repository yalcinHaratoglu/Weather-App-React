/* eslint no-bitwise: "off" */
/* eslint no-nested-ternary: "off" */

// This theme file is entirely a placeholder.While developing the case, you can replace the placeholder color palettes here and invoke them using styled components.

import { presetPalettes, presetPrimaryColors } from '@ant-design/colors';

export const colors = {
  primaryDark: '#1D4E7B',
  primaryLight: '#91d5ff',
  primaryFaded: '#e6f7ff',
  sider: '#F9FAFB',
  textPassive: '#888888',
  primary: '#1890ff',
  secondary: '#273142',
  smoke: '#727272',
  smokeSecondary: '#757575',
  border: '#EDEFF2',
  background: '#F9FAFB',
  white: '#fff',

  blue: '#64CFF6',
  brown: '#8C8665',
  cyan: presetPrimaryColors.cyan,
  geekblue: presetPrimaryColors.geekblue,
  gold: presetPrimaryColors.gold,
  grey: presetPrimaryColors.grey,
  lime: presetPrimaryColors.lime,
  magenta: presetPrimaryColors.magenta,
  purple: presetPrimaryColors.purple,
  red: presetPrimaryColors.red,
  volcano: presetPrimaryColors.volcano,
  yellow: presetPrimaryColors.yellow,
};

export const palettes = {
  blue: presetPalettes.blue,
  cyan: presetPalettes.cyan,
  geekblue: presetPalettes.geekblue,
  gold: presetPalettes.gold,
  green: presetPalettes.green,
  grey: presetPalettes.grey,
  lime: presetPalettes.lime,
  magenta: presetPalettes.magenta,
  orange: presetPalettes.orange,
  purple: presetPalettes.purple,
  red: presetPalettes.red,
  volcano: presetPalettes.volcano,
  yellow: presetPalettes.yellow,
};

const rainbow = [
  colors.red,
  colors.volcano,
  colors.yellow,
  colors.blue,
  colors.geekblue,
  colors.purple,
];

export type Color = keyof typeof colors;

// COLORS
// MAIN
// COMPONENTS
// PAGES

const theme = {
  // MAIN
  colors,
  palettes,
  rainbow,
  limits: {
    xsMaxSize: 576,
    smMinSize: 576,
    mdMinSize: 768,
    lgMinSize: 992,
    xlMinSize: 1200,
    xxlMinSize: 1600,

    limitedContentWidth: 1425,
  },

  spacing: {
    spacing0: 0,
    spacing2: 2,
    spacing4: 4,
    spacing8: 8,
    spacing12: 12,
    spacing16: 16,
    spacing18: 18,
    spacing24: 24,
    spacing36: 36,
    spacing48: 48,
  },

  main: {
    contentMaxWidth: 1200,
    borderRadius: 6,
  },

  // COMPONENTS
  header: {
    height: 66,
  },
  footer: {
    height: 64,
  },
  sider: {
    width: 220,
  },
  modal: {
    borderRadius: 15,
  },
  button: {
    hoverBg: 'linear-gradient(180deg, #25629a 0%, #040f1b 120%)',
  },
  table: {
    borderColor: '#686868',
  },
  font: {
    family: `'Open Sans', sans-serif`,
  },
};

export default theme;
export type Theme = typeof theme;
