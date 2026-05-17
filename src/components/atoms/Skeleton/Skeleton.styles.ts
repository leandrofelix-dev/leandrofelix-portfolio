import styled, { css, keyframes } from 'styled-components'

const shimmer = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`

export const SkeletonBlock = styled.div<{
  $width?: string
  $height?: string
  $radius?: string
  $circle?: boolean
  $flex?: string
}>`
  display: block;
  flex: ${({ $flex }) => $flex ?? 'none'};
  width: ${({ $width }) => $width ?? '100%'};
  height: ${({ $height }) => $height ?? '1rem'};
  border-radius: ${({ $circle, $radius }) =>
    $circle ? '50%' : ($radius ?? '0.35rem')};
  background: linear-gradient(
    90deg,
    var(--primary-dim2) 0%,
    var(--primary-dark) 40%,
    var(--primary-dim2) 80%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.4s ease-in-out infinite;

  ${({ $circle, $width, $height }) =>
    $circle &&
    css`
      width: ${$width ?? '3rem'};
      height: ${$height ?? $width ?? '3rem'};
    `}
`
