import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconXETA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.643 7.714a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m10.714 0a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m0 10.286a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m-10.714.428a1.071 1.071 0 1 0 0-2.142 1.071 1.071 0 0 0 0 2.142m8.725-2.142a.91.91 0 0 1-.762-.408 1 1 0 0 1-.129-.278 2.571 2.571 0 0 0-4.959 0 .94.94 0 0 1-.325.493.88.88 0 0 1-.557.193H8.63a.917.917 0 0 1-.51-1.68q.13-.084.279-.129a2.576 2.576 0 0 0 0-4.959.94.94 0 0 1-.493-.325.9.9 0 0 1-.193-.557V8.63a.917.917 0 0 1 1.68-.51q.084.13.129.279a2.576 2.576 0 0 0 4.958 0 .94.94 0 0 1 .326-.493.88.88 0 0 1 .557-.193h.004a.917.917 0 0 1 .51 1.68q-.13.084-.278.129a2.571 2.571 0 0 0 0 4.958.94.94 0 0 1 .493.326.88.88 0 0 1 .193.557v.004a.917.917 0 0 1-.918.918M12 13.07a1.072 1.072 0 1 0 0-2.143 1.072 1.072 0 0 0 0 2.143"
          />
        </>
      ) : (
        <>
          <path
            fill="#FF31FF"
            d="M6.643 7.714a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m10.714 0a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m0 10.286a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m-10.714.428a1.071 1.071 0 1 0 0-2.142 1.071 1.071 0 0 0 0 2.142m8.725-2.142a.91.91 0 0 1-.762-.408 1 1 0 0 1-.129-.278 2.571 2.571 0 0 0-4.959 0 .94.94 0 0 1-.325.493.88.88 0 0 1-.557.193H8.63a.917.917 0 0 1-.51-1.68q.13-.084.279-.129a2.576 2.576 0 0 0 0-4.959.94.94 0 0 1-.493-.325.9.9 0 0 1-.193-.557V8.63a.917.917 0 0 1 1.68-.51q.084.13.129.279a2.576 2.576 0 0 0 4.958 0 .94.94 0 0 1 .326-.493.88.88 0 0 1 .557-.193h.004a.917.917 0 0 1 .51 1.68q-.13.084-.278.129a2.571 2.571 0 0 0 0 4.958.94.94 0 0 1 .493.326.88.88 0 0 1 .193.557v.004a.917.917 0 0 1-.918.918M12 13.07a1.072 1.072 0 1 0 0-2.143 1.072 1.072 0 0 0 0 2.143"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconXETA.displayName = 'XETA'
