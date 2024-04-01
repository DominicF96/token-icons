import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconKUNCI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.213 8.571a3.956 3.956 0 0 0-3.815 3H3.857v1.715h8.537c.416 1.688 1.972 3 3.814 3a3.9 3.9 0 0 0 3.935-3.858c0-2.125-1.766-3.857-3.93-3.857m.072 6a2.143 2.143 0 1 1 0-4.286 2.143 2.143 0 0 1 0 4.286m-6.11-5.94c0 .635-.477 1.149-1.077 1.136-.587 0-1.067-.514-1.054-1.157v-.04H7.02v.022c0 .634-.476 1.153-1.072 1.14-.591 0-1.071-.515-1.058-1.162H3.857v2.572h7.273l.013-2.572h-.969zm6.968 3.797c0 .476-.57.858-1.286.858V11.57c.703 0 1.286.382 1.286.857"
          />
        </>
      ) : (
        <>
          <path
            fill="#703893"
            d="M16.213 8.571a3.956 3.956 0 0 0-3.814 3H3.857v1.715h8.538c.415 1.688 1.971 3 3.814 3a3.9 3.9 0 0 0 3.934-3.858c0-2.125-1.766-3.857-3.93-3.857m.073 6a2.143 2.143 0 1 1 0-4.286 2.143 2.143 0 0 1 0 4.286m-6.111-5.94c0 .635-.476 1.149-1.076 1.136-.587 0-1.067-.514-1.054-1.157v-.04H7.02v.022c0 .634-.475 1.153-1.071 1.14-.592 0-1.072-.515-1.059-1.162H3.857v2.572h7.273l.013-2.572h-.968zm6.968 3.797c0 .476-.57.858-1.286.858V11.57c.703 0 1.286.382 1.286.857"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconKUNCI.displayName = 'KUNCI'
