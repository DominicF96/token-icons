import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconSKEY = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M5.559 14.546a3.48 3.48 0 0 1 0-4.998l3.885-3.799a3.674 3.674 0 0 1 5.112 0l3.886 3.799a3.48 3.48 0 0 1 0 4.998l-3.886 3.798-.068.065-.28-.874 3.313-3.203a2.925 2.925 0 0 0 0-4.236l-3.33-3.219a3.174 3.174 0 0 0-4.382 0l-3.33 3.22a2.924 2.924 0 0 0 0 4.235l3.32 3.21-.266.887-.089-.085zm8.335 2.006 2.844-2.844a2.11 2.11 0 0 0 0-2.987l-3.244-3.245a2.11 2.11 0 0 0-2.987 0L7.262 10.72a2.11 2.11 0 0 0 0 2.988l2.838 2.838.381-1.267-2.405-2.405a1.234 1.234 0 0 1 0-1.748l3.05-3.05a1.234 1.234 0 0 1 1.748 0l3.05 3.05a1.236 1.236 0 0 1 0 1.748l-2.43 2.43zm-.701-2.191 1.825-1.837a.677.677 0 0 0 0-.954l-2.544-2.56a.666.666 0 0 0-.948 0l-2.544 2.56a.677.677 0 0 0 0 .954l1.787 1.798.271-.902a1.714 1.714 0 1 1 1.864.037z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#SKEY__a)"
            d="M5.559 14.546a3.48 3.48 0 0 1 0-4.998l3.885-3.799a3.674 3.674 0 0 1 5.112 0l3.886 3.799a3.48 3.48 0 0 1 0 4.998l-3.886 3.798-.068.065-.28-.874 3.313-3.203a2.925 2.925 0 0 0 0-4.236l-3.33-3.219a3.174 3.174 0 0 0-4.382 0l-3.33 3.22a2.924 2.924 0 0 0 0 4.235l3.32 3.21-.266.887-.089-.085zm8.335 2.006 2.844-2.844a2.11 2.11 0 0 0 0-2.987l-3.244-3.245a2.11 2.11 0 0 0-2.987 0L7.262 10.72a2.11 2.11 0 0 0 0 2.988l2.838 2.838.381-1.267-2.405-2.405a1.234 1.234 0 0 1 0-1.748l3.05-3.05a1.234 1.234 0 0 1 1.748 0l3.05 3.05a1.236 1.236 0 0 1 0 1.748l-2.43 2.43zm-.701-2.191 1.825-1.837a.677.677 0 0 0 0-.954l-2.544-2.56a.666.666 0 0 0-.948 0l-2.544 2.56a.677.677 0 0 0 0 .954l1.787 1.798.271-.902a1.714 1.714 0 1 1 1.864.037z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="SKEY__a"
              x1="12"
              x2="12"
              y1="4.714"
              y2="18.517"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#530491" />
              <stop offset="1" stopColor="#03F3FB" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconSKEY.displayName = 'SKEY'
