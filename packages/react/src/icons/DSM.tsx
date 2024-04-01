import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconDSM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.992 5.417c.321-.214.651-.274.942-.274 1.792 0 3.793.947 5.34 2.254 1.539 1.299 2.696 3.017 2.696 4.611 0 1.612-1.243 3.01-2.73 3.978-1.5.977-3.334 1.585-4.676 1.585a2.8 2.8 0 0 1-1.701-.518 3.2 3.2 0 0 1-.986-1.273c-.454-.986-.557-2.194-.557-3.124 0-3.215.33-5.075.814-6.142a2.5 2.5 0 0 1 .858-1.097m-.386 1.307c-.442.96-.844 2.73-.844 5.932 0 .908.171 2.027.578 2.914.178.446.462.842.827 1.153.352.257.806.42 1.397.42 1.218 0 2.958-.643 4.393-1.582 1.449-.943 2.572-2.203 2.572-3.557 0-1.371-1.093-2.957-2.589-4.221-1.483-1.256-3.377-2.212-4.997-2.212-.219 0-.441.043-.66.189-.301.26-.532.592-.673.964z"
          />
          <path
            fill="currentColor"
            d="M9.879 6.274C10.2 6.06 10.53 6 10.822 6c1.795 0 3.792.947 5.34 2.254 1.538 1.299 2.695 3.017 2.695 4.612 0 1.611-1.243 3.008-2.73 3.977-1.5.977-3.33 1.585-4.675 1.585a2.8 2.8 0 0 1-1.702-.518 3.2 3.2 0 0 1-.986-1.273c-.454-.986-.557-2.194-.557-3.124 0-3.214.33-5.074.815-6.142a2.5 2.5 0 0 1 .857-1.097m-.386 1.307c-.441.96-.844 2.73-.844 5.932 0 .908.171 2.027.578 2.914.178.446.462.842.827 1.153.356.257.806.42 1.398.42 1.221 0 2.957-.643 4.397-1.581 1.444-.943 2.563-2.203 2.563-3.558 0-1.371-1.089-2.957-2.585-4.221-1.487-1.256-3.373-2.211-5.001-2.211a1.14 1.14 0 0 0-.66.188c-.301.26-.533.592-.673.964"
          />
          <path
            fill="currentColor"
            d="M8.104 6.703c.322-.214.652-.274.943-.274 1.792 0 3.793.947 5.34 2.254 1.539 1.298 2.696 3.017 2.696 4.611 0 1.612-1.243 3.009-2.73 3.977-1.5.977-3.334 1.586-4.676 1.586a2.8 2.8 0 0 1-1.701-.518 3.2 3.2 0 0 1-.99-1.273c-.45-.986-.557-2.195-.557-3.125 0-3.214.334-5.074.818-6.141a2.5 2.5 0 0 1 .857-1.097M7.72 8.01c-.442.96-.845 2.73-.845 5.931 0 .909.172 2.027.579 2.915.178.446.462.841.827 1.152.352.258.806.42 1.397.42 1.217 0 2.957-.642 4.393-1.58 1.444-.944 2.572-2.204 2.572-3.558 0-1.371-1.093-2.957-2.589-4.221-1.487-1.256-3.377-2.212-5.006-2.212-.214 0-.441.043-.655.189a2.4 2.4 0 0 0-.678.968z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#DSM__a)"
            d="M8.992 5.417c.321-.214.651-.274.942-.274 1.792 0 3.793.947 5.34 2.254 1.539 1.299 2.696 3.017 2.696 4.611 0 1.612-1.243 3.01-2.73 3.978-1.5.977-3.334 1.585-4.676 1.585a2.8 2.8 0 0 1-1.701-.518 3.2 3.2 0 0 1-.986-1.273c-.454-.986-.557-2.194-.557-3.124 0-3.215.33-5.075.814-6.142a2.5 2.5 0 0 1 .858-1.097m-.386 1.307c-.442.96-.844 2.73-.844 5.932 0 .908.171 2.027.578 2.914.178.446.462.842.827 1.153.352.257.806.42 1.397.42 1.218 0 2.958-.643 4.393-1.582 1.449-.943 2.572-2.203 2.572-3.557 0-1.371-1.093-2.957-2.589-4.221-1.483-1.256-3.377-2.212-4.997-2.212-.219 0-.441.043-.66.189-.301.26-.532.592-.673.964z"
          />
          <path
            fill="url(#DSM__b)"
            d="M9.879 6.274C10.2 6.06 10.53 6 10.822 6c1.795 0 3.792.947 5.34 2.254 1.538 1.299 2.695 3.017 2.695 4.612 0 1.611-1.243 3.008-2.73 3.977-1.5.977-3.33 1.585-4.675 1.585a2.8 2.8 0 0 1-1.702-.518 3.2 3.2 0 0 1-.986-1.273c-.454-.986-.557-2.194-.557-3.124 0-3.214.33-5.074.815-6.142a2.5 2.5 0 0 1 .857-1.097m-.386 1.307c-.441.96-.844 2.73-.844 5.932 0 .908.171 2.027.578 2.914.178.446.462.842.827 1.153.356.257.806.42 1.398.42 1.221 0 2.957-.643 4.397-1.581 1.444-.943 2.563-2.203 2.563-3.558 0-1.371-1.089-2.957-2.585-4.221-1.487-1.256-3.373-2.211-5.001-2.211a1.14 1.14 0 0 0-.66.188c-.301.26-.533.592-.673.964"
          />
          <path
            fill="url(#DSM__c)"
            d="M8.104 6.703c.322-.214.652-.274.943-.274 1.792 0 3.793.947 5.34 2.254 1.539 1.298 2.696 3.017 2.696 4.611 0 1.612-1.243 3.009-2.73 3.977-1.5.977-3.334 1.586-4.676 1.586a2.8 2.8 0 0 1-1.701-.518 3.2 3.2 0 0 1-.99-1.273c-.45-.986-.557-2.195-.557-3.125 0-3.214.334-5.074.818-6.141a2.5 2.5 0 0 1 .857-1.097M7.72 8.01c-.442.96-.845 2.73-.845 5.931 0 .909.172 2.027.579 2.915.178.446.462.841.827 1.152.352.258.806.42 1.397.42 1.217 0 2.957-.642 4.393-1.58 1.444-.944 2.572-2.204 2.572-3.558 0-1.371-1.093-2.957-2.589-4.221-1.487-1.256-3.377-2.212-5.006-2.212-.214 0-.441.043-.655.189a2.4 2.4 0 0 0-.678.968z"
          />
          <defs>
            <linearGradient
              id="DSM__a"
              x1="6.429"
              x2="18.857"
              y1="12.001"
              y2="12.001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FE723F" />
              <stop offset="1" stopColor="#FCA553" />
            </linearGradient>
            <linearGradient
              id="DSM__b"
              x1="6.429"
              x2="18.857"
              y1="12.001"
              y2="12.001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FE723F" />
              <stop offset="1" stopColor="#FCA553" />
            </linearGradient>
            <linearGradient
              id="DSM__c"
              x1="6.429"
              x2="18.857"
              y1="12.001"
              y2="12.001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FE723F" />
              <stop offset="1" stopColor="#FCA553" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconDSM.displayName = 'DSM'
