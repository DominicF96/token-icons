import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconHAIR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714m0 .429a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M11.572 9H9.857l.429.429v4.714l-.429.428h1.715l-.43-.428V9.429z"
          />
          <path
            fill="currentColor"
            d="M7.714 13.286v-1.114c.493-.55 1.415-1.496 2.255-1.35.518.085.728.715.677 1.174.171-.172.343-.352.544-.489.15-.107.459-.27.789-.103.304.15.428.416.484.622l.12-.073c.274-.163.686-.381 1.131-.381h2.572v.857h-2.572c-.317 0-.613.21-.87.373-.188.12-.394.27-.63.27a.5.5 0 0 1-.385-.176c-.163-.189-.129-.429-.193-.656-.27.21-.472.489-.754.686-.15.103-.46.265-.79.098a.7.7 0 0 1-.27-.218c-.278-.386.104-.75-.055-1.119-.745.266-1.543 1.033-2.053 1.599"
          />
          <path
            fill="currentColor"
            d="M14.143 9h-1.714l.428.429v4.714l-.428.428h1.714l-.429-.428V9.429z"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="M12 18.857a6.857 6.857 0 1 0 0-13.713 6.857 6.857 0 0 0 0 13.713m0 .429a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#000"
            d="M11.571 9H9.857l.428.429v4.714l-.428.428h1.714l-.429-.428V9.429z"
          />
          <path
            fill="#3FD0C8"
            d="M7.714 13.286v-1.114c.493-.55 1.414-1.496 2.254-1.35.519.085.729.715.677 1.174.172-.172.343-.352.545-.489.15-.107.458-.27.788-.103.304.15.429.416.484.622l.12-.073c.275-.163.686-.381 1.132-.381h2.571v.857h-2.571c-.317 0-.613.21-.87.373-.189.12-.394.27-.63.27a.5.5 0 0 1-.386-.176c-.163-.189-.128-.429-.193-.656-.27.21-.471.489-.754.686-.15.103-.459.265-.789.098a.7.7 0 0 1-.27-.218c-.278-.386.103-.75-.055-1.119-.746.266-1.543 1.033-2.053 1.599"
          />
          <path
            fill="#000"
            d="M14.142 9h-1.714l.429.429v4.714l-.429.428h1.714l-.428-.428V9.429z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconHAIR.displayName = 'HAIR'
