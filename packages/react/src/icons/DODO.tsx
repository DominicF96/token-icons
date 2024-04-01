import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconDODO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M10.56 4.612c-.24.497-.004 1.04.334 1.482-4.401.643-5.168 4.77-5.322 7.192h1.714c.103-2.143 1.114-5.37 4.706-5.37 3.59 0 4.607 3.227 4.705 5.37h1.715c.137-2.19-.626-6.403-4.882-7.157.227-.54.386-1.295.133-1.517-.3-.27-.643.042-.78.227-.021-.489-.206-1.457-.741-1.41-.54.051-.7 1.028-.708 1.517-.437-.669-.762-.502-.874-.334m-.274 6.102a.429.429 0 1 1 .857 0v.429a.429.429 0 1 1-.857 0zm3-.428c-.236 0-.429.163-.429.364v.557c0 .202.193.364.429.364s.428-.162.428-.364v-.557c0-.201-.193-.364-.428-.364m-7.23 3.857H4.714v3.428h1.342c.917 0 1.658-.77 1.658-1.714 0-.943-.741-1.714-1.658-1.714M5.854 15h-.282v1.714h.282c.545 0 1.003-.295 1.003-.857 0-.561-.458-.857-1.003-.857m6.575-.857h1.341c.917 0 1.659.771 1.659 1.714s-.742 1.715-1.659 1.715h-1.34zm.857.857h.283c.544 0 1.002.296 1.002.857 0 .562-.458.857-1.002.857h-.283zm-3.429 2.572a1.714 1.714 0 1 0 0-3.429 1.714 1.714 0 0 0 0 3.428m0-.858a.857.857 0 1 0 0-1.713.857.857 0 0 0 0 1.713m9.429-.857a1.714 1.714 0 1 1-3.429 0 1.714 1.714 0 0 1 3.429 0m-.857 0a.857.857 0 1 1-1.715 0 .857.857 0 0 1 1.715 0"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="M10.56 4.612c-.24.497-.005 1.04.334 1.482-4.402.643-5.169 4.77-5.323 7.192h1.714c.103-2.143 1.115-5.37 4.706-5.37s4.607 3.227 4.706 5.37h1.714c.137-2.19-.626-6.403-4.881-7.157.227-.54.385-1.295.132-1.517-.3-.27-.642.042-.78.227-.021-.489-.205-1.457-.741-1.41-.54.051-.699 1.028-.707 1.517-.437-.669-.763-.502-.874-.334m-.275 6.102a.429.429 0 1 1 .857 0v.429a.429.429 0 1 1-.857 0zm3-.428c-.235 0-.428.163-.428.364v.557c0 .202.193.364.428.364.236 0 .429-.162.429-.364v-.557c0-.201-.193-.364-.429-.364m-7.23 3.857H4.714v3.428h1.341c.917 0 1.659-.77 1.659-1.714 0-.943-.742-1.714-1.659-1.714M5.854 15H5.57v1.714h.283c.544 0 1.003-.295 1.003-.857 0-.561-.459-.857-1.003-.857m6.574-.857h1.342c.917 0 1.658.771 1.658 1.714s-.741 1.715-1.658 1.715h-1.342zm.857.857h.283c.544 0 1.003.296 1.003.857 0 .562-.459.857-1.003.857h-.283zm-3.428 2.572a1.714 1.714 0 1 0 0-3.429 1.714 1.714 0 0 0 0 3.428m0-.858a.857.857 0 1 0 0-1.713.857.857 0 0 0 0 1.713m9.428-.857a1.714 1.714 0 1 1-3.428 0 1.714 1.714 0 0 1 3.428 0m-.857 0a.857.857 0 1 1-1.714 0 .857.857 0 0 1 1.714 0"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconDODO.displayName = 'DODO'
