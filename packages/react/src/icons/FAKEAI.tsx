import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconFAKEAI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.419 6.244a7.9 7.9 0 0 1 2.43 3.288c.895 2.348.368 5.027-1.158 6.985a7.7 7.7 0 0 1-2.395 1.942 7 7 0 0 1-4.74.668 7.43 7.43 0 0 1-5.786-6.325q-.02-.165-.021-.33l-.013-.082a5 5 0 0 1-.009-.673l.009-.085a.4.4 0 0 0 .013-.1l.017-.278a6.7 6.7 0 0 1 .463-1.911 6.6 6.6 0 0 1 1.435-2.241 7.4 7.4 0 0 1 2.653-1.835 6.99 6.99 0 0 1 7.102.977M4.86 11.014c-.163 1.2-.043 2.263.364 3.403a7.31 7.31 0 0 0 4.552 4.414 5.7 5.7 0 0 0 1.881.356 7.2 7.2 0 0 0 3.742-.857 7.4 7.4 0 0 0 2.284-1.911c1.2-1.586 1.761-3.549 1.457-5.542C18.836 8.906 17.619 7.15 15.994 6a6.8 6.8 0 0 0-2.245-1.016A7.17 7.17 0 0 0 6.814 7.03c-.441.467-.857.977-1.157 1.543a7.6 7.6 0 0 0-.57 1.371 6.3 6.3 0 0 0-.227 1.071m4.419 7.475a7.17 7.17 0 0 1-3.198-2.675 7 7 0 0 1-1.148-4.118 7 7 0 0 1 .848-3.052c.365-.65.827-1.24 1.372-1.748A7.1 7.1 0 0 1 9.279 5.5c.998-.429 2.117-.686 3.205-.587 1.479.128 2.859.664 3.977 1.62a7.8 7.8 0 0 1 1.925 2.447c1.242 2.464.754 5.425-.956 7.53a7.5 7.5 0 0 1-2.25 1.778 7 7 0 0 1-3.471.763l-.129-.013a6.3 6.3 0 0 1-2.301-.548m8.348-7.432c-.394-2.678-2.246-4.465-4.903-4.877a5.3 5.3 0 0 0-2.413.244 5.704 5.704 0 0 0-4.114 5.597 5.6 5.6 0 0 0 2.533 4.56 6.4 6.4 0 0 0 3.484.96c.418.002.833-.063 1.23-.192.699-.223 1.35-.515 1.929-.969a5.66 5.66 0 0 0 2.254-5.323M7.15 14.55c.685 1.183 1.89 2.143 3.274 2.503.51.14 1.035.227 1.564.257a.03.03 0 0 0 .009-.017v-1.007L12 13.873c0-.279.343-.536.579-.716l.085-.064c.129-.099.172-.137.197-.249 0 0-.008-.342-.004-.617v-1.286c-.021-.107-.188-.192-.326-.265a2 2 0 0 1-.128-.069c-.116-.077-.403-.321-.403-.493V6.536a.2.2 0 0 0-.017-.086l-.009-.026q-.006-.043-.051-.042c-.604.012-1.2.184-1.762.372-1.007.343-1.782.9-2.485 1.693-.575.643-.917 1.543-1.11 2.366-.21.891-.146 1.868.15 2.756q.182.556.428.985z"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="M16.419 6.244a7.9 7.9 0 0 1 2.43 3.288c.895 2.348.368 5.027-1.158 6.985a7.7 7.7 0 0 1-2.395 1.942 7 7 0 0 1-4.74.668 7.43 7.43 0 0 1-5.786-6.325q-.02-.165-.021-.33l-.013-.082a5 5 0 0 1-.009-.673l.009-.085a.4.4 0 0 0 .013-.1l.017-.278a6.7 6.7 0 0 1 .463-1.911 6.6 6.6 0 0 1 1.435-2.241 7.4 7.4 0 0 1 2.653-1.835 6.99 6.99 0 0 1 7.102.977M4.86 11.014c-.163 1.2-.043 2.263.364 3.403a7.31 7.31 0 0 0 4.552 4.414 5.7 5.7 0 0 0 1.881.356 7.2 7.2 0 0 0 3.742-.857 7.4 7.4 0 0 0 2.284-1.911c1.2-1.586 1.761-3.549 1.457-5.542C18.836 8.906 17.619 7.15 15.994 6a6.8 6.8 0 0 0-2.245-1.016A7.17 7.17 0 0 0 6.814 7.03c-.441.467-.857.977-1.157 1.543a7.6 7.6 0 0 0-.57 1.371 6.3 6.3 0 0 0-.227 1.071m4.419 7.475a7.17 7.17 0 0 1-3.198-2.675 7 7 0 0 1-1.148-4.118 7 7 0 0 1 .848-3.052c.365-.65.827-1.24 1.372-1.748A7.1 7.1 0 0 1 9.279 5.5c.998-.429 2.117-.686 3.205-.587 1.479.128 2.859.664 3.977 1.62a7.8 7.8 0 0 1 1.925 2.447c1.242 2.464.754 5.425-.956 7.53a7.5 7.5 0 0 1-2.25 1.778 7 7 0 0 1-3.471.763l-.129-.013a6.3 6.3 0 0 1-2.301-.548m8.348-7.432c-.394-2.678-2.246-4.465-4.903-4.877a5.3 5.3 0 0 0-2.413.244 5.704 5.704 0 0 0-4.114 5.597 5.6 5.6 0 0 0 2.533 4.56 6.4 6.4 0 0 0 3.484.96c.418.002.833-.063 1.23-.192.699-.223 1.35-.515 1.929-.969a5.66 5.66 0 0 0 2.254-5.323M7.15 14.55c.685 1.183 1.89 2.143 3.274 2.503.51.14 1.035.227 1.564.257a.03.03 0 0 0 .009-.017v-1.007L12 13.873c0-.279.343-.536.579-.716l.085-.064c.129-.099.172-.137.197-.249 0 0-.008-.342-.004-.617v-1.286c-.021-.107-.188-.192-.326-.265a2 2 0 0 1-.128-.069c-.116-.077-.403-.321-.403-.493V6.536a.2.2 0 0 0-.017-.086l-.009-.026q-.006-.043-.051-.042c-.604.012-1.2.184-1.762.372-1.007.343-1.782.9-2.485 1.693-.575.643-.917 1.543-1.11 2.366-.21.891-.146 1.868.15 2.756q.182.556.428.985z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconFAKEAI.displayName = 'FAKEAI'
