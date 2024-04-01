import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconPAAL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.928 18a1.564 1.564 0 0 1-1.534-1.47.04.04 0 0 0-.017-.017 1.5 1.5 0 0 1-.801-.656 1.62 1.62 0 0 1-.12-1.427.04.04 0 0 0-.01-.034 1.64 1.64 0 0 1-.158-1.637c.03-.077.09-.15.129-.227a.05.05 0 0 0 .004-.039 1.62 1.62 0 0 1 .18-1.354.03.03 0 0 0 0-.034 1.607 1.607 0 0 1 .536-2.08 1.41 1.41 0 0 1 .626-1.413.07.07 0 0 0 .03-.047 1.41 1.41 0 0 1 .835-1.136l.026-.017a.1.1 0 0 0 .013-.03 1.384 1.384 0 0 1 1.389-1.149.08.08 0 0 0 .06-.026c.216-.266.528-.438.87-.48.702-.085 1.238.258 1.53.875a.55.55 0 0 1 .055.24V18.18a.5.5 0 0 1-.021.137 1.423 1.423 0 0 1-2.16.729c-.116-.086-.24-.06-.369-.099a1.63 1.63 0 0 1-.887-.63c-.064-.085-.111-.192-.159-.291a.05.05 0 0 0-.042-.03z"
          />
          <path
            fill="currentColor"
            d="M9.27 16.672c.026-.42-.472-.416-.51-.043a.95.95 0 0 1-.6.844.7.7 0 0 1-.382.043 1 1 0 0 1-.814-.63 1.1 1.1 0 0 1-.047-.485c.009-.14-.086-.257-.231-.3-.223-.068-.429-.11-.6-.29-.343-.374-.39-.798-.129-1.27q.039-.07.013-.188a.33.33 0 0 0-.086-.15 1.3 1.3 0 0 1-.193-.257.93.93 0 0 1-.017-.892c.056-.115.142-.214.214-.317.108-.158-.03-.343-.068-.501a.96.96 0 0 1 .073-.665c.077-.15.188-.257.261-.415a.12.12 0 0 0-.004-.112c-.172-.274-.347-.57-.262-.912.09-.36.3-.605.639-.738.12-.047.3-.094.429-.064.424.094.642.351.784.729.043.115.171.223.3.18s.257-.159.214-.3A1.53 1.53 0 0 0 6.968 8.78c-.107-.012-.214-.004-.321-.017a.03.03 0 0 1-.021-.017.5.5 0 0 1 0-.227c.072-.309.265-.463.54-.6.158-.077.15-.257.15-.411.004-.185.124-.386.252-.515.116-.115.283-.171.442-.214.128-.043.197-.159.201-.296a.814.814 0 0 1 .712-.805c.433-.073.703.274.78.664.025.124.021.227.163.27.227.077.454-.022.411-.3a1.6 1.6 0 0 0-.099-.386 1.6 1.6 0 0 0-.428-.583.04.04 0 0 1 .017-.051c.201-.15.429-.172.673-.137a.74.74 0 0 1 .36.171c.227.18.343.459.343.746v11.82c0 .527-.305.917-.84.96a.8.8 0 0 1-.3-.03c-.189-.043-.305-.206-.48-.27a.2.2 0 0 0-.086-.013q-.6.013-.917-.566a.086.086 0 0 1 .026-.111c.428-.283.685-.66.724-1.187z"
          />
          <path
            fill="currentColor"
            d="M17.636 16.508a1.6 1.6 0 0 0 .904-2.095q0-.01.004-.017.604-.914.043-1.86a.05.05 0 0 1-.008-.039c0-.034.013-.069.025-.103l.022-.086c.073-.415 0-.805-.227-1.17a.03.03 0 0 1 0-.034 1.61 1.61 0 0 0-.523-2.061.03.03 0 0 1-.014-.013.03.03 0 0 1-.003-.017 1.42 1.42 0 0 0-.617-1.397.1.1 0 0 1-.039-.06 1.41 1.41 0 0 0-.831-1.128.1.1 0 0 1-.043-.055 1.4 1.4 0 0 0-1.35-1.14c-.039 0-.073 0-.103-.03a1.32 1.32 0 0 0-.862-.472c-.467-.06-.857.06-1.182.365-.185.171-.403.471-.403.741v12.334q-.001.102.043.197a1.414 1.414 0 0 0 1.512.909c.24-.027.47-.115.665-.257a.3.3 0 0 1 .175-.043c.043-.009.078-.009.112-.021a1.6 1.6 0 0 0 .994-.733l.056-.116.043-.086a.04.04 0 0 1 .012-.014.04.04 0 0 1 .018-.007 1.586 1.586 0 0 0 1.534-1.432.07.07 0 0 1 .043-.06M14.314 6.356c-.017.141-.085.265-.235.287-.197.025-.412-.047-.395-.287a1.48 1.48 0 0 1 .549-1.029l.003-.013-.003-.013-.009-.008a.865.865 0 0 0-1.328.501c-.034.116-.034.249-.034.373v11.524c0 .3.017.502.06.6a.87.87 0 0 0 1.17.489c.055-.022.107-.064.158-.103.082-.06.159-.12.253-.129h.043c.086-.008.171-.012.257-.034a1 1 0 0 0 .686-.574v-.026a.04.04 0 0 0-.017-.017 1.47 1.47 0 0 1-.763-1.226.33.33 0 0 1 .043-.21c.111-.171.36-.141.471.017.039.06.043.142.051.215v.038c.039.33.258.6.558.729.308.128.672.03.912-.172a.98.98 0 0 0 .36-.771v-.06c-.008-.081-.017-.163.026-.231.073-.112.176-.138.292-.163l.09-.022a.972.972 0 0 0 .565-1.44c-.128-.214-.025-.33.112-.48l.013-.017c.261-.287.291-.707.132-1.046a1.3 1.3 0 0 0-.201-.3c-.103-.128-.051-.248.009-.381l.004-.017a.93.93 0 0 0-.086-.883l-.073-.099c-.098-.128-.197-.257-.077-.437q.121-.179.172-.325A.91.91 0 0 0 18 9.84a.98.98 0 0 0-.698-.489c-.472-.085-.875.279-1.003.695-.056.171-.232.261-.399.184q-.235-.11-.137-.407a1.55 1.55 0 0 1 1.607-1.067q.027.002.022-.022a.8.8 0 0 0-.51-.78c-.185-.086-.189-.214-.193-.36a.6.6 0 0 0-.022-.176.79.79 0 0 0-.574-.6c-.111-.025-.214-.064-.274-.171a.6.6 0 0 1-.052-.236c-.008-.068-.013-.137-.043-.205a.79.79 0 0 0-.728-.532c-.377-.03-.643.352-.686.686z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M14.571 7.714a.429.429 0 1 0 0-.857.429.429 0 0 0 0 .857M15.857 9a.429.429 0 1 0 0-.857.429.429 0 0 0 0 .857m-2.143 0a.429.429 0 1 0 0-.858.429.429 0 0 0 0 .858m.429 2.571a.857.857 0 1 0 0-1.715.857.857 0 0 0 0 1.715m2.143 0a.429.429 0 1 0 0-.857.429.429 0 0 0 0 .857m-2.143 1.286a.428.428 0 1 0 0-.856.428.428 0 0 0 0 .856m1.5 1.286a.643.643 0 1 0 0-1.287.643.643 0 0 0 0 1.287m1.5 0a.428.428 0 1 0 0-.857.428.428 0 0 0 0 .857m-3.215 1.285a.643.643 0 1 0 0-1.286.643.643 0 0 0 0 1.286m1.93.429a.428.428 0 1 0 0-.857.428.428 0 0 0 0 .857m-2.144 1.286a.429.429 0 1 0 0-.857.429.429 0 0 0 0 .857"
          />
        </>
      ) : (
        <>
          <path
            fill="#061D41"
            d="M7.929 18a1.564 1.564 0 0 1-1.534-1.47.04.04 0 0 0-.018-.017 1.5 1.5 0 0 1-.801-.656 1.62 1.62 0 0 1-.12-1.427.04.04 0 0 0-.009-.034 1.64 1.64 0 0 1-.158-1.637c.03-.077.09-.15.128-.227a.05.05 0 0 0 .005-.039 1.62 1.62 0 0 1 .18-1.354.03.03 0 0 0 0-.034 1.607 1.607 0 0 1 .535-2.08 1.41 1.41 0 0 1 .626-1.413.07.07 0 0 0 .03-.047 1.41 1.41 0 0 1 .836-1.136l.026-.017a.1.1 0 0 0 .012-.03 1.384 1.384 0 0 1 1.389-1.149.08.08 0 0 0 .06-.026c.217-.266.529-.438.87-.48.703-.085 1.239.258 1.53.875a.55.55 0 0 1 .056.24V18.18a.5.5 0 0 1-.022.137 1.423 1.423 0 0 1-2.16.729c-.115-.086-.24-.06-.368-.099a1.63 1.63 0 0 1-.887-.63c-.065-.085-.112-.192-.159-.291a.05.05 0 0 0-.043-.03z"
          />
          <path
            fill="#613CC0"
            d="M9.27 16.672c.026-.42-.472-.416-.51-.043a.95.95 0 0 1-.6.844.7.7 0 0 1-.382.043 1 1 0 0 1-.814-.63 1.1 1.1 0 0 1-.047-.485c.009-.14-.086-.257-.231-.3-.223-.068-.429-.11-.6-.29-.343-.374-.39-.798-.129-1.27q.039-.07.013-.188a.33.33 0 0 0-.086-.15 1.3 1.3 0 0 1-.193-.257.93.93 0 0 1-.017-.892c.056-.115.142-.214.214-.317.108-.158-.03-.343-.068-.501a.96.96 0 0 1 .073-.665c.077-.15.188-.257.261-.415a.12.12 0 0 0-.004-.112c-.172-.274-.347-.57-.262-.912.09-.36.3-.605.639-.738.12-.047.3-.094.429-.064.424.094.642.351.784.729.043.115.171.223.3.18s.257-.159.214-.3A1.53 1.53 0 0 0 6.968 8.78c-.107-.012-.214-.004-.321-.017a.03.03 0 0 1-.021-.017.5.5 0 0 1 0-.227c.072-.309.265-.463.54-.6.158-.077.15-.257.15-.411.004-.185.124-.386.252-.515.116-.115.283-.171.442-.214.128-.043.197-.159.201-.296a.814.814 0 0 1 .712-.805c.433-.073.703.274.78.664.025.124.021.227.163.27.227.077.454-.022.411-.3a1.6 1.6 0 0 0-.099-.386 1.6 1.6 0 0 0-.428-.583.04.04 0 0 1 .017-.051c.201-.15.429-.172.673-.137a.74.74 0 0 1 .36.171c.227.18.343.459.343.746v11.82c0 .527-.305.917-.84.96a.8.8 0 0 1-.3-.03c-.189-.043-.305-.206-.48-.27a.2.2 0 0 0-.086-.013q-.6.013-.917-.566a.086.086 0 0 1 .026-.111c.428-.283.685-.66.724-1.187z"
          />
          <path
            fill="#061D41"
            d="M17.636 16.508a1.6 1.6 0 0 0 .904-2.095q0-.01.004-.017.604-.914.043-1.86a.05.05 0 0 1-.008-.039c0-.034.013-.069.025-.103l.022-.086c.073-.415 0-.805-.227-1.17a.03.03 0 0 1 0-.034 1.61 1.61 0 0 0-.523-2.061.03.03 0 0 1-.014-.013.03.03 0 0 1-.003-.017 1.42 1.42 0 0 0-.617-1.397.1.1 0 0 1-.039-.06 1.41 1.41 0 0 0-.831-1.128.1.1 0 0 1-.043-.055 1.4 1.4 0 0 0-1.35-1.14c-.039 0-.073 0-.103-.03a1.32 1.32 0 0 0-.862-.472c-.467-.06-.857.06-1.182.365-.185.171-.403.471-.403.741v12.334q-.001.102.043.197a1.414 1.414 0 0 0 1.512.909c.24-.027.47-.115.665-.257a.3.3 0 0 1 .175-.043c.043-.009.078-.009.112-.021a1.6 1.6 0 0 0 .994-.733l.056-.116.043-.086a.04.04 0 0 1 .012-.014.04.04 0 0 1 .018-.007 1.586 1.586 0 0 0 1.534-1.432.07.07 0 0 1 .043-.06M14.314 6.356c-.017.141-.085.265-.235.287-.197.025-.412-.047-.395-.287a1.48 1.48 0 0 1 .549-1.029l.003-.013-.003-.013-.009-.008a.865.865 0 0 0-1.328.501c-.034.116-.034.249-.034.373v11.524c0 .3.017.502.06.6a.87.87 0 0 0 1.17.489c.055-.022.107-.064.158-.103.082-.06.159-.12.253-.129h.043c.086-.008.171-.012.257-.034a1 1 0 0 0 .686-.574v-.026a.04.04 0 0 0-.017-.017 1.47 1.47 0 0 1-.763-1.226.33.33 0 0 1 .043-.21c.111-.171.36-.141.471.017.039.06.043.142.051.215v.038c.039.33.258.6.558.729.308.128.672.03.912-.172a.98.98 0 0 0 .36-.771v-.06c-.008-.081-.017-.163.026-.231.073-.112.176-.138.292-.163l.09-.022a.972.972 0 0 0 .565-1.44c-.128-.214-.025-.33.112-.48l.013-.017c.261-.287.291-.707.132-1.046a1.3 1.3 0 0 0-.201-.3c-.103-.128-.051-.248.009-.381l.004-.017a.93.93 0 0 0-.086-.883l-.073-.099c-.098-.128-.197-.257-.077-.437q.121-.179.172-.325A.91.91 0 0 0 18 9.84a.98.98 0 0 0-.698-.489c-.472-.085-.875.279-1.003.695-.056.171-.232.261-.399.184q-.235-.11-.137-.407a1.55 1.55 0 0 1 1.607-1.067q.027.002.022-.022a.8.8 0 0 0-.51-.78c-.185-.086-.189-.214-.193-.36a.6.6 0 0 0-.022-.176.79.79 0 0 0-.574-.6c-.111-.025-.214-.064-.274-.171a.6.6 0 0 1-.052-.236c-.008-.068-.013-.137-.043-.205a.79.79 0 0 0-.728-.532c-.377-.03-.643.352-.686.686z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#613CC0"
            d="M14.572 7.714a.429.429 0 1 0 0-.857.429.429 0 0 0 0 .857M15.858 9a.429.429 0 1 0 0-.857.429.429 0 0 0 0 .857m-2.143 0a.429.429 0 1 0 0-.858.429.429 0 0 0 0 .858m.428 2.571a.857.857 0 1 0 0-1.715.857.857 0 0 0 0 1.715m2.143 0a.429.429 0 1 0 0-.857.429.429 0 0 0 0 .857m-2.143 1.286a.428.428 0 1 0 0-.857.428.428 0 0 0 0 .857m1.5 1.286a.643.643 0 1 0 0-1.286.643.643 0 0 0 0 1.286m1.5 0a.428.428 0 1 0 0-.857.428.428 0 0 0 0 .857m-3.214 1.285a.643.643 0 1 0 0-1.286.643.643 0 0 0 0 1.286m1.929.429a.428.428 0 1 0 0-.857.428.428 0 0 0 0 .857m-2.143 1.286a.429.429 0 1 0 0-.857.429.429 0 0 0 0 .857"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPAAL.displayName = 'PAAL'
