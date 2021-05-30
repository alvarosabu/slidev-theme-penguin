import { resolve } from 'path'
import { defineWindiSetup } from '@slidev/types'
const colors = require('windicss/colors')
const plugin = require('windicss/plugin')

export default defineWindiSetup(() => ({
  darkMode: 'class',
  extract: {
    include: [resolve(__dirname, '**/*.{vue,ts}')],
  },
  shortcuts: {
    // custom the default background
    'bg-main':
      'bg-gradient-to-r from-white to-secondary-50 dark:(bg-gradient-to-r from-primary-500 to-primary-600)',
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      primary: {
        // oxford
        DEFAULT: '#3E5166',
        50: '#B7C4D3',
        100: '#A7B7C9',
        200: '#879DB6',
        300: '#6784A3',
        400: '#516A86',
        500: '#3E5166',
        600: '#2B3846',
        700: '#171F27',
        800: '#040507',
        900: '#000000',
      },
      secondary: {
        // caribbean-green
        DEFAULT: '#34D399',
        50: '#F1FCF8',
        100: '#DCF7ED',
        200: '#B2EED8',
        300: '#88E5C3',
        400: '#5EDCAE',
        500: '#34D399',
        600: '#26AE7C',
        700: '#1D845F',
        800: '#145A41',
        900: '#0B3023',
      },
      tertiary: {
        // mango-tango
        DEFAULT: '#FD813E',
        50: '#FFFFFF',
        100: '#FFFFFF',
        200: '#FFE4D5',
        300: '#FEC3A3',
        400: '#FEA270',
        500: '#FD813E',
        600: '#FC600C',
        700: '#D34B02',
        800: '#A03902',
        900: '#6E2701',
      },
      warning: {
        // maiz yellow
        DEFAULT: '#F0C64C',
        50: '#FFFFFF',
        100: '#FFFFFF',
        200: '#FCF3D9',
        300: '#F8E4AA',
        400: '#F4D57B',
        500: '#F0C64C',
        600: '#ECB71D',
        700: '#C59711',
        800: '#96730D',
        900: '#674F09',
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        serif: ['Gilroy', 'Georgia', 'serif'],
        mono: ['FiraCode', 'ui-monospace'],
      },
    },
    extend: {
      // fonts can be replaced here, remember to update the web font links in `index.html`
      fontFamily: {
        sans: '"Nunito Sans", ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        title: ['Gilroy ExtraBold', 'sans-serif'],
        mono: '"Fira Code", monospace',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme, variants }) {
      const newUtilities = {
        '.flip-y': {
          '--tw-scale-y': '-1 !important',
        },
        '.flip-x': {
          '--tw-scale-x': '-1 !important',
        },
      }
      addUtilities(newUtilities, variants('flip'))
    }),
  ],
}))
