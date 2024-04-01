import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconMATIC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.289 9.497a.91.91 0 0 1 .917 0l2.096 1.252 1.422.814 2.1 1.252a.91.91 0 0 0 .913 0l1.667-.978c.27-.162.596-.463.596-.788V9.12c0-.326-.3-.626-.6-.788l-1.637-.952a.91.91 0 0 0-.913 0l-1.641.952c-.266.162-.352.462-.352.788v1.247l-1.285-.84V8.272c0-.326-.086-.626.214-.789l3.038-1.791a.91.91 0 0 1 .913 0l3.09 1.791a.88.88 0 0 1 .459.793v3.617a.89.89 0 0 1-.459.789l-3.09 1.791a.91.91 0 0 1-.913 0l-2.1-1.221-1.422-.845-2.1-1.221a.91.91 0 0 0-.913 0l-1.637.951c-.27.163-.652.463-.652.789v1.928c0 .326.356.626.652.79l1.637.976a.92.92 0 0 0 .917 0l1.637-.951c.27-.163.729-.463.729-.789v-1.247l1.285.84v1.252c0 .325-.291.625-.587.788L9.172 18.3a.89.89 0 0 1-.913 0l-3.09-1.791a.94.94 0 0 1-.455-.784v-3.618c0-.325.163-.625.459-.788z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#MATIC__a)"
            d="M8.288 9.497a.91.91 0 0 1 .917 0l2.096 1.252 1.423.814 2.1 1.252a.91.91 0 0 0 .913 0l1.667-.978c.27-.162.596-.463.596-.788V9.12c0-.326-.3-.626-.6-.788l-1.638-.952a.91.91 0 0 0-.912 0l-1.642.952c-.266.162-.351.462-.351.788v1.247l-1.286-.84V8.272c0-.326-.086-.626.214-.789l3.039-1.791a.91.91 0 0 1 .913 0l3.09 1.791a.88.88 0 0 1 .458.793v3.617a.89.89 0 0 1-.458.789l-3.09 1.791a.91.91 0 0 1-.913 0l-2.1-1.221-1.423-.845-2.1-1.221a.91.91 0 0 0-.913 0l-1.637.951c-.27.163-.651.463-.651.789v1.928c0 .326.355.626.651.79l1.637.976a.92.92 0 0 0 .917 0l1.637-.951c.27-.163.729-.463.729-.789v-1.247l1.286.84v1.252c0 .325-.292.625-.587.788L9.17 18.3a.89.89 0 0 1-.913 0l-3.09-1.791a.94.94 0 0 1-.454-.784v-3.618c0-.325.163-.625.458-.788z"
          />
          <defs>
            <linearGradient
              id="MATIC__a"
              x1="4.714"
              x2="17.47"
              y1="5.569"
              y2="20.027"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8F34C2" />
              <stop offset="1" stopColor="#7442DB" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconMATIC.displayName = 'MATIC'
