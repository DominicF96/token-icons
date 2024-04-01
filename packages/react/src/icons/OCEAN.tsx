import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconOCEAN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.9 11.743a.736.736 0 0 1-.741.728.733.733 0 0 1-.737-.728c0-.403.33-.729.737-.729s.737.326.737.729zm11.717 0c0 .402-.33.728-.737.728a.733.733 0 0 1-.737-.728c0-.403.33-.729.737-.729s.737.326.737.729m-5.858 2.875c0 .403-.33.729-.737.729a.733.733 0 0 1-.738-.729c0-.398.33-.728.738-.728.407 0 .737.33.737.728m-2.953-1.414c0 .399-.33.729-.737.729a.735.735 0 0 1-.737-.729.73.73 0 0 1 .737-.729.73.73 0 0 1 .737.729m5.863 0c0 .399-.33.729-.737.729a.735.735 0 0 1-.738-.729.73.73 0 0 1 .738-.729.73.73 0 0 1 .737.729m-9.013.746a.494.494 0 0 1-.497.493.494.494 0 0 1-.497-.493.497.497 0 0 1 .994 0m11.721 0a.494.494 0 0 1-.497.493.494.494 0 0 1-.497-.493.497.497 0 0 1 .994 0m-5.858 2.914a.5.5 0 0 1-.999.004c0-.274.227-.493.502-.493.274 0 .497.219.497.493zM9.57 15.407a.495.495 0 0 1-.501.493.494.494 0 0 1-.497-.493c0-.27.222-.493.497-.493.278 0 .501.223.501.493m5.859 0a.494.494 0 0 1-.497.493.5.5 0 0 1-.502-.493.5.5 0 0 1 .999 0m-9.009.278a.257.257 0 0 1-.257.258.256.256 0 0 1-.261-.258.258.258 0 0 1 .514 0zm11.722 0a.257.257 0 0 1-.258.258.256.256 0 0 1-.26-.258.258.258 0 0 1 .513 0zM12.279 18.6a.257.257 0 1 1-.514 0 .257.257 0 0 1 .514 0M9.33 17.143a.257.257 0 0 1-.257.257.258.258 0 0 1-.186-.44.257.257 0 0 1 .439.183zm5.859 0a.257.257 0 1 1-.514 0 .257.257 0 0 1 .514 0m-2.19-11.015c0 .545-.45.986-.999.986a.99.99 0 0 1-.998-.986c0-.544.45-.985.998-.985a.99.99 0 0 1 .999.985m0 2.915c0 .544-.45.985-.999.985a.99.99 0 0 1-.998-.985c0-.545.45-.986.998-.986a.99.99 0 0 1 .999.986m0 2.88c0 .544-.45.985-.999.985a.99.99 0 0 1-.998-.985c0-.545.45-.986.998-.986a.99.99 0 0 1 .999.986m5.858-2.88a.99.99 0 0 1-.998.985.99.99 0 0 1-.995-.985.99.99 0 0 1 .995-.986.99.99 0 0 1 .998.986m-11.721 0a.99.99 0 0 1-.994.985.99.99 0 0 1-.999-.985c0-.545.446-.986.999-.986a.99.99 0 0 1 .994.986m2.949-1.458a.99.99 0 0 1-.995.986.99.99 0 0 1-.998-.986.99.99 0 0 1 .998-.985.99.99 0 0 1 .995.985m0 2.876a.99.99 0 0 1-.995.986.99.99 0 0 1-.998-.986c0-.544.445-.986.998-.986a.99.99 0 0 1 .995.986m5.862-2.871a.99.99 0 0 1-.998.981.99.99 0 0 1-.995-.986.99.99 0 0 1 .995-.985.99.99 0 0 1 .998.985zm0 2.871a.99.99 0 0 1-.998.986.99.99 0 0 1-.995-.986.99.99 0 0 1 .995-.986.99.99 0 0 1 .998.986"
          />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="M6.9 11.743a.736.736 0 0 1-.742.728.733.733 0 0 1-.737-.728c0-.403.33-.729.737-.729s.737.326.737.729zm11.717 0c0 .402-.33.728-.737.728a.733.733 0 0 1-.737-.728c0-.403.33-.729.737-.729s.737.326.737.729m-5.859 2.875c0 .403-.33.729-.737.729a.733.733 0 0 1-.737-.729c0-.398.33-.728.737-.728s.737.33.737.728m-2.953-1.414c0 .399-.33.729-.737.729a.735.735 0 0 1-.737-.729.73.73 0 0 1 .737-.729.73.73 0 0 1 .737.729m5.863 0c0 .399-.33.729-.737.729a.735.735 0 0 1-.737-.729.73.73 0 0 1 .737-.729.73.73 0 0 1 .737.729m-9.013.746a.494.494 0 0 1-.497.493.494.494 0 0 1-.497-.493.497.497 0 0 1 .994 0m11.722 0a.494.494 0 0 1-.497.493.494.494 0 0 1-.497-.493.497.497 0 0 1 .994 0m-5.859 2.914a.5.5 0 0 1-.999.004c0-.274.228-.493.502-.493s.497.219.497.493zM9.57 15.407a.495.495 0 0 1-.502.493.494.494 0 0 1-.497-.493c0-.27.223-.493.497-.493.279 0 .502.223.502.493m5.858 0a.494.494 0 0 1-.497.493.5.5 0 0 1-.501-.493.5.5 0 0 1 .998 0m-9.008.278a.257.257 0 0 1-.257.258.256.256 0 0 1-.262-.258c0-.141.116-.257.257-.257.146 0 .257.116.257.257zm11.721 0a.257.257 0 0 1-.257.258.256.256 0 0 1-.261-.258.258.258 0 0 1 .514 0zM12.278 18.6a.257.257 0 1 1-.514 0 .257.257 0 0 1 .514 0M9.33 17.143a.257.257 0 0 1-.257.257.258.258 0 0 1-.187-.44.257.257 0 0 1 .44.183zm5.858 0a.257.257 0 1 1-.514 0 .257.257 0 0 1 .514 0m-2.19-11.015c0 .545-.45.986-.998.986a.99.99 0 0 1-1-.986c0-.544.45-.985.999-.985a.99.99 0 0 1 .998.985m0 2.915c0 .544-.45.985-.998.985A.99.99 0 0 1 11 9.043c0-.545.45-.986.999-.986a.99.99 0 0 1 .998.986m0 2.88c0 .544-.45.985-.998.985a.99.99 0 0 1-.999-.985c0-.545.45-.986.999-.986a.99.99 0 0 1 .998.986m5.859-2.88a.99.99 0 0 1-.999.985.99.99 0 0 1-.994-.985.99.99 0 0 1 .994-.986.99.99 0 0 1 .999.986m-11.722 0a.99.99 0 0 1-.994.985.99.99 0 0 1-.998-.985.99.99 0 0 1 .998-.986.99.99 0 0 1 .994.986m2.949-1.458a.99.99 0 0 1-.994.986.99.99 0 0 1-.999-.986c0-.544.446-.985.999-.985a.99.99 0 0 1 .994.985m0 2.876a.99.99 0 0 1-.994.986.99.99 0 0 1-.999-.986c0-.544.446-.986.999-.986a.99.99 0 0 1 .994.986m5.863-2.871a.99.99 0 0 1-.999.981.99.99 0 0 1-.994-.986.99.99 0 0 1 .994-.985.99.99 0 0 1 .999.985zm0 2.871a.99.99 0 0 1-.999.986.99.99 0 0 1-.994-.986.99.99 0 0 1 .994-.986.99.99 0 0 1 .999.986"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconOCEAN.displayName = 'OCEAN'
