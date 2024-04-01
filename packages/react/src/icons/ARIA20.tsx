import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconARIA20 = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.211 8.786c.459-.532 1.17-1.342 3.022-1.342 1.77 0 2.053 1.162 2.053 1.556v.133c.008.454.017 1.183-.485 1.423-.54.257-1.2.428-1.877.6-1.941.492-4.045 1.028-4.067 3.857a1.929 1.929 0 0 1 1.967 2.721c.459.167 1.029.266 1.723.266.664 0 2.023-.364 2.739-1.714.128.561.72 1.714 2.143 1.714s2.365-.386 2.571-.579v-.57h-.42c-.321-.004-1.294-.227-1.294-1.071V9.043c0-1.144-.352-3.343-3.857-3.467-.986 0-3.005.321-4.715 1.714l.322 1.5h.175zm5.075 2.785v2.82c-.043.635-.429 1.895-1.642 1.895s-1.405-1.166-1.35-1.749c-.043-.57.172-1.821 1.35-2.28a16 16 0 0 0 1.642-.686M7.07 18a1.072 1.072 0 1 0 0-2.143 1.072 1.072 0 0 0 0 2.143"
          />
        </>
      ) : (
        <>
          <path
            fill="#B99247"
            d="M8.211 8.786c.459-.532 1.17-1.342 3.022-1.342 1.77 0 2.053 1.162 2.053 1.556v.133c.008.454.017 1.183-.485 1.423-.54.257-1.2.428-1.877.6-1.941.492-4.045 1.028-4.067 3.857a1.929 1.929 0 0 1 1.967 2.721c.459.167 1.029.266 1.723.266.664 0 2.023-.364 2.739-1.714.128.561.72 1.714 2.143 1.714s2.365-.386 2.571-.579v-.57h-.42c-.321-.004-1.294-.227-1.294-1.071V9.043c0-1.144-.352-3.343-3.857-3.467-.986 0-3.005.321-4.715 1.714l.322 1.5h.175zm5.075 2.785v2.82c-.043.635-.429 1.895-1.642 1.895s-1.405-1.166-1.35-1.749c-.043-.57.172-1.821 1.35-2.28a16 16 0 0 0 1.642-.686M7.07 18a1.072 1.072 0 1 0 0-2.143 1.072 1.072 0 0 0 0 2.143"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconARIA20.displayName = 'ARIA20'
