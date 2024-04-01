import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconSTOS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.572 8.572c0-1.072-1.06-2.143-2.173-2.143-1.115 0-2.096 1.071-2.096 2.143 0 .308.077.6.206.857l-.678.664-.02.013a2.86 2.86 0 0 1-.382-1.534c0-1.655 1.242-3 2.97-3a2.983 2.983 0 0 1 3.03 3c0 1.654-1.535 3-3.258 3H4.715l1.715-1.286v.428h5.785c1.115 0 2.358-1.07 2.358-2.142M9.429 15c0 1.072 1.058 2.143 2.172 2.143s2.113-1.071 2.113-2.143c0-.308-.072-.6-.205-.857l.66-.664.021-.013c.279.45.382.977.382 1.534 0 1.654-1.243 3-2.97 3a2.984 2.984 0 0 1-3.03-3c0-1.654 1.397-3 3.124-3h7.59l-1.715 1.286v-.429h-5.875c-1.114 0-2.267 1.072-2.267 2.143"
          />
        </>
      ) : (
        <>
          <path
            fill="#00847B"
            d="M14.571 8.572c0-1.072-1.059-2.143-2.173-2.143S10.302 7.5 10.302 8.572c0 .308.078.6.206.857l-.677.664-.021.013a2.86 2.86 0 0 1-.382-1.534c0-1.655 1.243-3 2.97-3a2.983 2.983 0 0 1 3.03 3c0 1.654-1.534 3-3.257 3H4.714l1.714-1.286v.428h5.786c1.114 0 2.357-1.07 2.357-2.142M9.428 15c0 1.072 1.059 2.143 2.173 2.143s2.113-1.071 2.113-2.143c0-.308-.073-.6-.206-.857l.66-.664.022-.013c.278.45.381.977.381 1.534 0 1.654-1.243 3-2.97 3a2.984 2.984 0 0 1-3.03-3c0-1.654 1.397-3 3.124-3h7.59l-1.714 1.286v-.429h-5.876c-1.114 0-2.267 1.072-2.267 2.143"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconSTOS.displayName = 'STOS'
