import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconPRIMAL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.303 14.713c.18.737-.223 2.456-.446 3.223.819 0 2.773-.043 3.129-.232.45-.227 1.568 0 2.014 0s1.564-.458 2.014-.458c.446 0 1.564.69 1.787.921.18.185.969.077 1.342 0v-4.144c0-.604-.223-1.153-.223-1.843s.223-1.153.223-1.843c0-.553-.15-3.763-.223-5.297l-.896 3.454v-.921c-.15.231-.446.784-.446 1.153 0 .458-.672 2.301-.895 2.764-.18.369-.523 2.61-.669 3.686a2.2 2.2 0 0 1-.227-.78c0-.317 0-.836-.223-.836s.223-.921.223-1.38c0-.463 0-1.384.227-1.843.223-.463-.45-2.074-.9-2.533-.356-.368-.591-3.072-.669-4.375-.072 1.153-.265 3.591-.445 4.144-.223.69-.673 1.843-.673 2.301 0 .463-.223 1.616-.223 2.306 0 .553-.146 1.303-.223 1.612-.3-.772-.896-2.443-.896-2.996s-.3-1.303-.445-1.612l-.223 1.153L7.753 5.04c-.077 1.843-.223 5.713-.223 6.45 0 .922-.45 2.302-.227 3.223m-.446 4.144v-.428h8.229c.402 0 .715.107.822.214.086.086.857.034 1.235 0v.214c-.523-.034-1.663-.128-2.058-.214-.492-.107-2.468.214-2.88.214-.41 0-1.44-.214-1.85-.214-.33 0-2.47.141-3.498.214"
          />
        </>
      ) : (
        <>
          <path
            fill="#FD2D3A"
            d="M7.303 14.713c.18.737-.223 2.456-.446 3.223.819 0 2.773-.043 3.129-.232.45-.227 1.569 0 2.014 0 .446 0 1.565-.458 2.015-.458.445 0 1.564.69 1.787.921.18.185.968.077 1.341 0v-4.144c0-.604-.223-1.153-.223-1.843s.223-1.153.223-1.843c0-.553-.15-3.763-.223-5.297l-.895 3.454v-.921c-.15.231-.446.784-.446 1.153 0 .458-.673 2.301-.896 2.764-.18.369-.523 2.61-.668 3.686a2.2 2.2 0 0 1-.228-.78c0-.317 0-.836-.222-.836-.223 0 .222-.921.222-1.38 0-.463 0-1.384.228-1.843.222-.463-.45-2.074-.9-2.533-.356-.368-.592-3.072-.669-4.375-.073 1.153-.266 3.591-.446 4.144-.223.69-.673 1.843-.673 2.301 0 .463-.222 1.616-.222 2.306 0 .553-.146 1.303-.223 1.612-.3-.772-.896-2.443-.896-2.996s-.3-1.303-.446-1.612l-.223 1.153L7.753 5.04c-.077 1.843-.223 5.713-.223 6.45 0 .922-.45 2.302-.227 3.223m-.446 4.144v-.428h8.229c.403 0 .716.107.823.214.086.086.857.034 1.234 0v.214c-.523-.034-1.663-.128-2.057-.214-.493-.107-2.469.214-2.88.214s-1.44-.214-1.851-.214c-.33 0-2.469.141-3.498.214"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPRIMAL.displayName = 'PRIMAL'
