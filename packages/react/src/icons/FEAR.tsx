import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconFEAR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M5.915 9.45c.12-.334.32-.896.788-1.071.51-.197 1.252-.515 1.474-.639a1.4 1.4 0 0 1 .536 0c.099.052 1.222.986 1.77 1.444.129-.111.386-.342.412-.377.03-.043.287.202.235.377-.043.138-.098.386-.124.489.24.309.694 1.114.6 1.864h-.711V10.39a1.4 1.4 0 0 0-.61-.716 6 6 0 0 1 .31 1.646l.15.214c-.322.081-1.05.27-1.372.416.116-.099.356-.313.356-.356 0-.056-.523-.63-.814-.643-.24-.008-.99.099-1.338.154-.381.335-1.2 1.209-1.418 2.04v.232l.728.814-.857-.608c-.15.355-.347 1.478-.287 1.748.077.334 1.736 1.522 2.023 1.616.227.081.021.163-.111.197-.64-.27-1.993-1.016-2.328-1.813 0-.394.086-1.354.416-2.066q-.25-.315-.458-.66c-.01-.055.244-1.697.372-2.511h-.274c-.441.343-1.354 1.114-1.487 1.444-.163.412-.141 3.03-.107 3.129.026.077.086.338.107.458-.146-.107-.441-.343-.459-.458-.017-.112-.004-1.98 0-2.902.116-.252.399-.814.626-1.02l.159-.145c.33-.292.844-.755 1.02-1.059h.643l.03-.086zm.257.124c.154-.231.497-.698.66-.75.085-.025.351-.15.643-.282.402-.189.857-.399.912-.386.073.017.785.613 1.132.908-.24.022-.754.048-.922 0-.068-.021-.171-.064-.3-.115-.261-.112-.595-.249-.707-.215-.128.043-.711.575-.985.84zm.848 0a4 4 0 0 0 .489-.36c.017-.03.098.035.197.103.099.077.214.163.287.163.112 0 .686.064.96.094.06.06.069.185-.356.202-.535.021-1.384-.112-1.577-.202m3.129 1.44c-.086-.852-.604-1.238-.857-1.324-.039.133-.086.412 0 .463q.45.407.857.857zm-4.217-.441c.171-.326.634-.819 1.088-.214.536-.052 1.625-.129 1.702 0 .081.137.154.291.184.351a1.6 1.6 0 0 0-.81-.137c-.27.056-1.303.613-1.783.887v.579c-.128.193-.381.613-.381.741-.103-.103-.313-.33-.3-.42.008-.086.205-1.23.3-1.787m4.521 1.864c.107-.098.489-.274 1.183-.218v.711c-.064-.12-.261-.364-.506-.373v.673c.043.034.146.064.202-.098l.06.497c-.077-.043-.236-.112-.262-.06-.034.06-.107.634.202.634.244 0 .304-.171.304-.257v.72a3.3 3.3 0 0 0-.917-.236v-1.744c.008-.086-.026-.249-.266-.249m3.969-.064a1.94 1.94 0 0 0-.982.193c.095 0 .133.103.142.158v1.595l-.258.385h.742l-.082-.214v-.54c.266.022.33.15.326.214v1.2c.12-.227.373-.767.403-1.11.026-.342-.18-.531-.291-.582.394-.138.471-.532.467-.712-.009-.171-.116-.531-.467-.587m-.472 1.221v-.672c.373-.116.493.051.51.15a.54.54 0 0 1-.51.522m-3.758-1.238c-.163-.022-.845.137-1.166.218l.279.215c-.018 1.285.27 2.027.415 2.233-.021-.378-.043-1.149 0-1.226s.257.03.356.094l-.129-.583c0 .112-.154.137-.227.137v-.583c0-.068.077-.102.227-.068.12.026.253.103.305.137.047-.18.102-.553-.06-.574m1.77 1.778v.472l.368-.073c0-.171.069-.523.352-.493.278.026.291.416.261.609l.244-.609.082-1.603.171-.175h-1.114l.231.12zm.891-.565h-.287l.403-.892zm4.444-5.19c.468.175.669.737.789 1.071l.03.09h.643c.171.3.69.767 1.02 1.059l.158.145c.227.21.515.772.626 1.02.004.922.017 2.786 0 2.902-.017.111-.313.351-.458.458l.107-.458c.034-.099.055-2.717-.107-3.129-.13-.334-1.046-1.101-1.488-1.444h-.274c.129.814.381 2.456.373 2.511q-.21.345-.459.66c.33.712.416 1.672.416 2.066-.334.797-1.688 1.543-2.327 1.813-.129-.034-.339-.116-.111-.197.287-.095 2.027-1.346 2.1-1.685.064-.27-.215-1.324-.36-1.68l-.866.61.733-.815v-.232c-.219-.831-1.037-1.705-1.419-2.04-.347-.055-1.097-.162-1.333-.154-.3.013-.818.587-.818.643 0 .043.24.257.36.356-.326-.146-1.055-.335-1.376-.412l.15-.214a6 6 0 0 1 .308-1.65 1.42 1.42 0 0 0-.608.716v1.148h-.707c-.099-.754.356-1.555.596-1.864l-.125-.489c-.051-.171.206-.42.236-.377.026.03.287.266.411.377.549-.462 1.672-1.392 1.77-1.444.099-.047.399-.017.536 0 .223.124.964.442 1.474.639m-.128.445c.163.052.505.519.66.75H17.4a7 7 0 0 0-.99-.84c-.111-.034-.446.103-.711.215-.12.051-.227.094-.296.115-.171.048-.686.022-.921 0 .347-.3 1.058-.891 1.131-.908.056-.013.51.197.917.386.287.132.557.257.639.282m-.677.39c.034.052.342.258.488.36-.193.086-1.041.223-1.577.202-.428-.017-.416-.142-.356-.202.275-.03.849-.094.96-.094.073 0 .189-.086.287-.163.1-.068.18-.128.198-.103m-1.783.476c-.253.086-.772.472-.857 1.324q.406-.451.857-.861c.085-.052.038-.33 0-.463m2.271.673c.454-.609.913-.116 1.089.21.094.557.291 1.697.3 1.787.013.09-.197.317-.3.42 0-.128-.257-.548-.382-.741v-.579c-.48-.274-1.513-.831-1.783-.887a1.6 1.6 0 0 0-.81.137c.03-.06.103-.214.185-.347.077-.133 1.166-.056 1.701 0"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="M5.915 9.45c.12-.334.32-.896.788-1.071.51-.197 1.252-.515 1.474-.639a1.4 1.4 0 0 1 .536 0c.099.052 1.222.986 1.77 1.444.129-.111.386-.342.412-.377.03-.043.287.202.235.377-.043.138-.098.386-.124.489.24.309.694 1.114.6 1.864h-.711V10.39a1.4 1.4 0 0 0-.61-.716 6 6 0 0 1 .31 1.646l.15.214c-.322.081-1.05.27-1.372.416.116-.099.356-.313.356-.356 0-.056-.523-.63-.814-.643-.24-.008-.99.099-1.338.154-.381.335-1.2 1.209-1.418 2.04v.232l.728.814-.857-.608c-.15.355-.347 1.478-.287 1.748.077.334 1.736 1.522 2.023 1.616.227.081.021.163-.111.197-.64-.27-1.993-1.016-2.328-1.813 0-.394.086-1.354.416-2.066q-.25-.315-.458-.66c-.01-.055.244-1.697.372-2.511h-.274c-.441.343-1.354 1.114-1.487 1.444-.163.412-.141 3.03-.107 3.129.026.077.086.338.107.458-.146-.107-.441-.343-.459-.458-.017-.112-.004-1.98 0-2.902.116-.252.399-.814.626-1.02l.159-.145c.33-.292.844-.755 1.02-1.059h.643l.03-.086zm.257.124c.154-.231.497-.698.66-.75.085-.025.351-.15.643-.282.402-.189.857-.399.912-.386.073.017.785.613 1.132.908-.24.022-.754.048-.922 0-.068-.021-.171-.064-.3-.115-.261-.112-.595-.249-.707-.215-.128.043-.711.575-.985.84zm.848 0a4 4 0 0 0 .489-.36c.017-.03.098.035.197.103.099.077.214.163.287.163.112 0 .686.064.96.094.06.06.069.185-.356.202-.535.021-1.384-.112-1.577-.202m3.129 1.44c-.086-.852-.604-1.238-.857-1.324-.039.133-.086.412 0 .463q.45.407.857.857zm-4.217-.441c.171-.326.634-.819 1.088-.214.536-.052 1.625-.129 1.702 0 .081.137.154.291.184.351a1.6 1.6 0 0 0-.81-.137c-.27.056-1.303.613-1.783.887v.579c-.128.193-.381.613-.381.741-.103-.103-.313-.33-.3-.42.008-.086.205-1.23.3-1.787m4.521 1.864c.107-.098.489-.274 1.183-.218v.711c-.064-.12-.261-.364-.506-.373v.673c.043.034.146.064.202-.098l.06.497c-.077-.043-.236-.112-.262-.06-.034.06-.107.634.202.634.244 0 .304-.171.304-.257v.72a3.3 3.3 0 0 0-.917-.236v-1.744c.008-.086-.026-.249-.266-.249m3.969-.064a1.94 1.94 0 0 0-.982.193c.095 0 .133.103.142.158v1.595l-.258.385h.742l-.082-.214v-.54c.266.022.33.15.326.214v1.2c.12-.227.373-.767.403-1.11.026-.342-.18-.531-.291-.582.394-.138.471-.532.467-.712-.009-.171-.116-.531-.467-.587m-.472 1.221v-.672c.373-.116.493.051.51.15a.54.54 0 0 1-.51.522m-3.758-1.238c-.163-.022-.845.137-1.166.218l.279.215c-.018 1.285.27 2.027.415 2.233-.021-.378-.043-1.149 0-1.226s.257.03.356.094l-.129-.583c0 .112-.154.137-.227.137v-.583c0-.068.077-.102.227-.068.12.026.253.103.305.137.047-.18.102-.553-.06-.574m1.77 1.778v.472l.368-.073c0-.171.069-.523.352-.493.278.026.291.416.261.609l.244-.609.082-1.603.171-.175h-1.114l.231.12zm.891-.565h-.287l.403-.892zm4.444-5.19c.468.175.669.737.789 1.071l.03.09h.643c.171.3.69.767 1.02 1.059l.158.145c.227.21.515.772.626 1.02.004.922.017 2.786 0 2.902-.017.111-.313.351-.458.458l.107-.458c.034-.099.055-2.717-.107-3.129-.13-.334-1.046-1.101-1.488-1.444h-.274c.129.814.381 2.456.373 2.511q-.21.345-.459.66c.33.712.416 1.672.416 2.066-.334.797-1.688 1.543-2.327 1.813-.129-.034-.339-.116-.111-.197.287-.095 2.027-1.346 2.1-1.685.064-.27-.215-1.324-.36-1.68l-.866.61.733-.815v-.232c-.219-.831-1.037-1.705-1.419-2.04-.347-.055-1.097-.162-1.333-.154-.3.013-.818.587-.818.643 0 .043.24.257.36.356-.326-.146-1.055-.335-1.376-.412l.15-.214a6 6 0 0 1 .308-1.65 1.42 1.42 0 0 0-.608.716v1.148h-.707c-.099-.754.356-1.555.596-1.864l-.125-.489c-.051-.171.206-.42.236-.377.026.03.287.266.411.377.549-.462 1.672-1.392 1.77-1.444.099-.047.399-.017.536 0 .223.124.964.442 1.474.639m-.128.445c.163.052.505.519.66.75H17.4a7 7 0 0 0-.99-.84c-.111-.034-.446.103-.711.215-.12.051-.227.094-.296.115-.171.048-.686.022-.921 0 .347-.3 1.058-.891 1.131-.908.056-.013.51.197.917.386.287.132.557.257.639.282m-.677.39c.034.052.342.258.488.36-.193.086-1.041.223-1.577.202-.428-.017-.416-.142-.356-.202.275-.03.849-.094.96-.094.073 0 .189-.086.287-.163.1-.068.18-.128.198-.103m-1.783.476c-.253.086-.772.472-.857 1.324q.406-.451.857-.861c.085-.052.038-.33 0-.463m2.271.673c.454-.609.913-.116 1.089.21.094.557.291 1.697.3 1.787.013.09-.197.317-.3.42 0-.128-.257-.548-.382-.741v-.579c-.48-.274-1.513-.831-1.783-.887a1.6 1.6 0 0 0-.81.137c.03-.06.103-.214.185-.347.077-.133 1.166-.056 1.701 0"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconFEAR.displayName = 'FEAR'
