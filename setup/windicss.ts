import { resolve } from 'path'
import { defineWindiSetup } from '@slidev/types'
const colors = require('windicss/colors')
const plugin = require('windicss/plugin')

const aspectRatioPlugin = plugin(({ addUtilities }) => {
  const newUtilities = {
    '.aspect-none': {
      aspectRatio: 'none',
    },
    '.aspect-16-9': {
      aspectRatio: '16/9',
    },
    '.aspect-4-3': {
      aspectRatio: '4/3',
    },
    '.aspect-1-1': {
      aspectRatio: '1/1',
    },
  }
  addUtilities(newUtilities, ['responsive', 'hover'])
})

export default defineWindiSetup(() => ({
  darkMode: 'class',
  extract: {
    include: [resolve(__dirname, '**/*.{vue,ts}')],
  },
  shortcuts: {
    // custom the default background
    'bg-main':
      'bg-gradient-to-r from-white to-secondary-50 dark:(bg-gradient-to-r from-primary-500 to-primary-600)',
    'bg-section': 'bg-gradient-to-r from-secondary-400 to-secondary-500 ',
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
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
    },
    extend: {
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        title: ['Gilroy', 'Georgia', 'serif'],
        mono: ['Fira Code', 'ui-monospace'],
      },
    }
  },
  plugins: [
    aspectRatioPlugin,
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
