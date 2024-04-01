import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconPNG = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.416 8.143 9.039 9.3l2.4 1.749-1.908 1.38-2.245-1.642.857-2.644zm.445 0 1.925 1.401v1.235l-2.25-1.637zm-.32 4.804-.005.017 2.25 1.637v-3.287L9.54 12.943zm.41.845 1.83 1.332h.005v1.59l-2.25-1.637.42-1.286zm4.633-5.649h1.273l.857 2.653-2.25 1.633-1.894-1.385 2.391-1.735zm-2.37 1.401 1.929-1.401.321.999-2.25 1.632V9.54zm2.246 3.403-2.24-1.627h-.005v3.28l2.25-1.637zm-2.246 2.182 1.835-1.333.415 1.286-2.25 1.632v-1.59z"
          />
          <path
            fill="currentColor"
            d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714m0 .429a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#E1AA00"
            d="M9.415 8.143 9.038 9.3l2.4 1.749-1.907 1.38-2.246-1.642.857-2.644zm.446 0 1.924 1.401v1.235l-2.25-1.637zm-.321 4.804-.005.017 2.25 1.637v-3.287L9.54 12.943zm.411.845 1.83 1.332h.004v1.59l-2.25-1.637.42-1.286z"
          />
          <path
            fill="#FFC800"
            d="M14.584 8.143h1.273l.857 2.653-2.25 1.633-1.894-1.385 2.39-1.734zm-2.37 1.401 1.928-1.401.322.999-2.25 1.632V9.54zm2.246 3.403-2.242-1.628h-.004V14.6l2.25-1.637zm-2.246 2.182 1.834-1.333.416 1.286-2.25 1.632v-1.59z"
          />
          <path
            fill="#FFC800"
            d="M12 18.857a6.857 6.857 0 1 0 0-13.713 6.857 6.857 0 0 0 0 13.713m0 .429a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPNG.displayName = 'PNG'
