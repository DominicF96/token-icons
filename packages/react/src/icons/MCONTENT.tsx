import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconMCONTENT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m11.966 20.143-6.823-4.076v-8.13l6.823-4.08 6.891 4.08v8.134zm1.11-14.769L8.927 7.903l2.992 1.765 4.131-2.485zm-6.219 7.813V9.043l1.577-.896 2.958 1.787-1.535.9v4.003zm0 3.051v-2.545l3 1.804v2.529zm6-3.711v6.116l.857-.622v-4.843L15 12.407V17.4l.857-.622V11.88l1.286-.78v5.138l.857-.643v-6.18zM8.006 6.938l.634-.424.57.476-.638.42zm5.34 2.473-.634.42.565.472.635-.42zM9.634 5.966l.635-.42.566.47-.635.425-.566-.471zm5.336 2.472-.634.42.566.476.634-.42-.566-.471zm-3.716-3.432.635-.42.566.47-.635.425zm5.336 2.472-.634.42.566.472.634-.416-.566-.471zm-10.174.399.638-.42.566.471-.638.425-.566-.472zm-.844 1.226.857.424v.754l-.857-.428zm0 1.911.857.42v.754l-.857-.428zm.857 2.332-.857-.425v.75l.857.429zm-.857 1.487.857.42v.754l-.857-.429zm5.571-2.666-.857-.429v.755l.857.428zm0 1.907-.857-.424v.75l.857.428zm-.857 1.487.857.425v.754l-.857-.429v-.754zm.857 2.332-.857-.425v.75l.857.429zm.613-7.543-.634.424.565.472.635-.42-.566-.472z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#MCONTENT__a)"
            d="m11.965 20.143-6.822-4.076v-8.13l6.822-4.08 6.892 4.08v8.134zm1.11-14.769L8.927 7.903l2.991 1.765 4.132-2.485zm-6.218 7.813V9.043l1.577-.896 2.957 1.787-1.534.9v4.003zm0 3.051v-2.545l3 1.804v2.529zm6-3.711v6.116l.857-.622v-4.843L15 12.407V17.4l.857-.622V11.88l1.286-.78v5.138l.857-.643v-6.18zM8.005 6.938l.635-.424.57.476-.639.42zm5.34 2.473-.634.42.566.472.634-.42zM9.634 5.966l.634-.42.566.47-.634.425-.566-.471zm5.336 2.472-.635.42.566.476.634-.42-.565-.471zm-3.716-3.432.634-.42.566.47-.634.425zm5.336 2.472-.635.42.566.472.634-.416-.565-.471zm-10.175.399.639-.42.566.471-.639.425-.566-.472zm-.844 1.226.857.424v.754l-.857-.428zm0 1.911.857.42v.754l-.857-.428zm.857 2.332-.857-.425v.75l.857.429zm-.857 1.487.857.42v.754l-.857-.429zm5.572-2.666-.858-.429v.755l.858.428zm0 1.907-.858-.424v.75l.858.428zm-.858 1.487.858.425v.754l-.858-.429v-.754zm.858 2.332-.858-.425v.75l.858.429zm.612-7.543-.634.424.566.472.634-.42-.566-.472z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="MCONTENT__a"
              x1="12"
              x2="12"
              y1="3.857"
              y2="20.143"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".16" stopColor="#C09124" />
              <stop offset="1" stopColor="#FDDC03" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconMCONTENT.displayName = 'MCONTENT'
