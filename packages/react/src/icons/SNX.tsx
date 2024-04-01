import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconSNX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.943 17.443 14.75 6.579c.369-.652 1.783-.493 2.375-.262l-7.659 10.65c-.313.493-1.86.527-2.529.472z"
            fillOpacity=".45"
          />
          <path
            fill="currentColor"
            d="M12.827 10.929c.425.013.789.63.789 1.071 0 .442-.364 1.059-.789 1.072h-2.095c-2.015-.026-3.87-2.023-3.87-4.076 0-2.057 1.855-3.827 3.87-3.853h5.404c.424.013 1.007.369 1.007 1.05 0 .677-.356 1.071-1.007 1.093h-5.404A1.753 1.753 0 0 0 9 8.996c0 1.157.592 1.933 1.732 1.933h2.1z"
          />
          <path
            fill="currentColor"
            d="M11.173 13.072c-.424-.013-.789-.63-.789-1.072 0-.441.365-1.058.789-1.071h2.096c2.014.025 3.874 2.023 3.874 4.076 0 2.057-1.86 3.827-3.874 3.852H7.864c-.63-.017-.99-.342-1.007-1.032a1.084 1.084 0 0 1 1.007-1.11h5.405c.9 0 1.731-.686 1.731-1.71 0-1.158-.591-1.933-1.731-1.933z"
          />
        </>
      ) : (
        <>
          <path
            fill="#1B1230"
            d="M6.943 17.443 14.75 6.579c.369-.652 1.783-.493 2.375-.262l-7.659 10.65c-.313.493-1.86.527-2.529.472z"
            fillOpacity=".45"
          />
          <path
            fill="#1B1230"
            d="M12.827 10.929c.424.013.788.63.788 1.071 0 .442-.364 1.059-.788 1.072H10.73c-2.014-.026-3.87-2.023-3.87-4.076 0-2.057 1.856-3.827 3.87-3.853h5.404c.425.013 1.007.369 1.007 1.05 0 .677-.355 1.071-1.007 1.093H10.73A1.753 1.753 0 0 0 9 8.996c0 1.157.591 1.933 1.731 1.933h2.1z"
          />
          <path
            fill="#1B1230"
            d="M11.173 13.072c-.425-.013-.789-.63-.789-1.072 0-.441.364-1.058.788-1.071h2.096c2.015.025 3.874 2.023 3.874 4.076 0 2.057-1.86 3.827-3.874 3.852H7.864c-.63-.017-.99-.342-1.007-1.032a1.084 1.084 0 0 1 1.007-1.11h5.404c.9 0 1.732-.686 1.732-1.71 0-1.158-.592-1.933-1.732-1.933z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconSNX.displayName = 'SNX'
