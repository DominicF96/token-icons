import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconANKR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.887 5.357 17.37 7.66a1.94 1.94 0 0 1 1.058 1.735v.892h-1.714v-.892c0-.107 0-.214-.098-.261l-4.488-2.237a.3.3 0 0 0-.27 0L7.384 9.129c-.098.047-.098.154-.098.257v.9H5.57v-.892A1.95 1.95 0 0 1 6.63 7.66l4.483-2.302a1.95 1.95 0 0 1 1.774 0M13.286 12c0-.746-.549-1.286-1.286-1.286A1.26 1.26 0 0 0 10.714 12c-.008.737.506 1.277 1.286 1.286.78.008 1.286-.54 1.286-1.286m3.33 2.871c.098-.051.098-.158.098-.265v-.892h1.714v.892a1.94 1.94 0 0 1-1.058 1.735l-4.479 2.302a1.95 1.95 0 0 1-1.778 0L6.63 16.34a1.94 1.94 0 0 1-1.059-1.735v-.892h1.715v.892c0 .111 0 .214.098.261l3.759 1.847v-1.928A2.79 2.79 0 0 1 9 12c0-1.693 1.191-3 3-3s3 1.286 3 3c0 1.444-.853 2.426-2.143 2.786v1.928z"
          />
        </>
      ) : (
        <>
          <path
            fill="#2075E8"
            d="M12.887 5.357 17.37 7.66a1.94 1.94 0 0 1 1.058 1.735v.892h-1.714v-.892c0-.107 0-.214-.098-.261l-4.488-2.237a.3.3 0 0 0-.27 0L7.384 9.129c-.098.047-.098.154-.098.257v.9H5.57v-.892A1.95 1.95 0 0 1 6.63 7.66l4.483-2.302a1.95 1.95 0 0 1 1.774 0M13.286 12c0-.746-.549-1.286-1.286-1.286A1.26 1.26 0 0 0 10.714 12c-.008.737.506 1.277 1.286 1.286.78.008 1.286-.54 1.286-1.286m3.33 2.871c.098-.051.098-.158.098-.265v-.892h1.714v.892a1.94 1.94 0 0 1-1.058 1.735l-4.479 2.302a1.95 1.95 0 0 1-1.778 0L6.63 16.34a1.94 1.94 0 0 1-1.059-1.735v-.892h1.715v.892c0 .111 0 .214.098.261l3.759 1.847v-1.928A2.79 2.79 0 0 1 9 12c0-1.693 1.191-3 3-3s3 1.286 3 3c0 1.444-.853 2.426-2.143 2.786v1.928z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconANKR.displayName = 'ANKR'
