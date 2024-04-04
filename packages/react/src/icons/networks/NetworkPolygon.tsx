import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const NetworkPolygon = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m15.88 14.86 3.794-2.165a.64.64 0 0 0 .326-.558v-4.33a.64.64 0 0 0-.326-.556L15.88 5.086a.66.66 0 0 0-.65 0L11.432 7.25a.64.64 0 0 0-.325.557v7.737l-2.662 1.517-2.661-1.517v-3.036l2.661-1.517 1.755 1.001V9.958l-1.43-.816a.66.66 0 0 0-.65 0l-3.796 2.165a.64.64 0 0 0-.325.557v4.33c0 .229.124.442.325.557l3.796 2.165c.2.114.45.114.65 0l3.796-2.165a.64.64 0 0 0 .325-.557V8.455l.048-.026 2.613-1.49 2.661 1.516v3.036l-2.661 1.517-1.753-.999v2.037l1.427.814a.66.66 0 0 0 .651 0z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#polygon__a)"
            d="m15.88 14.86 3.794-2.165a.64.64 0 0 0 .326-.558v-4.33a.64.64 0 0 0-.326-.556L15.88 5.086a.66.66 0 0 0-.65 0L11.432 7.25a.64.64 0 0 0-.325.557v7.737l-2.662 1.517-2.661-1.517v-3.036l2.661-1.517 1.755 1.001V9.958l-1.43-.816a.66.66 0 0 0-.65 0l-3.796 2.165a.64.64 0 0 0-.325.557v4.33c0 .229.124.442.325.557l3.796 2.165c.2.114.45.114.65 0l3.796-2.165a.64.64 0 0 0 .325-.557V8.455l.048-.026 2.613-1.49 2.661 1.516v3.036l-2.661 1.517-1.753-.999v2.037l1.427.814a.66.66 0 0 0 .651 0z"
          />
          <defs>
            <linearGradient
              id="polygon__a"
              x1="3.948"
              x2="19.217"
              y1="16.617"
              y2="7.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A726C1" />
              <stop offset=".88" stopColor="#803BDF" />
              <stop offset="1" stopColor="#7B3FE4" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

NetworkPolygon.displayName = 'polygon'
