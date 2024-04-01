import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconCAKE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.386 5.143c-1.127 0-1.886 1.028-1.672 2.143l.43 2.571c-1.69.729-3 2.057-3 3.643v.986c0 1.328.865 2.442 2.078 3.171 1.251.771 2.892 1.2 4.757 1.2s3.506-.428 4.757-1.2c1.256-.729 2.121-1.843 2.121-3.171V13.5c0-1.586-1.311-2.871-3-3.6l.429-2.614c.171-1.115-.63-2.143-1.757-2.143-.995 0-1.672.814-1.672 1.8v2.306c-.338-.043-.621-.043-.878-.043h-.977l.141-2.263c0-.986-.767-1.8-1.757-1.8m.257 9.428c.36 0 .643-.492.643-1.071s-.283-1.072-.643-1.072S9 12.922 9 13.5s.283 1.071.643 1.071m4.714 0c.36 0 .643-.492.643-1.071s-.283-1.072-.643-1.072-.643.493-.643 1.072.283 1.071.643 1.071"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#FBD984"
            d="M18.643 14.623c0 2.216-2.97 4.028-6.621 4.028S5.4 16.84 5.4 14.624v-1.041h13.286v1.041z"
          />
          <path
            fill="#CA7D45"
            d="M7.959 6.934A1.31 1.31 0 0 1 9.236 5.35c.729 0 1.547.591 1.547 1.315v2.983c.459-.043.69-.086 1.192-.086.458 0 .694-.047 1.148 0l.116-3.055c0-.725.698-1.157 1.431-1.157.819 0 1.458.771 1.325 1.585l-.403 3.257c1.92.725 3.047 1.99 3.047 3.438 0 2.215-2.966 4.024-6.617 4.024-3.652 0-6.622-1.809-6.622-4.029 0-1.444 1.012-2.708 2.932-3.433z"
          />
          <path
            fill="#522D0B"
            d="M10.286 13.5c0 .579-.283 1.071-.643 1.071S9 14.08 9 13.5s.283-1.072.643-1.072.643.493.643 1.072m4.714 0c0 .579-.283 1.071-.643 1.071s-.643-.492-.643-1.071.283-1.072.643-1.072.643.493.643 1.072"
          />
          <path
            fill="#522D0B"
            d="M7.714 7.286C7.5 6.17 8.258 5.143 9.385 5.143c.99 0 1.758.814 1.758 1.8L11 9.206h.977c.257 0 .54 0 .879.043V6.943c0-.986.677-1.8 1.671-1.8 1.127 0 1.929 1.028 1.757 2.143L15.857 9.9c1.688.729 3 2.014 3 3.6v.986c0 1.328-.866 2.442-2.122 3.171-1.251.771-2.892 1.2-4.757 1.2s-3.505-.428-4.757-1.2c-1.213-.729-2.078-1.843-2.078-3.171V13.5c0-1.586 1.311-2.914 3-3.643zm7.714 3 .429-3.03c.128-.772-.463-1.599-1.286-1.599A1.286 1.286 0 0 0 13.277 6.9v2.829a10 10 0 0 0-1.299-.086c-.45 0-.977.043-1.341.086l.077-2.786c0-.686-.643-1.372-1.329-1.372-.78 0-1.388.858-1.212 1.629l.398 3.086c-1.817.685-3 1.885-3 3.257v.986c0 2.1 2.966 3.9 6.429 3.9s6.428-1.8 6.428-3.9v-.986c.043-1.414-1.14-2.572-3-3.257"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconCAKE.displayName = 'CAKE'
