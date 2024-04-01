import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconWITCH = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.583 6.951a1.09 1.09 0 0 1 .6 1.466l-4.157 8.91a1.13 1.13 0 0 1-.673.784 1.2 1.2 0 0 1-1.547-.57L8.572 8.417a1.09 1.09 0 0 1 .6-1.466q.233-.095.467-.094h4.633c.642 0 1.157.48 1.157 1.071 0 .592-.515 1.072-1.157 1.072h-2.859l2.469 5.323 3.154-6.802a1.2 1.2 0 0 1 1.543-.57zm-7.856.57a1.2 1.2 0 0 0-.15-.235h3.695c.385 0 .728.287.728.642s-.343.643-.728.643h-3.06zm3.412 7.359 3.325-7.18a.72.72 0 0 1 .93-.343c.356.15.515.545.36.879l-3.857 8.271zm-4.77-7.522a.714.714 0 0 1 .925.343l4.23 9.125c.159.338 0 .728-.36.878a.72.72 0 0 1-.93-.343l-4.23-9.124c-.154-.334.005-.729.365-.879M4.813 8.64a1.09 1.09 0 0 1 .604-1.466 1.2 1.2 0 0 1 1.547.57l4.23 9.124a1.087 1.087 0 0 1-.6 1.466 1.2 1.2 0 0 1-1.551-.57l-4.23-9.128zm.793-1.059a.72.72 0 0 1 .93.343l4.23 9.124c.154.335-.004.729-.364.879-.356.15-.772-.004-.926-.343L5.246 8.46c-.159-.339 0-.729.36-.879"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#WITCH__a)"
            d="M18.583 6.951a1.09 1.09 0 0 1 .6 1.466l-4.158 8.91a1.13 1.13 0 0 1-.673.784 1.2 1.2 0 0 1-1.547-.57L8.571 8.417a1.09 1.09 0 0 1 .6-1.466c.154-.064.313-.094.467-.094h4.633c.643 0 1.157.48 1.157 1.071 0 .592-.514 1.072-1.157 1.072h-2.859l2.47 5.323 3.153-6.802a1.2 1.2 0 0 1 1.543-.57zm-7.856.57a1.2 1.2 0 0 0-.15-.235h3.694c.386 0 .729.287.729.642s-.343.643-.729.643h-3.06zm3.411 7.359 3.326-7.18a.72.72 0 0 1 .93-.343c.356.15.514.545.36.879l-3.857 8.271zm-4.77-7.522c.356-.15.772.005.926.343l4.23 9.125c.159.338 0 .728-.36.878a.72.72 0 0 1-.93-.343l-4.23-9.124c-.154-.334.004-.729.364-.879M4.813 8.64a1.09 1.09 0 0 1 .604-1.466 1.2 1.2 0 0 1 1.547.57l4.23 9.124a1.09 1.09 0 0 1-.6 1.466 1.2 1.2 0 0 1-1.551-.57l-4.23-9.128zm.792-1.059a.72.72 0 0 1 .93.343l4.23 9.124c.155.335-.004.729-.364.879a.714.714 0 0 1-.926-.343L5.245 8.46c-.158-.339 0-.729.36-.879"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="WITCH__a"
              x1="5.185"
              x2="18.578"
              y1="8.636"
              y2="8.636"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#72F6FD" />
              <stop offset=".53" stopColor="#1B67FF" />
              <stop offset="1" stopColor="#8B3BEF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconWITCH.displayName = 'WITCH'
