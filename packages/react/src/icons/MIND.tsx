import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconMIND = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.34 4.761a.45.45 0 0 1 .232.395V8.91c0 .137-.065.27-.172.351l-1.23.952c.579.403 1.402.973 1.402 1.787 0 .861-.75 1.47-1.423 1.847l1.238.879a.45.45 0 0 1 .185.364v3.754a.44.44 0 0 1-.227.39.42.42 0 0 1-.442-.026L6.19 15.9a2.38 2.38 0 0 1-1.046-1.912c0-.544.24-1.2 1.042-1.971-.613-.523-1.042-1.157-1.042-2.006 0-1.015 1.179-1.885 1.903-2.353L10.89 4.8a.43.43 0 0 1 .45-.039M6.96 8.803C6.647 9.06 6 9.544 6 10.01c0 .652.394 1.055.857 1.436l1.286-.844.857.514-1.423.879 1.766 1.272c.471-.201 1.371-.642 1.371-1.268 0-.664-1.054-1.076-1.52-1.397-.742-.515-1.754-.995-2.23-1.8zm-.085 3.758c-.78.712-.875 1.187-.875 1.427 0 .313.159.828.665 1.179h.004l.364.257a2.4 2.4 0 0 1 1.372-1.401l.634.625c-.514.232-1.046.699-1.144.922a.86.86 0 0 0-.078.403l2.897 2.035v-2.687a489 489 0 0 1-3.84-2.76m.788-4.273c.291.626 1.213 1.038 1.753 1.406l1.298-1.007V6.021l-3.05 2.272zm4.993-3.522a.42.42 0 0 1 .437.021l4.5 3.094c.75.51 1.264 1.175 1.264 2.13 0 .785-.492 1.445-1.028 1.955.471.385 1.028 1.028 1.028 2.022 0 1.243-.904 1.839-1.5 2.229l-.192.124a574 574 0 0 0-4.063 2.867.42.42 0 0 1-.442.026.44.44 0 0 1-.231-.39V15.09c0-.137.064-.27.171-.352l1.205-.93c-.67-.415-1.376-.891-1.376-1.808 0-.806.827-1.432 1.393-1.856l-1.209-.874a.44.44 0 0 1-.184-.36V5.156a.43.43 0 0 1 .227-.386zm1.911 5.914c-.33.24-1.281.806-1.281 1.32 0 .711 1.046 1.106 1.504 1.388l.017.009c.806.553 1.813 1.024 2.34 1.899.498-.348.853-.673.853-1.308 0-.698-.441-1.14-.848-1.444l-1.295 1.003-.857-.441 1.415-1.093-1.843-1.329zm2.55.763-3.831-2.765v-2.7l2.764 1.899c.45.309-.874 1.329-1.05 1.474l.857.442c.48-.399.84-.669 1.059-1.32l.206.141c.501.343.878.742.878 1.397 0 .583-.488 1.072-.883 1.432m-.685 4.341c-.386-.686-1.23-1.054-1.843-1.478l-1.303 1.007V18l3.15-2.216z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#MIND__a)"
            d="M11.34 4.761a.45.45 0 0 1 .231.395V8.91c0 .137-.064.27-.171.351l-1.23.952c.578.403 1.401.973 1.401 1.787 0 .861-.75 1.47-1.423 1.847l1.239.879a.45.45 0 0 1 .184.364v3.754a.44.44 0 0 1-.227.39.42.42 0 0 1-.441-.026L6.188 15.9a2.38 2.38 0 0 1-1.045-1.912c0-.544.24-1.2 1.041-1.971-.613-.523-1.041-1.157-1.041-2.006 0-1.015 1.178-1.885 1.902-2.353L10.89 4.8a.43.43 0 0 1 .45-.039M6.96 8.803C6.647 9.06 6 9.544 6 10.01c0 .652.394 1.055.857 1.436l1.286-.844.857.514-1.423.879 1.766 1.272c.471-.201 1.371-.642 1.371-1.268 0-.664-1.054-1.076-1.521-1.397-.742-.515-1.753-.995-2.229-1.8zm-.086 3.758c-.78.712-.874 1.187-.874 1.427 0 .313.158.828.664 1.179h.004l.365.257a2.4 2.4 0 0 1 1.371-1.401l.634.625c-.514.232-1.045.699-1.144.922a.86.86 0 0 0-.077.403l2.897 2.035v-2.687a489 489 0 0 1-3.84-2.76m.789-4.273c.291.626 1.212 1.038 1.752 1.406l1.299-1.007V6.021L7.663 8.293zm4.992-3.522a.42.42 0 0 1 .438.021l4.5 3.094c.75.51 1.264 1.175 1.264 2.13 0 .785-.493 1.445-1.029 1.955.472.385 1.029 1.028 1.029 2.022 0 1.243-.904 1.839-1.5 2.229l-.193.124a574 574 0 0 0-4.063 2.867.42.42 0 0 1-.441.026.44.44 0 0 1-.232-.39V15.09c0-.137.065-.27.172-.352l1.204-.93c-.669-.415-1.376-.891-1.376-1.808 0-.806.827-1.432 1.393-1.856l-1.208-.874a.44.44 0 0 1-.185-.36V5.156a.43.43 0 0 1 .227-.386zm1.912 5.914c-.33.24-1.282.806-1.282 1.32 0 .711 1.046 1.106 1.505 1.388l.017.009c.806.553 1.813 1.024 2.34 1.899.497-.348.853-.673.853-1.308 0-.698-.442-1.14-.849-1.444l-1.294 1.003-.857-.441 1.414-1.093-1.843-1.329zm2.55.763-3.832-2.765v-2.7l2.765 1.899c.45.309-.875 1.329-1.05 1.474l.857.442c.48-.399.84-.669 1.058-1.32l.206.141c.502.343.879.742.879 1.397 0 .583-.489 1.072-.883 1.432m-.686 4.341c-.386-.686-1.23-1.054-1.843-1.478l-1.303 1.007V18l3.15-2.216z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="MIND__a"
              x1="12"
              x2="12"
              y1="4.714"
              y2="19.286"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF7EEE" />
              <stop offset="1" stopColor="#9A0086" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconMIND.displayName = 'MIND'
