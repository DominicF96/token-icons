import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconDASH = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15.682 11.276a11 11 0 0 1-.322 1.568c-.428 1.577-1.988 2.152-3.493 2.156h-4.41c-.008 0-.013.013-.013.021l-.47 2.529q.002.02.016.021h4.993q.769.004 1.53-.094a5.2 5.2 0 0 0 1.941-.669c1.45-.835 2.272-2.378 2.658-3.99.188-.801.3-1.585.313-2.344.03-1.106-.223-2.254-1.063-3.013a4.16 4.16 0 0 0-2.216-.938 9 9 0 0 0-1.256-.095H8.906c-.009 0-.013 0-.013.013L8.486 9h4.564c.69 0 1.946.017 2.353.634.309.472.339 1.106.274 1.642zm-9.185-.515c-.6.129-.942.57-1.08 1.188q-.15.666-.274 1.337h4.929q.288 0 .48-.03a1.33 1.33 0 0 0 1.097-.943 3 3 0 0 0 .103-.356q.131-.62.244-1.243H6.875q-.18.002-.378.043z"
          />
        </>
      ) : (
        <>
          <path
            fill="#008DE4"
            d="M15.681 11.276a11 11 0 0 1-.321 1.568c-.429 1.577-1.989 2.152-3.493 2.156h-4.41c-.009 0-.013.013-.013.021l-.471 2.529q.002.02.017.021h4.993q.767.004 1.53-.094a5.2 5.2 0 0 0 1.941-.669c1.449-.835 2.271-2.378 2.657-3.99.189-.801.3-1.585.313-2.344.03-1.106-.223-2.254-1.063-3.013a4.16 4.16 0 0 0-2.216-.938 9 9 0 0 0-1.255-.095H8.905c-.008 0-.012 0-.012.013L8.485 9h4.565c.69 0 1.945.017 2.353.634.308.472.338 1.106.274 1.642zm-9.184-.515c-.6.129-.943.57-1.08 1.188q-.15.666-.274 1.337h4.928q.289 0 .48-.03a1.33 1.33 0 0 0 1.097-.943 3 3 0 0 0 .103-.356q.132-.62.244-1.243H6.874q-.179.002-.377.043z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconDASH.displayName = 'DASH'
