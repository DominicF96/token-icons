import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconWEMIX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.857 12A6.857 6.857 0 0 1 5.36 13.714h.89A6.002 6.002 0 0 0 18 12h-.683l-.923 1.177a.359.359 0 0 1-.655-.092l-.57-2.156-.605 2.993c-.08.392-.643.38-.706-.015l-.562-3.527-.77 5.706a.35.35 0 0 1-.526.257.35.35 0 0 1-.172-.351l1.084-8.027c.056-.41.645-.416.71-.009l.63 3.956.52-2.572c.076-.371.602-.387.699-.02l.738 2.791.603-.811c.064-.109.182-.157.308-.157h1.684q.053.421.053.857m-.216-1.714a6.857 6.857 0 0 0-13.445 2.572h1.792c.13 0 .251-.085.314-.2l.433-.631.782 2.523c.11.351.614.33.694-.03l.541-2.467.627 3.932c.066.41.658.4.71-.01l1.038-8.087a.352.352 0 0 0-.698-.09l-.732 5.71-.537-3.365c-.062-.391-.62-.407-.705-.02l-.652 2.972-.636-2.05a.359.359 0 0 0-.656-.066L6.785 12H6a6 6 0 0 1 11.752-1.714z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#27EA84"
            d="M18.857 12a6.857 6.857 0 0 1-13.498 1.714h.89A6.002 6.002 0 0 0 17.998 12h-.683l-.922 1.177a.359.359 0 0 1-.655-.092l-.57-2.156-.606 2.993c-.079.392-.642.38-.705-.015l-.563-3.527-.77 5.706a.35.35 0 0 1-.526.257.35.35 0 0 1-.172-.351l1.085-8.027c.055-.41.645-.416.71-.009l.63 3.956.52-2.572c.075-.371.601-.387.698-.02l.739 2.791.602-.811c.065-.109.182-.157.309-.157h1.684q.053.421.053.857m-.216-1.714a6.857 6.857 0 0 0-13.445 2.572h1.792c.13 0 .25-.085.314-.2l.433-.631.782 2.523c.109.351.614.33.693-.03l.542-2.467.627 3.932c.065.41.658.4.71-.01l1.038-8.087a.352.352 0 0 0-.698-.09l-.733 5.71-.537-3.365c-.062-.391-.62-.407-.704-.02l-.652 2.972-.636-2.05a.36.36 0 0 0-.657-.066L6.784 12H6a6 6 0 0 1 11.751-1.714z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconWEMIX.displayName = 'WEMIX'
