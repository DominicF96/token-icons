import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconSPACE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.143 17.302c1.243-.36 2.293-1.453 2.88-2.512a5.5 5.5 0 0 0 .634-3.128 2.2 2.2 0 0 0-.107-.493c-.026-.086.193-.378.279-.493l.026-.034q.789-1.082 1.56-2.178a2 2 0 0 0 .23-.368l.057-.052q.033-.039-.018-.034-1.374.058-2.807.167-.47.038-.96.03a.4.4 0 0 1-.098-.013.1.1 0 0 1-.047-.034c-.742-.938-3.377-1.603-4.955-1.166A5.66 5.66 0 0 0 7.21 9.913a5.5 5.5 0 0 0-.446 3.339c.154.947-.686 1.8-1.401 2.528-.24.244-.472.472-.639.686q-.024.045.022.038.712-.04 1.422-.107c.75-.068 1.5-.133 2.255-.128.09 0 .15.051.201.103l.073.064a6.3 6.3 0 0 0 5.447.866m-5.186-2.59c.18.018.309.048.442.185a3.94 3.94 0 0 0 5.674-.124 3.9 3.9 0 0 0 .84-3.566c-.043-.116-.086-.244-.043-.325l.617-1.098a.03.03 0 0 0-.03-.021 4.5 4.5 0 0 1-1.23-.034c-.171-.035-.265-.137-.368-.245a4.08 4.08 0 0 0-3.815-.917c-.094.026-.175.065-.26.103l-.15.069c-1.672.647-2.538 2.434-2.285 4.114.008.073.03.15.051.227.047.189.099.39.035.557-.14.364-.33.707-.562 1.02a.04.04 0 0 0 .026.043c.004.009.017.009.026.009.355-.035.698-.03 1.037 0z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M5.786 9.857a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143"
          />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="M14.143 17.302c1.242-.36 2.293-1.453 2.88-2.512a5.5 5.5 0 0 0 .634-3.128 2.2 2.2 0 0 0-.107-.493c-.026-.086.193-.378.278-.493l.026-.034a148 148 0 0 0 1.56-2.178 2 2 0 0 0 .231-.368l.056-.052q.033-.039-.017-.034-1.374.058-2.807.167-.47.038-.96.03a.4.4 0 0 1-.099-.013.1.1 0 0 1-.047-.034c-.741-.938-3.377-1.603-4.954-1.166a5.66 5.66 0 0 0-3.609 2.919 5.5 5.5 0 0 0-.445 3.339c.154.947-.686 1.8-1.402 2.528-.24.244-.471.472-.638.686q-.026.045.021.038.713-.04 1.423-.107c.75-.068 1.5-.133 2.254-.128.09 0 .15.051.202.103l.072.064a6.3 6.3 0 0 0 5.448.866m-5.186-2.59c.18.018.308.048.441.185a3.94 3.94 0 0 0 5.675-.124 3.9 3.9 0 0 0 .84-3.566c-.043-.116-.086-.244-.043-.325l.617-1.098a.03.03 0 0 0-.03-.021 4.5 4.5 0 0 1-1.23-.034c-.171-.035-.266-.137-.369-.245a4.08 4.08 0 0 0-3.814-.917c-.094.026-.176.065-.261.103l-.15.069c-1.672.647-2.538 2.434-2.285 4.114.009.073.03.15.052.227.047.189.098.39.034.557a4.4 4.4 0 0 1-.561 1.02.04.04 0 0 0 .025.043c.005.009.017.009.026.009.356-.035.699-.03 1.037 0z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#SPACE__a)"
            d="M5.785 9.857a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143"
          />
          <defs>
            <linearGradient
              id="SPACE__a"
              x1="6.514"
              x2="4.881"
              y1="8.139"
              y2="9.322"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3119FF" />
              <stop offset="1" stopColor="#21E8FF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconSPACE.displayName = 'SPACE'
