import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconRDD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.56 18.388q.714.26 1.464.377l-.567-1.177zm7.285-8.803h.075c1.42 0 2.575-1.094 2.575-2.43a2.514 2.514 0 0 0-2.575-2.447 2.52 2.52 0 0 0-2.582 2.356q.748.505 1.39 1.14c.467.468.852.989 1.117 1.381m-5.504 9.218q.321.031.642.03h.007c.71 0 1.397-.113 2.054-.317l-.408-3.744-2.96 2.627zm2.537-4.243.415 3.866v.007a6.84 6.84 0 0 0 4.333-8.078z"
          />
          <path
            fill="currentColor"
            d="M14.021 6.226q.136-.339.34-.642h.007a7 7 0 0 0-1.51-.377l.982 9.029 4.719-4.168-.136-.415q-.324.166-.672.272.075.123.128.257a.18.18 0 0 1-.068.226l-.453.317a.2.2 0 0 1-.113.038H17.2a.2.2 0 0 1-.129-.098c-.226-.377-.808-1.337-1.66-2.19a10.7 10.7 0 0 0-2.092-1.623.18.18 0 0 1-.076-.226l.167-.468a.2.2 0 0 1 .098-.113.17.17 0 0 1 .15 0c.06.019.13.057.212.101q.07.04.151.08M10.549 17.15l3.05-2.703h.007l-.604-5.496-5.534 1.751zm-5.383-5.708-.023.552a6.85 6.85 0 0 0 4.137 6.288l1.057-.943-3.133-6.545zm.939-2.937a6.6 6.6 0 0 0-.902 2.658l1.888-.604zm6.482-3.329a8 8 0 0 0-.597-.022 6.83 6.83 0 0 0-5.715 3.073l1.08 2.241 5.61-1.789z"
          />
        </>
      ) : (
        <>
          <path
            fill="#7EC34E"
            d="M9.56 18.388c.474.173.965.3 1.464.377l-.567-1.177z"
          />
          <path
            fill="#ED1C24"
            d="M16.844 9.585h.076c1.42 0 2.574-1.094 2.574-2.43a2.514 2.514 0 0 0-2.574-2.447 2.52 2.52 0 0 0-2.582 2.356q.748.505 1.389 1.14c.468.468.853.989 1.117 1.381"
          />
          <path
            fill="#EF534E"
            d="M11.34 18.803q.32.031.643.03h.007c.71 0 1.397-.113 2.054-.317l-.408-3.744-2.96 2.627z"
          />
          <path
            fill="#FFCB03"
            d="m13.877 14.56.416 3.866v.007a6.84 6.84 0 0 0 4.333-8.078z"
          />
          <path
            fill="#F5811F"
            d="M14.02 6.226q.137-.339.34-.642h.008a7 7 0 0 0-1.51-.377l.982 9.029 4.718-4.168-.136-.415q-.323.166-.672.272.075.123.129.257a.18.18 0 0 1-.069.226l-.452.317a.2.2 0 0 1-.114.038H17.2a.2.2 0 0 1-.128-.098c-.227-.377-.808-1.337-1.661-2.19a10.7 10.7 0 0 0-2.092-1.623.18.18 0 0 1-.075-.226l.166-.468a.2.2 0 0 1 .098-.113.17.17 0 0 1 .151 0c.059.019.129.057.212.101q.069.04.15.08"
          />
          <path
            fill="#EC1C24"
            d="m10.548 17.15 3.05-2.703h.008L13 8.951l-5.533 1.751z"
          />
          <path
            fill="#00A74F"
            d="m5.165 11.442-.022.552a6.85 6.85 0 0 0 4.137 6.288l1.056-.943-3.132-6.545z"
          />
          <path
            fill="#0059A9"
            d="M6.105 8.505a6.6 6.6 0 0 0-.902 2.658l1.887-.604z"
          />
          <path
            fill="#0077C0"
            d="M12.586 5.176a8 8 0 0 0-.596-.022 6.83 6.83 0 0 0-5.715 3.073l1.08 2.241 5.609-1.789z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconRDD.displayName = 'RDD'
