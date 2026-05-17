import styled, { css } from 'styled-components'

import { resolveSpacing } from '@/theme/spacing'
import { media } from '@/theme/media'

export const StyledContainer = styled.div<{ $spacing?: string | string[] }>`
  width: 100%;
  max-width: var(--reading-width);
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;

  ${({ $spacing }) => ($spacing ? resolveSpacing($spacing) : css``)}

  ${media.mobile} {
    width: calc(100% - 2rem);
    margin-left: 1rem;
    margin-right: 1rem;
  }
`
