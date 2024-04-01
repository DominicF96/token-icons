import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconBST = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6 12a6 6 0 0 0 6 6v.857A6.857 6.857 0 0 1 5.143 12zm12 0a6 6 0 0 0-6-6v-.857a6.857 6.857 0 1 1 0 13.714V18a6 6 0 0 0 6-6M9.874 6.387a6 6 0 0 0-1.98 1.239l-.588-.625a6.9 6.9 0 0 1 2.265-1.415z"
          />
          <path
            fill="currentColor"
            d="M12 7.714A4.286 4.286 0 0 0 7.715 12h-.858A5.143 5.143 0 0 1 12 6.857zm3.981 2.696a4.3 4.3 0 0 0-.944-1.434l.608-.605c.49.491.874 1.076 1.132 1.72zM7.715 12a4.286 4.286 0 1 0 8.57 0h.858a5.143 5.143 0 0 1-10.286 0z"
          />
          <path
            fill="currentColor"
            d="M14.572 12A2.57 2.57 0 0 0 12 9.429V8.57A3.43 3.43 0 0 1 15.43 12zM12 9.429a2.572 2.572 0 0 0 0 5.142v.857a3.428 3.428 0 1 1 0-6.857zm1.119 4.887a2.6 2.6 0 0 0 1.071-.967l.73.45a3.44 3.44 0 0 1-1.428 1.288z"
          />
          <path
            fill="currentColor"
            d="M12 11.143a.857.857 0 0 0-.857.857h-.857a1.714 1.714 0 1 1 3.428 0h-.857a.857.857 0 0 0-.857-.857"
          />
          <path
            fill="currentColor"
            d="M12.857 12a.857.857 0 0 0-.857-.857v-.857a1.714 1.714 0 1 1 0 3.428v-.857a.857.857 0 0 0 .857-.857"
          />
        </>
      ) : (
        <>
          <path
            fill="#88743C"
            d="M6 12a6 6 0 0 0 6 6v.857A6.857 6.857 0 0 1 5.143 12z"
          />
          <path
            fill="#FFBC00"
            d="M18 12a6 6 0 0 0-6-6v-.857a6.857 6.857 0 1 1 0 13.714V18a6 6 0 0 0 6-6M9.874 6.387c-.735.28-1.408.7-1.981 1.239l-.587-.625A6.9 6.9 0 0 1 9.57 5.586z"
          />
          <path
            fill="#88743C"
            d="M12 7.714A4.286 4.286 0 0 0 7.714 12h-.857A5.143 5.143 0 0 1 12 6.857z"
          />
          <path
            fill="#FFBC00"
            d="M15.98 10.41a4.3 4.3 0 0 0-.943-1.434l.607-.605a5.1 5.1 0 0 1 1.133 1.72zM7.715 12a4.286 4.286 0 1 0 8.571 0h.858a5.143 5.143 0 0 1-10.286 0z"
          />
          <path
            fill="#88743C"
            d="M14.571 12A2.57 2.57 0 0 0 12 9.429V8.57A3.43 3.43 0 0 1 15.428 12z"
          />
          <path
            fill="#FFBC00"
            d="M12 9.429a2.572 2.572 0 0 0 0 5.142v.857a3.428 3.428 0 1 1 0-6.857zm1.118 4.887c.442-.214.814-.55 1.072-.967l.73.45a3.44 3.44 0 0 1-1.428 1.288z"
          />
          <path
            fill="#88743C"
            d="M12 11.143a.857.857 0 0 0-.857.857h-.858a1.714 1.714 0 1 1 3.429 0h-.857a.857.857 0 0 0-.857-.857"
          />
          <path
            fill="#FFBC00"
            d="M12.857 12a.857.857 0 0 0-.857-.857v-.857a1.714 1.714 0 1 1 0 3.428v-.857a.857.857 0 0 0 .857-.857"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconBST.displayName = 'BST'
