import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconHILO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.616 6.36a7.32 7.32 0 0 1 2.67 5.717l-.069.828a7.286 7.286 0 0 1-6.947 6.38 7.39 7.39 0 0 1-6.943-4.34A7.3 7.3 0 0 1 11.23 4.749q3.04-.27 5.391 1.611zM5.602 12.077q-.002.642.132 1.29a6.49 6.49 0 0 0 6.322 5.04 6.49 6.49 0 0 0 6.343-6.33 6.48 6.48 0 0 0-6.365-6.488c-3.514-.026-6.471 2.957-6.437 6.488zm7.191-3.283c.103.07.202.146.287.236l1.895 1.95.008.009c.182.162.333.357.446.574l-.005.004h-1.011a.06.06 0 0 1-.043-.017l-.158-.167-1.072-1.106c-.141-.137-.278-.282-.42-.428-.308-.322-.557-.557-.973-.377q-.151.063-.355.274l-1.745 1.8a.06.06 0 0 1-.043.017l-.141.009h-.857l-.017-.005-.009-.008a.03.03 0 0 1 0-.03q.09-.152.21-.283a209 209 0 0 1 1.92-1.997c.24-.245.42-.407.544-.472a1.51 1.51 0 0 1 1.543.018zM9.579 12.43h-.986l-.01.002-.007.006a.02.02 0 0 0 0 .022c.116.227.308.42.484.6l.026.021 1.556 1.603q.289.322.651.562.644.359 1.41.017a1.7 1.7 0 0 0 .334-.249q1.082-1.113 2.16-2.229.139-.149.232-.33a.03.03 0 0 0-.013-.02h-.99a.11.11 0 0 0-.086.033l-1.401 1.445-.086.094c-.171.193-.386.437-.578.518-.28.12-.57.043-.79-.175l-.612-.635-1.217-1.255a.11.11 0 0 0-.082-.034z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#HILO__a)"
            d="M16.615 6.36a7.32 7.32 0 0 1 2.67 5.717l-.068.828a7.285 7.285 0 0 1-6.947 6.38 7.39 7.39 0 0 1-6.943-4.34 7.3 7.3 0 0 1 5.901-10.196q3.04-.27 5.392 1.611zM5.601 12.077q-.001.642.133 1.29a6.49 6.49 0 0 0 6.321 5.04 6.49 6.49 0 0 0 6.343-6.33 6.48 6.48 0 0 0-6.364-6.488c-3.514-.026-6.471 2.957-6.437 6.488zm7.192-3.283c.102.07.201.146.287.236l1.894 1.95.008.009c.183.162.334.357.446.574l-.004.004h-1.011a.06.06 0 0 1-.043-.017l-.159-.167-1.071-1.106c-.142-.137-.279-.282-.42-.428-.309-.322-.558-.557-.973-.377-.103.043-.219.133-.356.274l-1.744 1.8a.06.06 0 0 1-.043.017l-.141.009h-.858l-.017-.005-.008-.008a.03.03 0 0 1 0-.03q.09-.152.21-.283.95-1.002 1.92-1.997c.24-.245.42-.407.544-.472a1.51 1.51 0 0 1 1.543.018zM9.578 12.43h-.985q-.006 0-.01.002l-.008.006a.02.02 0 0 0 0 .022c.116.227.309.42.485.6l.025.021 1.556 1.603q.29.322.652.562.643.359 1.41.017a1.7 1.7 0 0 0 .334-.249l2.16-2.229q.139-.149.231-.33a.03.03 0 0 0-.013-.02h-.99a.11.11 0 0 0-.085.033l-1.402 1.445-.086.094c-.17.193-.385.437-.578.518-.279.12-.57.043-.789-.175l-.612-.635-1.218-1.255a.11.11 0 0 0-.081-.034z"
          />
          <defs>
            <linearGradient
              id="HILO__a"
              x1="4.709"
              x2="15.767"
              y1="7.234"
              y2="19.291"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A5DCD" />
              <stop offset=".11" stopColor="#4A53C4" />
              <stop offset=".47" stopColor="#3D065D" />
              <stop offset="1" stopColor="#C772AD" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconHILO.displayName = 'HILO'
