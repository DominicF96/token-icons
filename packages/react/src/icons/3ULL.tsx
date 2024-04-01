import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const Icon3ULL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.004 10.26c-.488-.944-2.153-.944-4.095-1.422C5.36 8.462 5.615 6.786 5.942 6 4.385 6.376 4 7.258 4 8.051c0 2.838 3.513 3.16 4 3.624.385.383.16.793 0 .957-.385 1.129 1.01 1.942 1.818 2.257v2.051c0 .479.822 1.368 2.182 1.368s2.182-.89 2.182-1.368v-2.05c0-.479 2.305-1.313 1.818-2.256-.386-.766-.16-.958 0-.958 1.942-.465 4-2.598 4-3.624 0-1.025-.364-1.71-1.818-2.051.364.342.56 2.085-.604 2.838-1.454.95-4.094.478-4.582 1.422-.385.752-.16 2.208 0 2.837l1.673-.471c0 .95-.684 1.422-1.164 1.422-.487 0-1.141.711-1.141 1.183 0 .478 0 1.367-.364 1.367s-.364-1.053-.364-1.367c0-.479-.363-1.183-1.134-1.183-.778 0-1.004-.95-1.004-1.422l1.506.478c.32-.636.385-2.085 0-2.844"
          />
        </>
      ) : (
        <>
          <path fill="url(#3ULL__a)" d="M19.285 7.714H4.714l7.286 12z" />
          <path
            fill="#fff"
            d="M11.413 11.242c-.287-.592-1.268-.592-2.413-.892-.912-.236-.762-1.286-.57-1.778-.917.235-1.144.788-1.144 1.285 0 1.779 2.07 1.98 2.357 2.272.227.24.095.497 0 .6-.227.707.596 1.217 1.072 1.414v1.286c0 .3.484.857 1.285.857.802 0 1.286-.557 1.286-.857v-1.286c0-.3 1.359-.823 1.072-1.414-.228-.48-.095-.6 0-.6 1.144-.292 2.357-1.629 2.357-2.272s-.215-1.071-1.072-1.285c.215.214.33 1.307-.355 1.778-.858.596-2.413.3-2.7.892-.228.471-.095 1.384 0 1.778l.985-.296c0 .596-.403.892-.685.892-.288 0-.673.446-.673.741 0 .3 0 .857-.215.857-.214 0-.214-.66-.214-.857 0-.3-.214-.741-.668-.741-.459 0-.592-.596-.592-.892l.887.3c.189-.398.227-1.307 0-1.782"
          />
          <defs>
            <linearGradient
              id="3ULL__a"
              x1="18.411"
              x2="8.867"
              y1="7.714"
              y2="16.217"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#15493C" />
              <stop offset="1" stopColor="#069A35" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

Icon3ULL.displayName = '3ULL'
