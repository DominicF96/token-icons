import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconNKN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.873 9.155c1.161-1.003 4.045-2.23 6.283.912-1.2 1.016-4.149 2.259-6.283-.912m1.77 9.685c-1.012-1.157-2.272-4.046.801-6.36 1.029 1.2 2.306 4.157-.801 6.36m2.588-4.294c.116-1.543 1.286-4.466 5.07-3.857-.133 1.577-1.337 4.56-5.07 3.857m1.17-9.403c-.54.951-1.003 3.137 1.453 4.264.51-.998.93-3.248-1.453-4.264M12.257 15.52c.279 1.058 1.47 2.944 3.999 2.005-.33-1.07-1.595-2.97-3.999-2.005m-6.686-2.19c.943.548 3.112 1.024 4.235-1.449-.986-.514-3.215-.951-4.23 1.449zm4.346-7.8c-.06.763.326 2.254 2.344 2.156 0-.768-.458-2.272-2.344-2.152zm5.34 9.373c.489.583 1.8 1.367 3.167-.133-.531-.549-1.911-1.29-3.167.133m-9.274 1.83c.75.073 2.233-.296 2.168-2.332-.763-.017-2.258.429-2.168 2.332"
          />
        </>
      ) : (
        <>
          <path
            fill="#24397D"
            d="M7.873 9.155c1.161-1.003 4.045-2.23 6.283.912-1.2 1.016-4.149 2.259-6.283-.912m1.77 9.685c-1.012-1.157-2.272-4.046.801-6.36 1.029 1.2 2.306 4.157-.801 6.36m2.588-4.294c.116-1.543 1.286-4.466 5.07-3.857-.133 1.577-1.337 4.56-5.07 3.857m1.17-9.403c-.54.951-1.003 3.137 1.453 4.264.51-.998.93-3.248-1.453-4.264M12.257 15.52c.279 1.058 1.47 2.944 3.999 2.005-.33-1.07-1.595-2.97-3.999-2.005m-6.686-2.19c.943.548 3.112 1.024 4.235-1.449-.986-.514-3.215-.951-4.23 1.449zm4.346-7.8c-.06.763.326 2.254 2.344 2.156 0-.768-.458-2.272-2.344-2.152zm5.34 9.373c.489.583 1.8 1.367 3.167-.133-.531-.549-1.911-1.29-3.167.133m-9.274 1.83c.75.073 2.233-.296 2.168-2.332-.763-.017-2.258.429-2.168 2.332"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconNKN.displayName = 'NKN'
