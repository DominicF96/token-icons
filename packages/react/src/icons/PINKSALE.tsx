import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconPINKSALE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m18.236 7.907-.45-1.478-.45 1.478-1.479.45 1.479.45.45 1.479.45-1.479 1.478-.45zm-10.95.557c0-.175.133-.321.3-.321h2.4c.167 0 .3.146.3.321s-.133.322-.3.322h-2.4c-.168 0-.3-.146-.3-.322m5.571 0c0-.175.133-.321.3-.321h2.4c.167 0 .3.146.3.321s-.133.322-.3.322h-2.4c-.167 0-.3-.146-.3-.322m-4.714 1.599c0-.351.287-.634.643-.634.355 0 .643.283.643.634v2.16a.643.643 0 0 1-1.286 0zm5.571 0c0-.351.287-.634.643-.634s.643.283.643.634v2.16a.642.642 0 0 1-1.286 0zm-6.857 2.366a1.286 1.286 0 1 1-2.571 0 1.286 1.286 0 0 1 2.571 0m10.714 1.285a1.285 1.285 0 1 0 0-2.57 1.285 1.285 0 0 0 0 2.57m-3.085 1.86a.46.46 0 0 1-.043.588c-.386.36-1.44.981-2.949.981-1.5 0-2.477-.621-2.815-1.007a.454.454 0 0 1 0-.587.343.343 0 0 1 .522 0c.18.205.952.763 2.293.763s2.229-.558 2.469-.785a.343.343 0 0 1 .523.047"
          />
        </>
      ) : (
        <>
          <path
            fill="#F95192"
            d="m18.236 7.907-.45-1.478-.45 1.478-1.478.45 1.478.45.45 1.479.45-1.479 1.479-.45zm-10.95.557c0-.175.133-.321.3-.321h2.4c.167 0 .3.146.3.321s-.133.322-.3.322h-2.4c-.167 0-.3-.146-.3-.322m5.572 0c0-.175.132-.321.3-.321h2.4c.167 0 .3.146.3.321s-.133.322-.3.322h-2.4c-.168 0-.3-.146-.3-.322m-4.715 1.599c0-.351.287-.634.643-.634s.643.283.643.634v2.16a.643.643 0 0 1-1.286 0zm5.572 0c0-.351.287-.634.643-.634.355 0 .642.283.642.634v2.16a.643.643 0 0 1-1.285 0zm-6.857 2.366a1.286 1.286 0 1 1-2.572 0 1.286 1.286 0 0 1 2.572 0m10.714 1.285a1.285 1.285 0 1 0 0-2.57 1.285 1.285 0 0 0 0 2.57m-3.086 1.86a.46.46 0 0 1-.043.588c-.385.36-1.44.981-2.948.981-1.5 0-2.477-.621-2.816-1.007a.454.454 0 0 1 0-.587.343.343 0 0 1 .523 0c.18.205.951.763 2.293.763 1.341 0 2.228-.558 2.468-.785a.342.342 0 0 1 .523.047"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPINKSALE.displayName = 'PINKSALE'
