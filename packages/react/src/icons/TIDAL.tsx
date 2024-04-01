import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconTIDAL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.428 8.1a4.2 4.2 0 0 1-1.911-.249l-.514-.192a5.93 5.93 0 0 0-4.149 0l-.514.192a4.23 4.23 0 0 1-2.966 0L7.86 7.66a5.9 5.9 0 0 0-2.289-.37v1.737a4.2 4.2 0 0 1 1.697.265l.515.193c1.337.5 2.81.5 4.148 0l.515-.193a4.23 4.23 0 0 1 2.965 0l.515.193c.805.3 1.658.42 2.502.356zM5.571 14.57h12.857v1.715H5.571zm10.946-3.291a4.2 4.2 0 0 0 1.911.248v1.74a5.9 5.9 0 0 1-2.502-.355l-.515-.193a4.23 4.23 0 0 0-2.965 0l-.515.193c-1.337.5-2.81.5-4.148 0l-.515-.193a4.2 4.2 0 0 0-1.697-.266V10.72a5.9 5.9 0 0 1 2.289.368l.514.193c.956.36 2.01.36 2.966 0l.514-.193c1.338-.5 2.811-.5 4.149 0z"
          />
        </>
      ) : (
        <>
          <path
            fill="#002D95"
            d="M18.428 8.1a4.2 4.2 0 0 1-1.911-.249l-.514-.192a5.93 5.93 0 0 0-4.149 0l-.514.192a4.23 4.23 0 0 1-2.966 0L7.86 7.66a5.9 5.9 0 0 0-2.289-.37v1.737a4.2 4.2 0 0 1 1.697.265l.515.193c1.337.5 2.81.5 4.148 0l.515-.193a4.23 4.23 0 0 1 2.965 0l.515.193c.805.3 1.658.42 2.502.356zM5.571 14.57h12.857v1.715H5.571zm10.946-3.291a4.2 4.2 0 0 0 1.911.248v1.74a5.9 5.9 0 0 1-2.502-.355l-.515-.193a4.23 4.23 0 0 0-2.965 0l-.515.193c-1.337.5-2.81.5-4.148 0l-.515-.193a4.2 4.2 0 0 0-1.697-.266V10.72a5.9 5.9 0 0 1 2.289.368l.514.193c.956.36 2.01.36 2.966 0l.514-.193c1.338-.5 2.811-.5 4.149 0z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconTIDAL.displayName = 'TIDAL'
