import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const NetworkCosmos = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.95 8.719 8.782 13.88a4.1 4.1 0 0 1-.451-1.895q0-.79.27-1.492.27-.705.751-1.222.48-.517 1.154-.82.674-.3 1.478-.301a3.55 3.55 0 0 1 1.966.569m-.456 6.83q-.673.3-1.479.301a3.55 3.55 0 0 1-1.965-.569l5.168-5.16q.1.193.18.402.271.705.271 1.493a4.1 4.1 0 0 1-.27 1.492q-.271.703-.751 1.221t-1.154.82m.782 1.6a5.7 5.7 0 0 0 1.796-1.214 5.4 5.4 0 0 0 1.177-1.786 5.7 5.7 0 0 0 .418-2.164 5.65 5.65 0 0 0-1.029-3.283L20 5.345 18.664 4.01l-3.372 3.367a5.7 5.7 0 0 0-.985-.535q-1.038-.44-2.292-.44t-2.291.448a5.7 5.7 0 0 0-1.796 1.214A5.4 5.4 0 0 0 6.75 9.85a5.7 5.7 0 0 0-.418 2.165 5.66 5.66 0 0 0 1.028 3.283L4 18.655l1.336 1.334 3.371-3.367q.455.309.986.535 1.037.44 2.291.44t2.292-.448"
            opacity=".9"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="M13.95 8.719 8.782 13.88a4.1 4.1 0 0 1-.451-1.895q0-.79.27-1.492.27-.705.751-1.222.48-.517 1.154-.82.674-.3 1.478-.301a3.55 3.55 0 0 1 1.966.569m-.456 6.83q-.673.3-1.479.301a3.55 3.55 0 0 1-1.965-.569l5.168-5.16q.1.193.18.402.271.705.271 1.493a4.1 4.1 0 0 1-.27 1.492q-.271.703-.751 1.221t-1.154.82m.782 1.6a5.7 5.7 0 0 0 1.796-1.214 5.4 5.4 0 0 0 1.177-1.786 5.7 5.7 0 0 0 .418-2.164 5.65 5.65 0 0 0-1.029-3.283L20 5.345 18.664 4.01l-3.372 3.367a5.7 5.7 0 0 0-.985-.535q-1.038-.44-2.292-.44t-2.291.448a5.7 5.7 0 0 0-1.796 1.214A5.4 5.4 0 0 0 6.75 9.85a5.7 5.7 0 0 0-.418 2.165 5.66 5.66 0 0 0 1.028 3.283L4 18.655l1.336 1.334 3.371-3.367q.455.309.986.535 1.037.44 2.291.44t2.292-.448"
            opacity=".9"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

NetworkCosmos.displayName = 'cosmos'
