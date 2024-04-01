import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconVV = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m13.522 15.57-.172.283a.6.6 0 0 1-.085.094.03.03 0 0 1-.04 0 .3.3 0 0 1-.076-.077l-.926-1.543 3.386-5.597a.6.6 0 0 0 .068-.206.3.3 0 0 0-.043-.201c-.064-.103-.201-.167-.321-.18H5.957a1.5 1.5 0 0 0-.544.077c-.021.009-.026 0-.013-.013q.32-.513.647-1.007c.073-.103.155-.231.245-.326.224-.239.53-.385.857-.411a1 1 0 0 1 .257-.034h9.48a1.33 1.33 0 0 1 1.029.484q.038.044.05.081.017.046.044.086a1 1 0 0 1 .094.193 1.08 1.08 0 0 1-.043.771l-.145.253zm-1.419-.827.754 1.26c.065.111.159.21.283.244.249.065.416-.128.523-.308l4.629-7.667a1.2 1.2 0 0 0 .15-.42q.005-.02.017 0l.068.12c.223.385.455.788.643 1.157a1.22 1.22 0 0 1-.06 1.153l-4.74 7.894a1.34 1.34 0 0 1-1.084.681 1.23 1.23 0 0 1-.969-.407 1 1 0 0 1-.12-.171l-.008-.009-4.552-7.504-.021-.043c-.043-.069-.09-.141-.112-.223-.004-.03.009-.043.035-.051h.017l.064-.013h1.87l.004-.001h.004c.866 1.44 1.736 2.872 2.606 4.308m3.249-6.313a.35.35 0 0 0-.155-.034h-2.7q-3.272.01-6.544.008a1.26 1.26 0 0 0-.9.343 1 1 0 0 0-.129.176l-.012.026-.039.043a.4.4 0 0 0-.047.072 1.22 1.22 0 0 0 .068 1.145l.206.343 4.642 7.628a1.41 1.41 0 0 0 .977.664l.094.005.09.008h1.329l-4.136-6.754-.802-1.329a.8.8 0 0 1-.085-.205c-.06-.189.021-.369.214-.437l.043-.013h.013c.013 0 .021 0 .03-.009a.3.3 0 0 1 .085-.013l6.802-.004.93-1.543q.03-.05.03-.107z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#VV__a)"
            d="m13.522 15.57-.172.283a.6.6 0 0 1-.085.094.03.03 0 0 1-.04 0 .3.3 0 0 1-.076-.077l-.926-1.543 3.386-5.597a.6.6 0 0 0 .068-.206.3.3 0 0 0-.043-.201c-.064-.103-.201-.167-.321-.18H5.957a1.5 1.5 0 0 0-.544.077c-.021.009-.026 0-.013-.013q.32-.513.647-1.007c.073-.103.155-.231.245-.326.224-.239.53-.385.857-.411a1 1 0 0 1 .257-.034h9.48a1.33 1.33 0 0 1 1.029.484q.038.044.05.081.017.046.044.086a1 1 0 0 1 .094.193 1.08 1.08 0 0 1-.043.771l-.145.253zm-1.419-.827.754 1.26c.065.111.159.21.283.244.249.065.416-.128.523-.308l4.629-7.667a1.2 1.2 0 0 0 .15-.42q.005-.02.017 0l.068.12c.223.385.455.788.643 1.157a1.22 1.22 0 0 1-.06 1.153l-4.74 7.894a1.34 1.34 0 0 1-1.084.681 1.23 1.23 0 0 1-.969-.407 1 1 0 0 1-.12-.171l-.008-.009-4.552-7.504-.021-.043c-.043-.069-.09-.141-.112-.223-.004-.03.009-.043.035-.051h.017l.064-.013h1.87l.004-.001h.004c.866 1.44 1.736 2.872 2.606 4.308m3.249-6.313a.35.35 0 0 0-.155-.034h-2.7q-3.272.01-6.544.008a1.26 1.26 0 0 0-.9.343 1 1 0 0 0-.129.176l-.012.026-.039.043a.4.4 0 0 0-.047.072 1.22 1.22 0 0 0 .068 1.145l.206.343 4.642 7.628a1.41 1.41 0 0 0 .977.664l.094.005.09.008h1.329l-4.136-6.754-.802-1.329a.8.8 0 0 1-.085-.205c-.06-.189.021-.369.214-.437l.043-.013h.013c.013 0 .021 0 .03-.009a.3.3 0 0 1 .085-.013l6.802-.004.93-1.543q.03-.05.03-.107z"
          />
          <defs>
            <linearGradient
              id="VV__a"
              x1="17.224"
              x2="7.479"
              y1="8.524"
              y2="15.043"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#49A1FF" />
              <stop offset="1" stopColor="#76D7FF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconVV.displayName = 'VV'
