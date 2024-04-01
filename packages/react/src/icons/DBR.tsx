import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconDBR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.857 6.857h-2.143l-.643 2.572H8.018c-1.161 0-4.161 1.063-4.161 4.088 0 1.672.994 2.769 2.7 2.769h4.114l.472-1.715H7.17C6.823 14.56 6 14.114 6 13.342c0-.968 1.123-2.198 2.4-2.198h1.243L9 13.714c1.26 0 2.357-.857 2.661-2.078zm3.428 0h-2.142l-1.715 6.857h2.143l.643-2.571h1.749c.342.013 1.037.458 1.037 1.23 0 .969-1.106 2.199-2.379 2.199h-2.138a1.924 1.924 0 0 0-1.912 1.714h4.427c1.38-.103 4.145-1.063 4.145-4.089 0-1.671-.986-2.768-2.683-2.768h-1.817z"
          />
        </>
      ) : (
        <>
          <path
            fill="#151E57"
            d="M12.857 6.857h-2.142l-.643 2.572H8.019c-1.162 0-4.162 1.063-4.162 4.088 0 1.672.995 2.769 2.7 2.769h4.115l.471-1.715H7.17C6.823 14.56 6 14.114 6 13.342c0-.968 1.123-2.198 2.4-2.198h1.243L9 13.714c1.26 0 2.357-.857 2.662-2.078zm3.429 0h-2.143l-1.714 6.857h2.143l.643-2.571h1.748c.343.013 1.037.458 1.037 1.23 0 .969-1.105 2.199-2.378 2.199h-2.139a1.924 1.924 0 0 0-1.911 1.714h4.427c1.38-.103 4.144-1.063 4.144-4.089 0-1.671-.986-2.768-2.683-2.768h-1.817z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconDBR.displayName = 'DBR'
