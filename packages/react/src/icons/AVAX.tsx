import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconAVAX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.584 16.714H6.28c-.485 0-.725 0-.87-.09a.57.57 0 0 1-.266-.454c-.009-.171.111-.377.351-.793l5.692-9.891c.244-.42.368-.63.523-.707a.58.58 0 0 1 .531 0c.154.077.274.287.514.707L13.93 7.5l.004.009c.193.285.346.595.454.921.065.257.065.536 0 .797a3.8 3.8 0 0 1-.454.93l-2.991 5.212-.009.017c-.153.311-.35.6-.583.857a1.8 1.8 0 0 1-.707.407c-.244.064-.514.064-1.059.064m5.825 0h3.3c.493 0 .737 0 .883-.094a.57.57 0 0 0 .265-.454c.009-.167-.107-.364-.338-.755l-.026-.042-1.654-2.786-.017-.034c-.232-.386-.352-.583-.502-.66a.57.57 0 0 0-.527 0c-.154.077-.274.283-.514.694l-1.655 2.79v.009c-.244.41-.364.617-.355.784a.58.58 0 0 0 .265.458c.142.09.386.09.875.09"
          />
        </>
      ) : (
        <>
          <path
            fill="#E84142"
            d="M8.584 16.714H6.28c-.485 0-.725 0-.87-.09a.57.57 0 0 1-.266-.454c-.009-.171.111-.377.351-.793l5.692-9.891c.244-.42.368-.63.523-.707a.58.58 0 0 1 .531 0c.154.077.274.287.514.707L13.93 7.5l.004.009c.193.285.346.595.454.921.065.257.065.536 0 .797a3.8 3.8 0 0 1-.454.93l-2.991 5.212-.009.017c-.153.311-.35.6-.583.857a1.8 1.8 0 0 1-.707.407c-.244.064-.514.064-1.059.064m5.825 0h3.3c.493 0 .737 0 .883-.094a.57.57 0 0 0 .265-.454c.009-.167-.107-.364-.338-.755l-.026-.042-1.654-2.786-.017-.034c-.232-.386-.352-.583-.502-.66a.57.57 0 0 0-.527 0c-.154.077-.274.283-.514.694l-1.655 2.79v.009c-.244.41-.364.617-.355.784a.58.58 0 0 0 .265.458c.142.09.386.09.875.09"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconAVAX.displayName = 'AVAX'
