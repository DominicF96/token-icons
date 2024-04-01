import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconBLXM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m-.214-5.597v-1.714L9.214 8.332c-.141-.142-.514-.343-.857 0-.343.342-.141.715 0 .857zm.428.668v-1.714l3.429 3.215c.141.14.343.514 0 .857s-.716.141-.857 0zM9.93 7.398a.429.429 0 0 0-.574.634l2.357 2.143a.43.43 0 0 0 .574 0l2.357-2.142a.429.429 0 1 0-.574-.635L12 9.28zm6.549 2.079a.428.428 0 0 0-.6.244l-.545 1.637H13.93a.429.429 0 0 0-.322.712l1.5 1.714a.428.428 0 0 0 .643-.566l-.879-1.003h.772a.43.43 0 0 0 .407-.291l.446-1.346a.9.9 0 0 1 .218.566v1.286a.429.429 0 1 0 .858 0v-1.286a1.76 1.76 0 0 0-.42-1.114 2.2 2.2 0 0 0-.673-.557zm-9.069.077a.43.43 0 0 1 .609 0l2.143 2.143a.43.43 0 0 1 .012.591l-2.142 2.357a.43.43 0 0 1-.673-.051 6.6 6.6 0 0 1-.575-1.089A4.1 4.1 0 0 1 6.43 12c.02-.907.37-1.776.985-2.443zm1.414 2.018L7.75 10.497c-.208.328-.35.693-.42 1.076zm-1.495.858c.051.24.137.497.24.745.068.168.145.322.214.463l1.11-1.208z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714m0 .429a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M12.214 10.714v1.715l3.429-3.215c.141-.141.343-.514 0-.857s-.716-.141-.857 0zm-.428 2.332v-1.714l-3.429 3.214c-.141.146-.343.514 0 .857s.716.146.857 0z"
          />
        </>
      ) : (
        <>
          <path
            fill="#203A49"
            d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m-.215-5.597v-1.714L9.214 8.332c-.142-.142-.514-.343-.857 0-.343.342-.142.715 0 .857zm.429.668v-1.714l3.428 3.215c.142.14.343.514 0 .857-.342.342-.715.141-.857 0zM9.93 7.398a.429.429 0 0 0-.575.634l2.357 2.143a.43.43 0 0 0 .575 0l2.357-2.142a.429.429 0 1 0-.574-.635L12 9.28zm6.548 2.079a.43.43 0 0 0-.6.244l-.544 1.637h-1.406a.429.429 0 0 0-.321.712l1.5 1.714a.428.428 0 0 0 .643-.566l-.879-1.003h.771a.43.43 0 0 0 .408-.291l.445-1.346a.9.9 0 0 1 .219.566v1.286a.429.429 0 1 0 .857 0v-1.286a1.76 1.76 0 0 0-.42-1.114 2.2 2.2 0 0 0-.673-.557zm-9.068.077a.43.43 0 0 1 .608 0l2.143 2.143a.43.43 0 0 1 .013.591L8.03 14.644a.43.43 0 0 1-.673-.051 6.6 6.6 0 0 1-.574-1.089A4.1 4.1 0 0 1 6.428 12c.02-.907.371-1.776.986-2.443zm1.414 2.018-1.076-1.075c-.208.328-.35.693-.42 1.076zm-1.496.858c.052.24.137.497.24.745.069.168.146.322.214.463l1.11-1.208z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#459B6E"
            d="M12 18.857a6.857 6.857 0 1 0 0-13.713 6.857 6.857 0 0 0 0 13.713m0 .429a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#459B6E"
            d="M12.214 10.714v1.715l3.428-3.215c.142-.141.343-.514 0-.857-.342-.343-.715-.141-.857 0zm-.429 2.332v-1.714l-3.428 3.214c-.142.146-.343.514 0 .857s.715.146.857 0z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconBLXM.displayName = 'BLXM'
