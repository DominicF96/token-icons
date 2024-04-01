import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconTIPS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.557 9.154c-.557 0-.694-.497-.694-.745.154-.579.729-1.98 1.86-1.98 1.629 0 3.347.18 4.277.428-2.091.497-4.744 2.297-5.443 2.297"
          />
          <path
            fill="currentColor"
            d="M8.863 8.906c0 .248.317.523.78.523.287 0 1.114-.429 2.057-.913 1.333-.686 2.893-1.492 3.437-1.346.155.249.515 1.286.699 2.477l.141.06c1.08.437 3.309 1.346 3.309 2.293 0 1.239-3.45 5.572-8.563 5.572-5.117 0-5.58-3.468-5.58-4.209 0-.746.93-2.477 3.489-3.471.154-.078.231-.592.231-.986m-.72 2.666c.154.411.84 1.285 2.143 1.285 1.629 0 5.109-2.074 5.571-2.571v1.928c0 .558-3.514 2.572-5.142 2.572-1.63 0-2.786-1.174-2.786-1.672 0-.394.137-1.212.214-1.542"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#F7C91E"
            d="M9.557 9.154c-.557 0-.694-.497-.694-.745.154-.579.728-1.98 1.86-1.98 1.628 0 3.347.18 4.277.428-2.092.497-4.745 2.297-5.443 2.297"
          />
          <path
            fill="#F7C91E"
            d="M8.863 8.906c0 .248.317.523.78.523.287 0 1.114-.429 2.057-.913 1.333-.686 2.893-1.492 3.437-1.346.154.249.514 1.286.698 2.477l.142.06c1.08.437 3.308 1.346 3.308 2.293 0 1.239-3.45 5.572-8.562 5.572-5.118 0-5.58-3.468-5.58-4.209 0-.746.93-2.477 3.488-3.471.154-.078.232-.592.232-.986m-.72 2.666c.154.411.84 1.285 2.142 1.285 1.629 0 5.109-2.074 5.572-2.571v1.928c0 .558-3.514 2.572-5.143 2.572s-2.786-1.174-2.786-1.672c0-.394.137-1.212.215-1.542"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconTIPS.displayName = 'TIPS'
