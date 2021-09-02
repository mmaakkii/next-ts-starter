import { DefaultTheme } from 'styled-components'
import {createTheme} from '@material-ui/core/styles'

export const createMediaQuery = (s: string): string =>
  `@media screen and (min-width:${s})`

const addAliases = (arr: string[] | number[], aliases: string[]) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i]
      },
    })
  )

export const breakpoints = ['480px', '768px', '992px', '1220px']

export const mediaQueries = breakpoints.map(createMediaQuery)

const aliases = ['sm', 'md', 'lg']

addAliases(breakpoints, aliases)
addAliases(mediaQueries, aliases)

export const space = [0, 4, 8, 16, 32, 64, 128]
const spaceAliases = [
  'none',
  'xxs',
  'xs', // 8
  'sm', // 16
  'md', // 32
  'lg', // 64
  'xl',
]

addAliases(space, spaceAliases)

export const headingFont = 'Lato'
export const textFont = 'Lato'

export const fontSizes = [12, 14, 16, 20, 24, 32, 36, 38, 40, 48, 56, 72]
export const fontFamilies = ['Lato']

export const light = 300
export const normal = 400
export const bold = 500
export const bolder = 600
export const boldest = 900

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeights = {
  light,
  normal,
  bold,
  bolder,
  boldest,
}

export const lineHeights = {
  comfortable: 1.75,
  standard: 1.5,
  display: 1.25,
  compact: 1,
}

const letterSpacings = {
  normal: 'normal',
  caps: '0.025em',
}

// color pallette

const black = '#070707'
const white = '#fff'
const gray05 = '#f9f9fa'
const gray07 = '#f4f5f6'
const gray10 = '#e8e8e8'
const gray30 = '#dddddf'
const gray40 = '#a2a2a2'
const gray70 = '#5d5d5d'
const gray100 = '#171717'
const red = '#ce202f'
const blue = '#212d38'
const transparent = '#00000000'
const active = '#375fc6'
const visited = '#6c5ec2'
const alert = '#d2531c'
const success = '#008555'
// color aliases
const primary = black
const secondary = white
const text = black
const error = red

export const colors = {
  black,
  white,
  gray05,
  gray07,
  gray10,
  gray30,
  gray40,
  gray70,
  gray100,
  red,
  blue,
  transparent,
  active,
  visited,
  alert,
  success,
  primary,
  secondary,
  text,
  error,
}

// styled-system's `borderRadius` function can hook into the `radii` object/array
export const radii = [0, 4, 8]
export const radius = '0px'

export const maxContainerWidth = '1280px'

// boxShadows
export const boxShadows = [
  `0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)`,
]

// animation easing curves
const easeInOut = 'cubic-bezier(0.5, 0, 0.25, 1)'
const easeOut = 'cubic-bezier(0, 0, 0.25, 1)'
const easeIn = 'cubic-bezier(0.5, 0, 1, 1)'

const timingFunctions = {
  easeInOut,
  easeOut,
  easeIn,
}

// animation duration
export const duration = {
  fast: `150ms`,
  normal: `300ms`,
  slow: `450ms`,
  slowest: `600ms`,
}

// animation delay
const transitionDelays = {
  small: `60ms`,
  medium: `160ms`,
  large: `260ms`,
  xLarge: `360ms`,
}

const padding = {
  small: '5px',
  medium: '15px',
  large: '25px',
  xLarge: '45px',
}

const margin = {
  ...padding,
}

const shared = {
  breakpoints,
  mediaQueries,
  space,
  fontSizes,
  fontFamilies,
  fontWeights,
  lineHeights,
  letterSpacings,
  colors,
  primary,
  secondary,
  text,
  radii,
  radius,
  boxShadows,
  maxContainerWidth,
  timingFunctions,
  duration,
  transitionDelays,
  padding,
  margin,
  textFont,
  headingFont,
}

type MyTheme = {
  mui: any
  [k: string]: any
}

const theme: DefaultTheme & MyTheme = {
  mui: createTheme({
    // https://material-ui.com/customization/default-theme/?expand-path=$.typography
    typography: {
      fontFamily: 'Lato',
      button: {
        fontFamily: 'Lato',
      },
    },
    palette: {
      primary: {
        main: shared.primary,
      },
      secondary: {
        main: shared.secondary,
      },
    },
    shape: {
      borderRadius: 0,
    },
  }),
  ...shared,
}

export default theme
