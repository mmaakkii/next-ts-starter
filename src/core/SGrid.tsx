import { Grid, GridProps } from "@material-ui/core"
import styled from "styled-components"
import { display, DisplayProps, maxWidth, MaxWidthProps, space, SpaceProps, width, WidthProps } from "styled-system"
import { align, AlignProps, pointer } from "./Text"

export type SGridProps = {
  pointer?: boolean
} & SpaceProps &
  WidthProps &
  MaxWidthProps &
  DisplayProps &
  GridProps &
  AlignProps

export const SGrid = styled(({ pointer: _pointer, maxWidth: _maxWidth, forwardRef, ...rest }) => (
  <Grid ref={forwardRef} {...rest} />
))<SGridProps>`
  ${width} ${maxWidth} ${display} ${space} ${align} ${pointer};
  position: relative;
  z-index: 100;
`

SGrid.displayName = "SGrid"

export default SGrid
