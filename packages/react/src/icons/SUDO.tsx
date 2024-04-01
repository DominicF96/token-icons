import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconSUDO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M5.803 6.857H4.286l1.838 4.89-1.838 4.967h1.517l1.821-4.967zm12.394 0h1.517l-1.838 4.89 1.838 4.967h-1.517l-1.826-4.967zm-3.296 3.857h-1.307c0-.428-.634-.857-1.47-.857-.835 0-1.607.18-1.607 1.127 0 .943.887.789 2.786 1.222C14.82 12.553 15 13.598 15 14.233c0 .9-.382 2.052-2.876 2.052-2.648 0-3.184-1.508-3.12-2.142h1.432c0 .758.784 1.285 1.688 1.285.9 0 1.637-.428 1.637-1.2 0-.767-.617-.947-2.665-1.277-1.637-.261-1.916-1.423-1.852-1.967C9.18 10.32 9.647 9 12.026 9s2.91 1.114 2.875 1.714"
          />
        </>
      ) : (
        <>
          <path
            fill="#B9B9FF"
            d="M5.803 6.857H4.286l1.839 4.89-1.839 4.967h1.517l1.822-4.967zm12.395 0h1.517l-1.839 4.89 1.839 4.967h-1.517l-1.826-4.967zm-3.296 3.857h-1.307c0-.428-.635-.857-1.47-.857-.836 0-1.607.18-1.607 1.127 0 .943.887.789 2.785 1.222C14.82 12.553 15 13.598 15 14.233c0 .9-.381 2.052-2.875 2.052-2.649 0-3.185-1.508-3.12-2.142h1.431c0 .758.784 1.285 1.689 1.285.9 0 1.637-.428 1.637-1.2 0-.767-.617-.947-2.666-1.277-1.637-.261-1.916-1.423-1.851-1.967C9.18 10.32 9.648 9 12.026 9s2.91 1.114 2.876 1.714"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconSUDO.displayName = 'SUDO'
