import { createStitches } from "@stitches/react";
import type * as Stitches from '@stitches/react';


const SPACING_UNIT = 8

const createSpaceConfig = (spacingUnit: number) => {
  return Object.fromEntries(Array.from({ length: 10 }).map((_, index) => {
    const multiplier = index + 1

    return [multiplier, `${multiplier * spacingUnit}px`]
  }))
}

const stitches = createStitches({
  theme: {
    colors: {
      electricBlue: "hsl(180 100% 70%)",
      electricGreen: "hsl(145 83% 55%)",
      mainBlue: "hsl(243 90% 42%)",
      darkBlue: "hsl(234 96% 22%)",
      dimmedDarkBlue: "hsla(234, 96%, 22%, 0.3)",
      grey200: "hsl(0 0% 93%)",
      blueGrey100: "hsl(198 16% 84%)",
      textPrimary: "hsl(0 0% 13%)",
      textSecondary: "hsl(0 0% 38%)",
      error: "hsl(0 100% 42%)",
    },
    fonts: {
      stakin: "'IBM Plex Sans', sans-serif",
    },
    space: createSpaceConfig(SPACING_UNIT),
    fontWeights: {
      regular: "400",
      bold: "700"
    },
  },
  media: {
    xs: '(min-width: 640px)',
    sm: '(min-width: 768px)',
    md: '(min-width: 1024px)',
  },
})


export const { styled, css, globalCss, theme } = stitches
