import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconDVF = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.329 12.15c-.617-.077-.853-.248-.892-.321-.056.681.189 2.04 1.599 2.04 1.406 0 1.808-1.14 1.834-1.715h.09a.96.96 0 0 1 .09.622 1.92 1.92 0 0 1 1.38 1.796h.643c0-1.158-.429-1.822-.643-1.998l.064-.12c.343.184.615.476.772.832l.116.043c.89.398 1.56.115 1.787-.078a1.7 1.7 0 0 1-.236-.715h.176c.008.051.085.257.334.686.219.38.621.458 1.016.535.158.03.317.06.458.107.394.142.412.532.373.707h.424v-.342c0-.386-.223-.716-.428-1.016-.176-.257-.343-.493-.343-.729 0-.415.231-.724.343-.827-.099-.03-.18-.146-.279-.287-.146-.21-.33-.48-.698-.6a1.4 1.4 0 0 0-.557-.069c-.19.005-.455.013-.973-.042-.48-.056-.772-.3-1.085-.558-.385-.33-.801-.672-1.628-.672-1.187 0-1.586.998-1.642 1.5-.124-.2-.316-.35-.54-.425.005.532-.12 1.183-.643 1.402-.428.18-.784-.12-.912-.292-.167.18-.069.429 0 .536m3.214 2.422c.086-.394.06-.804-.077-1.183l.081-.043c.463.351.532.977.506 1.226zm3.75-1.128c.081.112.343.36.729.463a1.47 1.47 0 0 1-.343.665h-.605c.155-.172.39-.652.12-1.025z"
          />
          <path
            fill="currentColor"
            d="M12 19.286a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57m0-.429a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#DVF__a)"
            d="M7.328 12.15c-.617-.077-.853-.248-.891-.321-.056.681.188 2.04 1.598 2.04 1.406 0 1.809-1.14 1.835-1.715h.09c.128.223.115.51.09.622a1.92 1.92 0 0 1 1.38 1.796h.642c0-1.158-.428-1.822-.642-1.998l.064-.12c.343.184.614.476.771.832l.116.043c.891.398 1.56.115 1.787-.078a1.7 1.7 0 0 1-.236-.715h.176c.009.051.086.257.334.686.219.38.622.458 1.016.535.159.03.317.06.459.107.394.142.411.532.373.707h.424v-.342c0-.386-.223-.716-.429-1.016-.175-.257-.343-.493-.343-.729 0-.415.232-.724.343-.827-.098-.03-.18-.146-.278-.287-.146-.21-.33-.48-.699-.6a1.4 1.4 0 0 0-.557-.069c-.189.005-.454.013-.973-.042-.48-.056-.771-.3-1.084-.558-.386-.33-.802-.672-1.629-.672-1.187 0-1.585.998-1.641 1.5-.125-.2-.316-.35-.54-.425.004.532-.12 1.183-.643 1.402-.429.18-.784-.12-.913-.292-.167.18-.068.429 0 .536m3.214 2.422c.087-.394.06-.804-.077-1.183l.082-.043c.463.351.531.977.505 1.226zm3.75-1.128c.082.112.343.36.729.463a1.47 1.47 0 0 1-.343.665h-.604c.154-.172.39-.652.12-1.025z"
          />
          <path
            fill="url(#DVF__b)"
            d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572m0-.429a6.857 6.857 0 1 0 0-13.713 6.857 6.857 0 0 0 0 13.713"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="DVF__a"
              x1="5.416"
              x2="20.05"
              y1="18.072"
              y2="14.938"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FCDEA0" />
              <stop offset=".5" stopColor="#ED5F5E" />
              <stop offset=".88" stopColor="#67C9CB" />
            </linearGradient>
            <linearGradient
              id="DVF__b"
              x1="16.83"
              x2="6.171"
              y1="7.427"
              y2="15.892"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6FC3CE" />
              <stop offset="1" stopColor="#F96962" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconDVF.displayName = 'DVF'
