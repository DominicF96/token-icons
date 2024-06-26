import React from 'react'
import { BaseIconProps } from './types'

export const BaseIcon: React.FC<BaseIconProps> = ({
  size = 24,
  children,
  ...props
}) => {
  const svgSize = typeof size === 'number' ? `${size}px` : size
  return (
    <svg
      width={svgSize}
      height={svgSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  )
}
