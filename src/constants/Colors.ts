import { light as lightTheme, dark as darkTheme } from '@eva-design/eva';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const customLightTheme = {
  ...lightTheme,
  'color-primary-500': tintColorLight,
  'color-primary-100': '#0b14ca', // Adicione tonalidades secundárias, se necessário
  'color-background': '#fff',
  'color-text': '#11181C',
  'color-icon': '#687076',
  'color-tab-icon-default': '#687076',
  'color-tab-icon-selected': tintColorLight,
};

export const customDarkTheme = {
  ...darkTheme,
  'color-primary-500': tintColorDark,
  'color-primary-100': '#444', // Adicione tonalidades secundárias, se necessário
  'color-background': '#151718',
  'color-text': '#ECEDEE',
  'color-icon': '#9BA1A6',
  'color-tab-icon-default': '#9BA1A6',
  'color-tab-icon-selected': tintColorDark,
};
