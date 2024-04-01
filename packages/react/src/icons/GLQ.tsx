import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconGLQ = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15.455 18.857h-6.01c-.6 0-1.16-.334-1.465-.857l-3.043-5.164a1.6 1.6 0 0 1 0-1.633L7.98 5.96a1.62 1.62 0 0 1 1.427-.818h6.047c.6 0 1.2.334 1.5.857l2.186 3.75a.12.12 0 0 1 0 .15c0 .038-.043.073-.077.111l-.754.407a1.663 1.663 0 0 1-2.25-.591l-1.2-2.113h-2.43v8.572h2.425l1.243-2.186-2.07-1.192a1.37 1.37 0 0 1-.741-1.148V9.75c0-.073.039-.112.073-.146.077-.038.116-.038.188 0l5.066 2.824a1.26 1.26 0 0 1 .639.815 1.47 1.47 0 0 1-.155 1.041l-2.177 3.72a1.62 1.62 0 0 1-1.466.853m-6.01-.429h6.01c.488 0 .942-.201 1.2-.612L18.84 14.1a.87.87 0 0 0 .107-.742.93.93 0 0 0-.45-.6l-1.011-.557-3.772-2.117v1.672c0 .338.279.672.579.857l2.216 1.264c.073.039.111.15.073.257l-1.389 2.473c-.038.077-.154.107-.193.107h-2.786c-.111 0-.214-.086-.214-.197V7.521c0-.111.095-.235.206-.235H15c.077 0 .155.068.193.107l1.243 2.211a1.33 1.33 0 0 0 1.761.48l.6-.334-2.1-3.566a1.5 1.5 0 0 0-1.242-.613H9.412c-.455 0-.866.167-1.093.575l-3.043 5.241a1.26 1.26 0 0 0 0 1.264l3.043 5.165c.227.411.643.612 1.127.612m.39-1.808L7.12 12.128a.24.24 0 0 1 0-.222L9.88 7.41c.038-.073.111-.112.223-.073.077.034.184.111.184.184v9.026c0 .219-.394.193-.45.073M7.578 12l2.28 3.698V8.301z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#GLQ__a)"
            d="M15.454 18.857H9.445A1.71 1.71 0 0 1 7.98 18l-3.043-5.164a1.6 1.6 0 0 1 0-1.633L7.98 5.96a1.62 1.62 0 0 1 1.427-.818h6.047c.6 0 1.2.334 1.5.857l2.186 3.75a.12.12 0 0 1 0 .15c0 .038-.043.073-.078.111l-.754.407a1.663 1.663 0 0 1-2.25-.591l-1.2-2.113h-2.43v8.572h2.426l1.243-2.186-2.07-1.192a1.37 1.37 0 0 1-.742-1.148V9.75c0-.073.039-.112.073-.146.077-.038.116-.038.189 0l5.066 2.824a1.26 1.26 0 0 1 .638.815c.073.338.034.707-.154 1.041l-2.177 3.72a1.62 1.62 0 0 1-1.466.853m-6.009-.429h6.009c.489 0 .943-.201 1.2-.612L18.84 14.1a.87.87 0 0 0 .107-.742.93.93 0 0 0-.45-.6l-1.012-.557-3.771-2.117v1.672c0 .338.278.672.579.857l2.215 1.264c.073.039.112.15.073.257l-1.388 2.473c-.039.077-.155.107-.193.107h-2.786c-.112 0-.214-.086-.214-.197V7.521c0-.111.094-.235.205-.235H15c.077 0 .154.068.193.107l1.242 2.211a1.33 1.33 0 0 0 1.762.48l.6-.334-2.1-3.566a1.5 1.5 0 0 0-1.243-.613H9.411c-.454 0-.866.167-1.093.575l-3.043 5.241a1.26 1.26 0 0 0 0 1.264l3.043 5.165c.227.411.643.612 1.127.612m.39-1.808-2.717-4.492a.24.24 0 0 1 0-.222l2.76-4.496c.039-.073.112-.112.223-.073.077.034.184.111.184.184v9.026c0 .219-.394.193-.45.073M7.577 12l2.28 3.698V8.301z"
          />
          <defs>
            <linearGradient
              id="GLQ__a"
              x1="11.999"
              x2="11.999"
              y1="5.143"
              y2="18.858"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".18" stopColor="#9922E6" />
              <stop offset="1" stopColor="#5619ED" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconGLQ.displayName = 'GLQ'
