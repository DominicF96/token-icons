import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconPRE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M10.286 13.715h1.286c1.56.004 2.575-1.57 2.571-3 .009-1.423-1.059-3.01-2.571-3H8.143v8.57h2.143zm1.084-3.858c.472.035.63.463.63.857 0 .33-.146.858-.583.858h-1.135V9.857z"
          />
          <path
            fill="currentColor"
            d="M5.143 5.932v12.137c0 .428.36.788.789.788h12.137c.428 0 .788-.36.788-.788V5.932a.8.8 0 0 0-.788-.789H5.932a.8.8 0 0 0-.789.789m11.314 11.211H7.526c-.429 0-.673-.257-.673-.686V7.526c0-.429.249-.673.673-.673h8.923c.428 0 .69.244.69.673v8.923c0 .428-.257.69-.686.69z"
          />
          <path fill="currentColor" d="M15.857 14.572h-4.714v1.714h4.714z" />
        </>
      ) : (
        <>
          <path
            fill="#2D8EFF"
            d="M10.285 13.715h1.286c1.56.004 2.576-1.57 2.572-3 .008-1.423-1.059-3.01-2.572-3H8.143v8.57h2.142zm1.085-3.858c.471.035.63.463.63.857 0 .33-.146.858-.583.858H10.28V9.857z"
          />
          <path
            fill="#2D8EFF"
            d="M5.143 5.932v12.137c0 .428.36.788.788.788h12.137c.429 0 .789-.36.789-.788V5.932a.8.8 0 0 0-.789-.789H5.931a.8.8 0 0 0-.788.789m11.314 11.211H7.525c-.428 0-.672-.257-.672-.686V7.526c0-.429.248-.673.672-.673h8.923c.429 0 .69.244.69.673v8.923c0 .428-.257.69-.685.69z"
          />
          <path fill="#2D8EFF" d="M15.857 14.572h-4.714v1.714h4.714z" />
        </>
      )}
    </BaseIcon>
  ),
)

IconPRE.displayName = 'PRE'
