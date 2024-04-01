import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconWNDR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m7.217 6.429 3.043 1.684c-.291.279-.87 1.05-.87 1.894 0 .84.579 1.612.87 1.89h1.089L12 13.162l.652-1.265h1.088c.214-.278.694-1.05.87-1.89.172-.844-.506-1.615-.87-1.894l3.043-1.684 1.526 1.684-2.396 1.894 2.828-1.264a3.04 3.04 0 0 1 1.09 1.684l-3.262 1.47 3.48-.84c.171.506.068 1.475 0 1.895l-3.266.63h3.043A5.9 5.9 0 0 1 17 16.526c-.65-.699-2.087-2.057-2.61-1.89s.8 2.314 1.524 3.364c-.519-.506-1.521-.913-1.954-1.05l-.656-2.104v2.1H12.22l-.219-2.1-.214 2.1h-.874v-2.1l-.652 2.1c-.523 0-1.611.771-2.117 1.054.651-.913 1.813-3.03 1.466-3.364-.347-.339-2.032 1.118-2.829 1.89l-2.61-2.94h3.262l-3.48-.63c-.172-.844-.073-1.616 0-1.894l3.698.84-3.48-1.47A4.17 4.17 0 0 1 5.26 8.537l2.828 1.475-2.395-1.895A6.6 6.6 0 0 1 7.217 6.43"
          />
          <path
            fill="currentColor"
            d="m12 12.742-.437-1.055H10.26c.523-.84.652-2.451.652-3.154l2.177.84H12c.214.214 1.089.214 1.303.214.218 0 .87 0 .87.42 0 .335-.287.699-.433.84-.291-.351-.956-1.011-1.307-.84-.343.167.583 1.192 1.088 1.68h-1.088z"
          />
        </>
      ) : (
        <>
          <path
            fill="#EF4035"
            d="m7.217 6.429 3.043 1.684c-.291.279-.87 1.05-.87 1.894 0 .84.579 1.612.87 1.89h1.089L12 13.162l.652-1.265h1.088c.214-.278.694-1.05.87-1.89.172-.844-.506-1.615-.87-1.894l3.043-1.684 1.526 1.684-2.396 1.894 2.828-1.264a3.04 3.04 0 0 1 1.09 1.684l-3.262 1.47 3.48-.84c.171.506.068 1.475 0 1.895l-3.266.63h3.043A5.9 5.9 0 0 1 17 16.526c-.65-.699-2.087-2.057-2.61-1.89s.8 2.314 1.524 3.364c-.519-.506-1.521-.913-1.954-1.05l-.656-2.104v2.1H12.22l-.219-2.1-.214 2.1h-.874v-2.1l-.652 2.1c-.523 0-1.611.771-2.117 1.054.651-.913 1.813-3.03 1.466-3.364-.347-.339-2.032 1.118-2.829 1.89l-2.61-2.94h3.262l-3.48-.63c-.172-.844-.073-1.616 0-1.894l3.698.84-3.48-1.47A4.17 4.17 0 0 1 5.26 8.537l2.828 1.475-2.395-1.895A6.6 6.6 0 0 1 7.217 6.43"
          />
          <path
            fill="#EF4035"
            d="m12 12.742-.437-1.055H10.26c.523-.84.652-2.451.652-3.154l2.177.84H12c.214.214 1.089.214 1.303.214.218 0 .87 0 .87.42 0 .335-.287.699-.433.84-.291-.351-.956-1.011-1.307-.84-.343.167.583 1.192 1.088 1.68h-1.088z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconWNDR.displayName = 'WNDR'
