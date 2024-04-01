import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconNPM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 19.286a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57m0-.292a6.994 6.994 0 1 0 0-13.988 6.994 6.994 0 0 0 0 13.988"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="m11.212 7.474.75-1.024q.036-.045.072 0l.737 1.029c-.445-.022-.56.514-.137.587.377.06.746.154 1.106.291.18.069.416-.055.364-.278-.034-.15-.141-.258-.321-.313q-.09-.032 0-.056l1.166-.291q.077-.025.038.047l-.827 1.478c-.021.039-.051.047-.09.039q-2.046-.617-4.136.013c-.034.013-.064 0-.081-.035l-.84-1.5c-.026-.042-.013-.055.03-.042l1.08.27c.107.025.116.064.013.12-.189.103-.369.24-.197.48a.26.26 0 0 0 .3.085 4.5 4.5 0 0 1 1.144-.308c.42-.056.27-.63-.171-.592m-2.41 3.206-.085.043a.15.15 0 0 1-.068.03c-.052 0-.069-.017-.056-.06.116-.394.407-.737.651-1.072a.64.64 0 0 1 .3-.21c.63-.218 1.217-.35 1.77-.39.018 0 .03.018.022.03a.64.64 0 0 1-.335.3c-.47.18-.874.258-1.088.772-.184.429-.326 1.127-.784 1.337-.33.15-.403.57-.446.887q-.015.129-.043 0a2.3 2.3 0 0 1-.043-.874c.035-.266.193-.484.266-.742.017-.055 0-.072-.06-.05"
          />
          <path
            fill="currentColor"
            d="M12.33 11.734q-.001.276.107.018.063-.148.086-.3-.002-.035.03-.056c.017-.017.043-.022.064-.026q.192 0 .39.03.482.085.836-.171.064-.038 0-.082c-.326-.248-.814-.116-1.196-.034q-.102.021-.026-.047c.3-.27.686-.373 1.14-.313l.12.004q.124 0 .163.103c.09.236.215.699.502.784.026.009.034.035.017.052a4 4 0 0 0-.626 1.011c-.051.12-.214.176-.343.129l-.702-.283q-.059-.027-.065-.073a.37.37 0 0 0-.188-.248.15.15 0 0 0-.133-.013.1.1 0 0 0-.065.055c-.025.065 0 .086.07.073q.083-.02.15.09c.02.043.016.086-.018.12a.1.1 0 0 1-.039.026l-.475.188a.3.3 0 0 1-.193.013 3.4 3.4 0 0 1-.557-.214.113.113 0 0 1 .03-.214.24.24 0 0 1 .102-.005c.052.01.056-.042.052-.072q-.014-.058-.073-.065c-.219-.034-.283.116-.33.266a.12.12 0 0 1-.077.077l-.66.266q-.269.11-.377-.129a6 6 0 0 0-.604-1.003c-.022-.025-.018-.042.02-.06.31-.11.387-.548.502-.805a.1.1 0 0 1 .082-.056q.753-.115 1.191.189.305.21-.073.12c-.325-.078-.728-.146-1.02.06a.06.06 0 0 0-.029.051.06.06 0 0 0 .03.052q.45.274 1.08.12.194-.045.252.128l.099.36c.013.043.085.064.085.009l-.012-.982q-.002-.055-.06-.086a5.2 5.2 0 0 0-1.398-.368c-.042-.004-.05-.026-.038-.06q.258-.552.741-.583c.463-.026.699-.39.862-.728.017-.035.043-.048.085-.048L12.134 9q.033-.001.06.017.024.013.043.043c.15.317.424.716.861.72.352.004.609.322.75.591.017.026.005.043-.025.043a5.3 5.3 0 0 0-1.432.395.08.08 0 0 0-.056.073v.852z"
          />
          <path
            fill="currentColor"
            d="M15.086 10.706a.18.18 0 0 0 .013.15c.274.471.342.964.192 1.487-.03.103-.047.103-.055-.009a1.7 1.7 0 0 0-.184-.664c-.108-.206-.34-.214-.498-.377a.9.9 0 0 1-.197-.274 17 17 0 0 1-.441-.982c-.103-.24-.335-.574-.626-.6a2 2 0 0 1-.364-.06.37.37 0 0 1-.202-.133l-.098-.137c-.056-.068-.034-.103.056-.094a7.2 7.2 0 0 1 1.89.441.17.17 0 0 1 .094.077q.225.374.501.708.174.212.257.488c.013.047 0 .069-.051.056a.5.5 0 0 1-.206-.103.057.057 0 0 0-.085.026z"
          />
          <path
            fill="currentColor"
            d="M14.846 14.417c.128.3.085.6-.112.892q-.182.255-.12-.035c.133-.604-.557-1.114-.463-1.748.116-.55.36-1.063.712-1.5q.038-.051.069 0 .384.643.235 1.243c-.128.535.617.672.043 1.294q-.05.051-.094 0l-.18-.21c-.034-.034-.107.026-.09.064m-5.76-.343a.24.24 0 0 0-.172.146q-.043.095-.133.017c-.235-.197-.287-.488-.077-.707a.7.7 0 0 0 .137-.197.13.13 0 0 0 .01-.094 1.42 1.42 0 0 1 .222-1.235.06.06 0 0 1 .043 0 .04.04 0 0 1 .021.013c.394.472.926 1.239.639 1.774-.214.4-.437.708-.403 1.158q.008.096-.069.012c-.244-.27-.3-.557-.158-.844.013-.026-.026-.051-.06-.043m2.357-.398c-.669.197-1.2.6-1.114 1.316.034.265.231.462.36.694a.31.31 0 0 1 .012.261c-.094.24-.175.485 0 .72.026.043.018.056-.034.043a.42.42 0 0 1-.274-.197.14.14 0 0 1-.013-.116c.077-.244-.099-.403-.248-.578-.455-.545-.266-1.398 0-1.98.175-.386.634-.643.93-.96.077-.086.222.103.287.133.257.137.48.2.664.197.293-.018.572-.129.797-.317q.05-.052.107 0c.18.158.377.33.587.5.472.387.6 1.004.635 1.565.03.42-.125.724-.407 1.029-.13.137-.16.283-.103.437a.1.1 0 0 1-.005.077.43.43 0 0 1-.265.206q-.085.023-.035-.043c.318-.437-.154-.806.202-1.281.373-.498.184-1.11-.317-1.432a2.3 2.3 0 0 0-.635-.266.24.24 0 0 0-.145.005 1.24 1.24 0 0 1-.857-.009.2.2 0 0 0-.13 0z"
          />
          <path
            fill="currentColor"
            d="M11.97 14.22c.313 0 .566-.047.566-.111 0-.06-.257-.112-.566-.112-.313 0-.57.052-.57.112s.257.111.57.111"
          />
          <path
            fill="currentColor"
            d="M12.15 16.187c.017.172-.047.322-.201.463-.052.052-.052.292-.129.266a1.66 1.66 0 0 1-.797-.566.13.13 0 0 1-.017-.12c.141-.343.043-.668-.146-.956q-.308-.47.034-.934a.45.45 0 0 1 .292-.18.1.1 0 0 1 .081.017c.493.322.969.317 1.415-.013a.1.1 0 0 1 .098-.017q.413.115.497.583c.043.253-.085.441-.205.643a.96.96 0 0 0 .012.999q.057.095-.034.158a.7.7 0 0 1-.394.137.15.15 0 0 0-.112.052.64.64 0 0 0-.184.347c-.013.085-.051.103-.111.034-.086-.09-.146-.18-.107-.313l.14-.471c.018-.064-.05-.112-.085-.15q-.056-.051-.043.021z"
          />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572m0-.292a6.994 6.994 0 1 0 0-13.988 6.994 6.994 0 0 0 0 13.988"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#fff"
            d="m11.211 7.474.75-1.024c.026-.03.047-.03.073 0l.737 1.029c-.446-.022-.561.514-.137.587.377.06.746.154 1.106.291.18.069.415-.055.364-.278-.034-.15-.142-.258-.322-.313q-.09-.032 0-.056l1.166-.291q.077-.025.039.047l-.827 1.478c-.022.039-.052.047-.09.039q-2.046-.617-4.136.013-.053.018-.082-.035l-.84-1.5c-.025-.042-.012-.055.03-.042l1.08.27c.108.025.116.064.013.12-.188.103-.368.24-.197.48a.26.26 0 0 0 .3.085 4.5 4.5 0 0 1 1.144-.308c.42-.056.27-.63-.171-.592M8.802 10.68l-.085.043a.15.15 0 0 1-.069.03c-.051 0-.068-.017-.056-.06.116-.394.408-.737.652-1.072a.64.64 0 0 1 .3-.21c.63-.218 1.217-.35 1.77-.39.017 0 .03.018.021.03a.64.64 0 0 1-.334.3c-.471.18-.874.258-1.089.772-.184.429-.325 1.127-.784 1.337-.33.15-.403.57-.446.887-.008.086-.025.086-.042 0a2.3 2.3 0 0 1-.043-.874c.034-.266.193-.484.265-.742q.029-.083-.06-.05"
          />
          <path
            fill="#fff"
            d="M12.33 11.734q-.001.276.107.018c.043-.1.068-.198.085-.3q0-.035.03-.056c.018-.017.043-.022.065-.026q.191 0 .39.03.482.085.835-.171.065-.038 0-.082c-.325-.248-.814-.116-1.195-.034q-.103.021-.026-.047c.3-.27.686-.373 1.14-.313l.12.004q.123 0 .163.103c.09.236.214.699.501.784.026.009.035.035.017.052a4 4 0 0 0-.625 1.011c-.052.12-.215.176-.343.129l-.703-.283q-.058-.027-.064-.073a.37.37 0 0 0-.189-.248.15.15 0 0 0-.133-.013.1.1 0 0 0-.064.055c-.026.065 0 .086.069.073q.084-.02.15.09c.021.043.017.086-.018.12a.1.1 0 0 1-.038.026l-.476.188a.3.3 0 0 1-.193.013 3.3 3.3 0 0 1-.557-.214.113.113 0 0 1 .03-.214.24.24 0 0 1 .103-.005c.051.01.056-.042.051-.072q-.014-.058-.072-.065c-.219-.034-.283.116-.33.266a.12.12 0 0 1-.078.077l-.66.266q-.269.11-.377-.129a6 6 0 0 0-.604-1.003c-.021-.025-.017-.042.021-.06.309-.11.386-.548.502-.805a.1.1 0 0 1 .081-.056q.754-.115 1.192.189c.201.141.18.18-.073.12-.326-.078-.729-.146-1.02.06a.06.06 0 0 0-.03.051.06.06 0 0 0 .03.052q.45.274 1.08.12.193-.045.253.128l.098.36c.013.043.086.064.086.009l-.013-.982q0-.055-.06-.086a5.2 5.2 0 0 0-1.397-.368c-.043-.004-.051-.026-.039-.06q.258-.552.742-.583c.463-.026.698-.39.861-.728.017-.035.043-.048.086-.048L12.132 9q.034-.001.06.017.025.013.043.043c.15.317.425.716.862.72.351.004.608.322.75.591.017.026.004.043-.026.043a5.3 5.3 0 0 0-1.431.395.08.08 0 0 0-.056.073v.852z"
          />
          <path
            fill="#fff"
            d="M15.085 10.706a.18.18 0 0 0 .013.15c.274.471.343.964.193 1.487-.03.103-.047.103-.056-.009a1.7 1.7 0 0 0-.184-.664c-.107-.206-.339-.214-.497-.377a.9.9 0 0 1-.197-.274c-.155-.313-.3-.643-.442-.982-.103-.24-.334-.574-.625-.6a2 2 0 0 1-.365-.06.37.37 0 0 1-.201-.133l-.099-.137c-.055-.068-.034-.103.056-.094a7.2 7.2 0 0 1 1.89.441.17.17 0 0 1 .094.077q.225.374.502.708.173.212.257.488c.013.047 0 .069-.052.056a.5.5 0 0 1-.205-.103.057.057 0 0 0-.086.026z"
          />
          <path
            fill="#fff"
            d="M14.845 14.417c.129.3.086.6-.111.892-.12.171-.163.158-.12-.035.133-.604-.557-1.114-.463-1.748.116-.55.36-1.063.711-1.5q.038-.051.069 0 .384.643.236 1.243c-.129.535.617.672.043 1.294q-.051.051-.095 0l-.18-.21c-.034-.034-.107.026-.09.064m-5.76-.343a.24.24 0 0 0-.171.146q-.044.095-.133.017c-.236-.197-.287-.488-.077-.707a.7.7 0 0 0 .137-.197.13.13 0 0 0 .009-.094 1.42 1.42 0 0 1 .222-1.235.06.06 0 0 1 .043 0 .04.04 0 0 1 .022.013c.394.472.925 1.239.638 1.774-.214.4-.437.708-.403 1.158q.008.096-.068.012c-.244-.27-.3-.557-.159-.844.013-.026-.025-.051-.06-.043m2.357-.398c-.668.197-1.2.6-1.114 1.316.034.265.232.462.36.694a.31.31 0 0 1 .013.261c-.094.24-.176.485 0 .72q.04.063-.034.043a.42.42 0 0 1-.275-.197.14.14 0 0 1-.012-.116c.077-.244-.099-.403-.249-.578-.454-.545-.266-1.398 0-1.98.176-.386.634-.643.93-.96.077-.086.223.103.287.133.257.137.48.2.664.197.293-.018.573-.129.798-.317q.05-.052.107 0c.18.158.377.33.587.5.471.387.6 1.004.634 1.565.03.42-.124.724-.407 1.029-.129.137-.159.283-.103.437a.1.1 0 0 1-.004.077.43.43 0 0 1-.266.206q-.084.023-.034-.043c.317-.437-.154-.806.201-1.281.373-.498.185-1.11-.317-1.432q-.297-.181-.634-.266a.24.24 0 0 0-.146.005 1.24 1.24 0 0 1-.857-.009.2.2 0 0 0-.129 0z"
          />
          <path
            fill="#fff"
            d="M11.97 14.22c.312 0 .565-.047.565-.111 0-.06-.257-.112-.565-.112-.313 0-.57.052-.57.112s.257.111.57.111"
          />
          <path
            fill="#fff"
            d="M12.15 16.187c.017.172-.048.322-.202.463-.051.052-.051.292-.128.266a1.66 1.66 0 0 1-.798-.566.13.13 0 0 1-.017-.12c.142-.343.043-.668-.145-.956q-.308-.47.034-.934a.45.45 0 0 1 .291-.18.1.1 0 0 1 .082.017c.493.322.968.317 1.414-.013a.11.11 0 0 1 .099-.017q.412.115.497.583c.043.253-.086.441-.206.643a.96.96 0 0 0 .013.999q.057.095-.034.158a.7.7 0 0 1-.395.137.15.15 0 0 0-.111.052.64.64 0 0 0-.184.347c-.013.085-.052.103-.112.034-.086-.09-.146-.18-.107-.313l.141-.471c.018-.064-.051-.112-.085-.15q-.057-.051-.043.021z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconNPM.displayName = 'NPM'
