import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconAPEX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m12.857 14.276-.025.004a2.33 2.33 0 0 1-1.663 0c-.073-.026-.129.056-.078.103.232.214.55.347.91.347.334.005.659-.118.908-.343.042-.043.008-.111-.048-.111z"
          />
          <path
            fill="currentColor"
            d="M17.516 13.642a1 1 0 0 0-.03-.1l-2.597-6.925a3 3 0 0 0-1.689-1.68 3.18 3.18 0 0 0-2.331 0h-.005a2.98 2.98 0 0 0-1.693 1.684l-2.54 6.6a2.29 2.29 0 0 0 .75 2.773c.042.03.076.06.11.099l.056.051 2.846 2.512a2.477 2.477 0 0 0 3.283 0l2.845-2.512q.145-.13.275-.278a2.4 2.4 0 0 0 .776-1.714 2.5 2.5 0 0 0-.056-.51m-4.114 3.677c-.382.3-.87.681-1.402.681s-1.02-.381-1.401-.681a.21.21 0 0 1-.086-.172.21.21 0 0 1 .086-.171 2.28 2.28 0 0 1 2.807 0 .214.214 0 0 1 0 .343zm2.142-1.98-1.397 1.341a.34.34 0 0 1-.437.026 2.83 2.83 0 0 0-1.71-.634 2.83 2.83 0 0 0-1.714.634.33.33 0 0 1-.197.068.33.33 0 0 1-.232-.094l-1.401-1.341a.304.304 0 0 1 .013-.459c.977-.823 2.22-1.166 3.531-1.166 1.316 0 2.559.343 3.536 1.166.141.12.141.33.008.459m-.008-3.54c-.977.827-2.22 1.487-3.536 1.487s-2.554-.66-3.531-1.487a.304.304 0 0 1-.013-.459l1.397-1.341a.34.34 0 0 1 .437-.026c.484.377 1.08.741 1.71.741s1.226-.364 1.714-.741a.33.33 0 0 1 .429.026l1.401 1.341a.31.31 0 0 1-.008.459"
          />
        </>
      ) : (
        <>
          <path
            fill="#FED702"
            d="m12.857 14.276-.025.004a2.33 2.33 0 0 1-1.663 0c-.073-.026-.129.056-.078.103.232.214.55.347.91.347.334.005.659-.118.908-.343.042-.043.008-.111-.048-.111z"
          />
          <path
            fill="#FED702"
            d="M17.516 13.642a1 1 0 0 0-.03-.1l-2.597-6.925a3 3 0 0 0-1.689-1.68 3.18 3.18 0 0 0-2.331 0h-.005a2.98 2.98 0 0 0-1.693 1.684l-2.54 6.6a2.29 2.29 0 0 0 .75 2.773c.042.03.076.06.11.099l.056.051 2.846 2.512a2.477 2.477 0 0 0 3.283 0l2.845-2.512q.145-.13.275-.278a2.4 2.4 0 0 0 .776-1.714 2.5 2.5 0 0 0-.056-.51m-4.114 3.677c-.382.3-.87.681-1.402.681s-1.02-.381-1.401-.681a.21.21 0 0 1-.086-.172.21.21 0 0 1 .086-.171 2.28 2.28 0 0 1 2.807 0 .214.214 0 0 1 0 .343zm2.142-1.98-1.397 1.341a.34.34 0 0 1-.437.026 2.83 2.83 0 0 0-1.71-.634 2.83 2.83 0 0 0-1.714.634.33.33 0 0 1-.197.068.33.33 0 0 1-.232-.094l-1.401-1.341a.304.304 0 0 1 .013-.459c.977-.823 2.22-1.166 3.531-1.166 1.316 0 2.559.343 3.536 1.166.141.12.141.33.008.459m-.008-3.54c-.977.827-2.22 1.487-3.536 1.487s-2.554-.66-3.531-1.487a.304.304 0 0 1-.013-.459l1.397-1.341a.34.34 0 0 1 .437-.026c.484.377 1.08.741 1.71.741s1.226-.364 1.714-.741a.33.33 0 0 1 .429.026l1.401 1.341a.31.31 0 0 1-.008.459"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconAPEX.displayName = 'APEX'
