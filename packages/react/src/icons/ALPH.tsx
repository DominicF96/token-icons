import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconALPH = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M10.629 5.859a.54.54 0 0 0-.55-.283l-2.54.428c-.215.035-.31.215-.22.407l5.624 11.73a.55.55 0 0 0 .553.283l2.537-.428c.214-.035.308-.215.218-.407zm-.343 8.472c0-.184-.155-.312-.348-.282l-2.3.368a.42.42 0 0 0-.352.394v4.136c0 .184.158.313.351.283l2.302-.369a.42.42 0 0 0 .347-.394zm6.428-9.274c0-.188-.154-.317-.347-.287l-2.306.369a.42.42 0 0 0-.347.394v4.136c0 .184.155.312.348.282l2.305-.368a.42.42 0 0 0 .347-.394V5.053z"
          />
        </>
      ) : (
        <>
          <path
            fill="#080515"
            d="M10.629 5.859a.545.545 0 0 0-.549-.283l-2.541.428c-.214.035-.309.215-.219.407l5.623 11.73a.55.55 0 0 0 .553.283l2.537-.428c.215-.035.309-.215.219-.407zm-.343 8.472c0-.184-.154-.312-.347-.282l-2.301.368a.42.42 0 0 0-.352.394v4.136c0 .184.159.313.352.283l2.301-.369a.42.42 0 0 0 .347-.394z"
          />
          <path
            fill="#E95B4D"
            d="M16.715 5.057c0-.188-.155-.317-.347-.287l-2.306.369a.42.42 0 0 0-.347.394v4.136c0 .184.154.312.347.282l2.306-.368a.42.42 0 0 0 .347-.394V5.053z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconALPH.displayName = 'ALPH'
