import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconBHAT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.677 10.007a4.9 4.9 0 0 0 1.723-.45 12.4 12.4 0 0 0 1.723-.878l.184-.116-.664-2.263a1.2 1.2 0 0 0-.163-.386 1.14 1.14 0 0 0-1.616-.321 1.1 1.1 0 0 1-.904.171l-.231-.047 2.28 1.324L8.88 5.186a.904.904 0 0 0-1.161.771v.022l-.305 2.567.429.171.013.009c.711.283 1.568.587 2.37.827q.86.276 1.753.411.348.043.698.043m-8.49-.45-.008-.004H4.17a.74.74 0 0 0-.741.741.68.68 0 0 0 .231.51 9.7 9.7 0 0 0 3.626 2.22c.111.3.24.596.386.879l.565 1.354c.205.488.503.93.879 1.303l.986.986q.282.356.552.673a1.758 1.758 0 0 0 2.713 0l.549-.673.99-.986a4 4 0 0 0 .878-1.303l.566-1.35q.219-.43.386-.887a9.7 9.7 0 0 0 3.621-2.216.73.73 0 0 0 .215-.582.707.707 0 0 0-.746-.66h-3.223a5.92 5.92 0 0 1-4.74 1.414c-1.431-.172-2.769-.725-4.093-1.282a1.9 1.9 0 0 0-.711-.137zM16.153 13.2c-.051.784-.579 1.684-1.397 2.254-.81.562-1.659.643-2.186.287a1 1 0 0 1-.098-.08 2.93 2.93 0 0 1 .874-1.947 14 14 0 0 0 1.243-.18l.827-.158c.244-.052.493-.107.737-.172zm-4.611 2.456-.099.081c-.531.36-1.38.292-2.199-.283-.814-.578-1.345-1.47-1.392-2.254q.36.098.732.172l.828.162q.618.117 1.242.176c.528.515.845 1.21.888 1.946"
          />
        </>
      ) : (
        <>
          <path
            fill="#23273D"
            d="M12.677 10.007a4.9 4.9 0 0 0 1.723-.45 12.4 12.4 0 0 0 1.723-.878l.184-.116-.664-2.263a1.2 1.2 0 0 0-.163-.386 1.14 1.14 0 0 0-1.616-.321 1.1 1.1 0 0 1-.904.171l-.231-.047 2.28 1.324L8.88 5.186a.904.904 0 0 0-1.161.771v.022l-.305 2.567.429.171.013.009c.711.283 1.568.587 2.37.827q.86.276 1.753.411.348.043.698.043m-8.49-.45-.008-.004H4.17a.74.74 0 0 0-.741.741.68.68 0 0 0 .231.51 9.7 9.7 0 0 0 3.626 2.22c.111.3.24.596.386.879l.565 1.354c.205.488.503.93.879 1.303l.986.986q.282.356.552.673a1.758 1.758 0 0 0 2.713 0l.549-.673.99-.986a4 4 0 0 0 .878-1.303l.566-1.35q.219-.43.386-.887a9.7 9.7 0 0 0 3.621-2.216.73.73 0 0 0 .215-.582.707.707 0 0 0-.746-.66h-3.223a5.92 5.92 0 0 1-4.74 1.414c-1.431-.172-2.769-.725-4.093-1.282a1.9 1.9 0 0 0-.711-.137zM16.153 13.2c-.051.784-.579 1.684-1.397 2.254-.81.562-1.659.643-2.186.287a1 1 0 0 1-.098-.08 2.93 2.93 0 0 1 .874-1.947 14 14 0 0 0 1.243-.18l.827-.158c.244-.052.493-.107.737-.172zm-4.611 2.456-.099.081c-.531.36-1.38.292-2.199-.283-.814-.578-1.345-1.47-1.392-2.254q.36.098.732.172l.828.162q.618.117 1.242.176c.528.515.845 1.21.888 1.946"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconBHAT.displayName = 'BHAT'
