import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconMPL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 6c4.016 0 7.286 1.346 7.286 3 0 1.56-2.752 2.846-6.429 3v-.514c.035-1.44.262-1.415 1.457-2.023.682-.223 1.115-.557 1.115-.943 0-.673-1.436-1.221-3.215-1.221S9 7.847 9 8.529c0 .274.227.522.626.728 1.238.712 1.946.523 1.946 2.272V12c-3.883-.06-6.858-1.38-6.858-3 0-1.654 3.257-3 7.286-3"
          />
          <path
            fill="currentColor"
            d="M18.913 11.143c.24.283.373.587.373.896 0 .904-.892 1.572-2.572 2.104V12.9c0-.343.048-.326.373-.454a4.54 4.54 0 0 0 1.826-1.303m-3.484 3.428c-1.033.228-2.173.429-3.433.429-4.016 0-7.282-1.376-7.282-2.953 0-.317.129-.621.373-.891.926 1.097 3.399 1.903 6.485 1.958v.386c0 .283.214.643.604.643s.681-.373.681-.643v-.399a14.6 14.6 0 0 0 2.289-.244.29.29 0 0 1 .283.292z"
          />
          <path
            fill="currentColor"
            d="M18.879 14.143c.261.3.407.63.407.964C19.286 16.701 16.029 18 12 18c-4.016 0-7.286-1.299-7.286-2.893 0-.334.163-.664.429-.964.999 1.127 3.673 1.714 6.844 1.714 1.265 0 2.585 0 3.442-.141v.368c0 .287.223.63.651.63s.634-.368.634-.643v-.642c1.08-.335 1.706-.772 2.165-1.286"
          />
        </>
      ) : (
        <>
          <path
            fill="#FF7900"
            d="M12 6c4.015 0 7.285 1.346 7.285 3 0 1.56-2.751 2.846-6.428 3v-.514c.034-1.44.261-1.415 1.457-2.023.681-.223 1.114-.557 1.114-.943 0-.673-1.436-1.221-3.214-1.221S9 7.847 9 8.529c0 .274.227.522.625.728 1.239.712 1.946.523 1.946 2.272V12c-3.883-.06-6.857-1.38-6.857-3 0-1.654 3.257-3 7.286-3"
          />
          <path
            fill="#FF7900"
            d="M18.912 11.143c.24.283.373.587.373.896 0 .904-.891 1.572-2.571 2.104V12.9c0-.343.047-.326.373-.454a4.54 4.54 0 0 0 1.825-1.303m-3.484 3.428c-1.033.228-2.173.429-3.433.429-4.015 0-7.281-1.376-7.281-2.953 0-.317.128-.621.373-.891.925 1.097 3.398 1.903 6.484 1.958v.386c0 .283.214.643.604.643s.682-.373.682-.643v-.399a14.6 14.6 0 0 0 2.288-.244.29.29 0 0 1 .283.292z"
          />
          <path
            fill="#FF7900"
            d="M18.878 14.143c.262.3.407.63.407.964C19.285 16.701 16.028 18 12 18c-4.016 0-7.286-1.299-7.286-2.893 0-.334.163-.664.428-.964.999 1.127 3.673 1.714 6.845 1.714 1.264 0 2.584 0 3.441-.141v.368c0 .287.223.63.652.63.428 0 .634-.368.634-.643v-.642c1.08-.335 1.706-.772 2.164-1.286"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconMPL.displayName = 'MPL'
