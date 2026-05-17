import { HTMLAttributes } from 'react'

import { SkeletonBlock } from './Skeleton.styles'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: string
  height?: string
  radius?: string
  circle?: boolean
  flex?: string
}

export function Skeleton({
  width,
  height,
  radius,
  circle,
  flex,
  ...props
}: SkeletonProps) {
  return (
    <SkeletonBlock
      aria-hidden
      $width={width}
      $height={height}
      $radius={radius}
      $circle={circle}
      $flex={flex}
      {...props}
    />
  )
}
