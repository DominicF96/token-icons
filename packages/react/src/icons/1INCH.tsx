import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const Icon1INCH = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.574 6.308c-.468-.304-.802-.435-.802-.435a18 18 0 0 0 1.275.1 8 8 0 0 0-.616-.441c-1.234-.798-2.393-1.047-3.359-1.047-.852 0-1.553.193-2.022.373-.378.145-.605.281-.639.301l-.001.001.488-.775.036-.379a.38.38 0 0 1 .344.37 6 6 0 0 1 1.794-.272c1.208 0 2.68.365 4.21 1.57a.38.38 0 0 1-.05.632c.275.212.571.47.863.782 1.055 1.128 2.031 2.936 1.77 5.634a.38.38 0 0 1-.474.333c-.085 1.153-.588 3.06-2.752 4.685a.38.38 0 0 1-.568-.13l-.066.06c-.616.558-1.552 1.167-2.818 1.343l-.052.003h-.012a.38.38 0 0 1-.376-.317 5.6 5.6 0 0 1-1.1.105c-.706 0-1.561-.12-2.563-.472a.38.38 0 0 1 .215-.73c.283.069.566.102.861.102 1.917 0 3.419-1.43 3.419-3.144 0-.844-.358-1.619-.961-2.19l-.005.006c-.138.178-.304.393-.421.548-.19.267-.257.414-.242.548.065.434-.07.862-.316 1.174l-.01.012a5 5 0 0 1-.449.42l-.022.02a10 10 0 0 0-.458.416c-.295.275-.68.315-.91.315-.064 0-.12-.005-.16-.008h-.003l-.062-.005h-.052l-.04.03-.113.095a.63.63 0 0 1-.28.145c-.088.022-.18.03-.265.03a3 3 0 0 1-.687-.101 6 6 0 0 1-.54-.162.7.7 0 0 1-.247-.176 1.3 1.3 0 0 1-.154-.205 3 3 0 0 1-.23-.465c-.124-.307-.228-.66-.246-.832a.8.8 0 0 1 .037-.291c.024-.078.057-.16.092-.237.068-.152.157-.321.235-.467l.003-.006q.083-.157.14-.27.027-.057.041-.091l.01-.026c.02-.1.086-.583.152-1.105.066-.513.128-1.024.14-1.129a.5.5 0 0 0 0-.17.8.8 0 0 0-.111-.24v-.002c-.167-.283-.176-.561-.106-.902-.85-.59-3.012-2.187-3.145-2.296L4.19 6.94a.5.5 0 0 1-.184-.298.43.43 0 0 1 .06-.304v-.001s.001-.001.318.21c0 0-.025.037.05.1l.032.025.008.006.18.136.415.308c.851.629 2.294 1.684 2.702 1.95-.125.45-.125.662 0 .875.175.287.188.437.163.65-.025.212-.25 2.05-.3 2.275-.02.09-.118.275-.225.479-.16.3-.34.642-.325.783.025.238.35 1.25.637 1.363.213.075.738.237 1.088.237.125 0 .237-.025.287-.075.213-.187.275-.225.425-.225h.038q.043 0 .094.006.06.006.131.007c.2 0 .463-.038.65-.213.13-.13.304-.281.467-.424.184-.16.354-.308.433-.4.188-.238.287-.563.237-.888-.037-.3.126-.563.313-.825.238-.313.675-.875.675-.875a4 4 0 0 1 .292.245 3.4 3.4 0 0 1 1.108 2.492c0 1.688-1.274 3.096-2.979 3.443a4.1 4.1 0 0 1-1.771-.03q.502.174.95.275.445.1.836.14.346.035.652.035c.539 0 .982-.075 1.323-.167.552-.15.839-.346.839-.346s-.074.096-.207.243c-.11.12-.258.277-.439.444l-.029.027-.001.001-.011.01h.012q.355-.05.675-.144c1.085-.318 1.85-.97 2.303-1.465.332-.362.497-.64.497-.64s-.029.206-.075.463a10 10 0 0 1-.125.586q.253-.19.475-.385c1.831-1.604 2.127-3.388 2.14-4.325v-.127a4 4 0 0 0-.038-.512l-.001-.007-.001-.006.004.006.005.006c.021.028.075.093.14.174l.124.15.148.18.079.096q.024-.25.034-.489v-.002l.003-.065c.112-3.337-1.814-5.085-2.948-5.821m-8.531-.69.028.092c.055.181.121.38.189.55q.097-.285.22-.516c.536-1 1.419-1.271 1.956-1.34.276-.036.462-.019.462-.019l.036-.379h-.012L10.82 4a3.2 3.2 0 0 0-1.115.191 2.84 2.84 0 0 0-1.37 1.062l-.037-.136-.005-.02-.001-.004V5.09a.38.38 0 0 0-.62-.192l.25.286-.25-.286-.002.001-.002.002-.004.004-.055.053q-.053.051-.131.146a2.7 2.7 0 0 0-.346.545 2.6 2.6 0 0 0-.248 1.31 237 237 0 0 0-2.17-.768l-.07-.023h-.002a.4.4 0 0 0-.09-.023.54.54 0 0 0-.301.038.45.45 0 0 0-.18.148l-.002.002v.001s-.001.002.316.213c0 0 .025-.038.112-.025q.007 0 .032.01h.002q.064.02.228.077l.492.173a228 228 0 0 1 2.134.765 3 3 0 0 1-.103-.443c-.1-.7.132-1.234.344-1.559.153-.235.296-.36.296-.36s.049.189.12.432"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M9.26 7.11s-.225-1.612.9-2.287l-.023.009c-.23.086-1.903.715-.877 2.278m2.425-1.475c.862-.325 2.063-.5 3.925-.15a5.9 5.9 0 0 0-2.55-.637 5 5 0 0 0-.9.075 2.61 2.61 0 0 0-2.05 1.812s.2-.312.675-.637l.02-.027c.175-.238.44-.597.693-.898.075.162.162.362.187.462M16.01 7.71c1.762 1.163 2.563 2.45 3.125 3.963-.025-1.6-.562-2.975-1.6-4.075l-.025-.025a4.13 4.13 0 0 0-3.575-1.225c-.5.062-1 .162-1.388.287a1 1 0 0 0-.187.05h.025c.1-.012 1.925-.1 3.625 1.025m1.625 7.95c-.187.25-.4.513-.65.763 1.613-3.1.075-5.938.012-6.05.113.112.226.237.326.35 1.237 1.375 1.387 3.437.312 4.937M7.769 6.047c-.047.181-.468 1.79.953 1.838-.85-.512-.95-1.837-.95-1.85v.003l-.001.003zm2.479 3.35-.65 1.113s.6-.275.837-.625c.188-.3-.187-.487-.187-.487m-.434 5.156q.122-.113.233-.205c.129-.106.257-.178.369-.24.205-.115.357-.2.357-.41.007-.426-.278-.509-.49-.511l.01-.003c-.116.026-.208.064-.208.064s.362-.063.5.2c.137.262.025.412-.2.562-.112.075-.355.312-.571.543m1.184-3.855c-.058.05-.252.544-.43 1.029-.212.113-.969.515-1.033.558-.075.05-.338.575-.538 1.125-.105-.328-.332-.535-.37-.57l-.005-.005.012.05c.052.222.254 1.083.176 1.363-.088.325-.638.612-.638.612l.827.184c-.163.146-.281.191-.377.191a4 4 0 0 1-.637-.162c-.125-.163-.313-.7-.363-.925.027-.09.113-.251.186-.39l.077-.148.02-.04c.138-.262.219-.417.242-.56.05-.212.213-1.525.275-2.075.163.213.388.563.338.788.362-.513.1-1.013-.025-1.213-.113-.2-.263-.6-.138-1.025s.575-1.6.575-1.6.15.263.363.213c.212-.05 1.925-2.625 1.925-2.625s.462 1.012-.025 1.75c-.5.737-.988.875-.988.875s.05.009.134.013a2.8 2.8 0 0 0 1.331-.02c.206.494.375.935.385 1.007l-.054.129c-.14.332-.492 1.171-.533 1.233-.025.025-.2.075-.325.1-.213.063-.338.1-.387.138m.337-4.475s.112.5-.175.837c-.363.413-.675.4-.662.4zm-2.888 7.1-.1.5s.2-.025.2.2c0 .175-.2.412-.362.425-.163.012-.225-.188-.188-.3.038-.1.45-.825.45-.825m1.913-4.175c.438.087.563.6.325.875-.238.262-.838.637-1.188.725-.075.287-.712.162-.475-.75 0 0 .113.437.225.4.113-.038 1.388-2.038 1.388-2.038s-.162.525-.275.788M9.916 13.8c-.006.121-.018.319-.106.447l.07-.074c.066-.07.16-.17.217-.226a1 1 0 0 1 .125-.09c.093-.058.176-.11.176-.223 0-.175-.238-.212-.338-.187s-.125.187-.138.275zm5.807.484c-.276.988-.9 1.863-1.713 2.488q.153-.073.3-.156a4.8 4.8 0 0 0 1.5-2.32c.01-.028.08-.072.145-.114l.055-.035.011-.007.008-.005.013-.007.01-.007c.11-.064.21-.123.233-.212.05-.287.075-.587.075-.887 0-.113-.113-.225-.225-.338-.088-.075-.175-.162-.175-.225a4.8 4.8 0 0 0-1.116-2.589l.016.09a4.9 4.9 0 0 1 1.025 2.487c0 .047.056.107.11.166l.053.059c.112.112.225.225.225.337 0 .3-.026.6-.075.888-.026.1-.15.175-.276.237q-.025.018-.054.036c-.066.041-.136.085-.146.114m-2.138-6.3c.15.063 2.75 1.363 3.2 3.913a4.1 4.1 0 0 1-.047 1.623 5.123 5.123 0 0 0-3.522-6.28c-.286.342-.6.566-.911.709.212.53.467 1.178.467 1.223 0 .075-.237.687-.262.712a3 3 0 0 1-.425.038c-.125.3-.25.587-.275.625-.037.05-.15.087-.388.15l-.082.024c-.112.033-.235.069-.255.088-.062.075-.4.963-.625 1.588q.052-.009.1-.013l.575-1.412s.588-.288 1.025-.288c.787-.012 1.95-.975 1.425-2.7m-5.213.688c.088-.163.013-.275-.062-.338l-.025-.025c-.15-.075-1.088-.425-2.013-.75a30 30 0 0 0 1.863 1.138c.112.05.187.062.237-.025"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <g fill="currentColor" opacity=".75">
            <path d="M10.985 14.098c-.039.048-.174.17-.302.287l-.11.1-.16.143c-.099.089-.197.176-.278.257q-.075.075-.3.075H9.46c.075-.1.208-.252.353-.407.08-.074.161-.145.234-.205a2.3 2.3 0 0 1 .369-.24c.205-.115.356-.2.356-.41.008-.426-.278-.509-.49-.512a1 1 0 0 1 .203-.026c-.238-.062-.538 0-.675.138-.1.091-.122.339-.145.586a3 3 0 0 1-.043.351c-.056.291-.232.452-.502.698v.001l-.098.089-.023.021-.827-.184s.55-.287.638-.612c.078-.28-.124-1.142-.176-1.363l-.012-.05.005.005c.038.034.265.242.37.57.2-.55.463-1.075.538-1.125.064-.043.82-.446 1.033-.558-.093.251-.182.5-.246.683-.225.063-.45.188-.612.438.087-.063.362-.1.562-.125.175-.013.713.275.85.812v.025a.8.8 0 0 1-.137.538" />
            <path d="M10.56 12.385c.257-.024.47.028.525.05.487-.925.875-1.425.975-1.425h.066c.278.01 1.27.045 1.684-.95.443-1.083-.18-2.01-.224-2.072l-.001-.003c.525 1.725-.638 2.688-1.425 2.7-.438 0-1.025.288-1.025.288z" />
            <path d="m13.585 7.985.002.001c.054.026.988.48 1.257 1.885a4.8 4.8 0 0 1 1.116 2.59c0 .062.087.15.175.224.112.113.225.225.225.338 0 .3-.025.6-.075.887-.022.089-.123.148-.232.212l-.01.007-.014.007-.02.012-.054.035c-.066.042-.136.086-.145.115a4.8 4.8 0 0 1-1.5 2.318 5.13 5.13 0 0 0 2.428-3.096 4.1 4.1 0 0 0 .047-1.622c-.45-2.55-3.05-3.85-3.2-3.913m-3.005.126a1.9 1.9 0 0 0 1.192-.35q.072.166.14.33a2.8 2.8 0 0 1-1.331.02m1.724-.161c.31-.143.625-.367.911-.71a5 5 0 0 0-.856-.167 3 3 0 0 1-.263.362z" />
            <path d="M14.797 11.86a6 6 0 0 0 .1-1.637 4.57 4.57 0 0 1 .875 2.25c.013.1.113.2.213.3.087.075.187.175.187.237q0 .431-.075.863c-.012.035-.113.093-.198.142l-.014.008c-.125.062-.238.125-.263.225a4.65 4.65 0 0 1-1.65 2.412c1.163-1.212 1.725-3.212.825-4.8" />
          </g>
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="m7.2 12.981.42-3.171-3.639-2.537L7.307 8.4l.784-1.209 2.868-1.787 6.321 3.497.326 5.34-2.812 3.935-2.228.343 1.157-2.118v-2.044l-.84-1.594-.853-.566-1.307 1.359v1.431l-1.02.96-1.299.159-.574.33-.943-.3-.39-1.423.703-.999z"
          />
          <path
            fill="#94A6C3"
            d="M13.011 7.243c-.694-.142-1.452-.103-1.452-.103s-.249 1.157-1.792 1.457c.013 0 2.04.699 3.244-1.354m.63 10.5A5.06 5.06 0 0 0 15.4 15.15c.008-.043.128-.107.205-.159.129-.077.262-.145.287-.248a5.6 5.6 0 0 0 .078-.934c0-.12-.116-.236-.232-.356-.094-.077-.184-.172-.184-.236a5 5 0 0 0-1.56-3.129l-.09.086a4.9 4.9 0 0 1 1.517 3.056c.013.103.12.21.223.317.094.077.197.197.197.249q0 .451-.077.908c-.013.052-.129.103-.223.154-.129.07-.249.133-.274.24a4.86 4.86 0 0 1-1.993 2.722c.171-.369.707-1.564.994-2.169l-.051-1.95-1.663-1.615-.943.128-1.029 1.685s.48.621-.197 1.341c-.668.711-1.191.87-1.191.87l-.484-.261c.141-.185.428-.463.651-.643.381-.317.758-.343.758-.686.013-.711-.745-.514-.745-.514l-.274.261-.116.973-.579.729-.064-.018-.943-.21s.579-.3.669-.643c.09-.33-.185-1.422-.197-1.487.012.013.274.236.394.605a5 5 0 0 1 .561-1.183c.077-.052 1.14-.617 1.14-.617l-.355.93.261-.142.63-1.551s.617-.305 1.071-.305c.828-.012 2.045-1.028 1.496-2.84.154.063 2.876 1.435 3.347 4.113.356 2.07-.81 4.003-2.773 5.122"
          />
          <path
            fill="#1B314F"
            d="M10.526 7.534c.3-.355.184-.883.184-.883l-.879 1.303c-.012 0 .318.013.695-.42M7.58 14.65l.103-.523s-.428.763-.471.865c-.039.12.03.33.197.318.171-.013.381-.266.381-.45 0-.236-.21-.21-.21-.21"
          />
          <path
            fill="#1B314F"
            d="M15.356 6.283s.655.026 1.333.107c-1.53-1.209-2.983-1.564-4.158-1.564-1.628 0-2.725.668-2.79.707l.51-.814s-2.04-.198-2.76 1.971q-.208-.555-.355-1.127s-1.059.93-.562 2.486a144 144 0 0 0-3.025-1.08c-.086-.013-.116.025-.116.025s-.026.043.051.107c.146.116 2.893 2.156 3.497 2.55-.132.472-.132.699 0 .922.18.3.193.458.172.685-.03.223-.266 2.156-.317 2.392-.052.236-.6 1.08-.575 1.329s.365 1.315.665 1.435c.223.077.771.249 1.14.249.128 0 .248-.026.3-.077.223-.202.287-.24.445-.24h.043c.06 0 .142.012.232.012.214 0 .484-.038.681-.222.287-.287.784-.686.943-.866.197-.253.3-.596.248-.934-.042-.318.13-.592.326-.87l.707-.922a3.6 3.6 0 0 1 1.466 2.884c0 2.058-1.779 3.712-3.977 3.712-.343 0-.669-.043-.994-.12 1.007.356 1.855.471 2.55.471 1.478 0 2.267-.535 2.267-.535s-.279.355-.72.762h.013c2.443-.342 3.638-2.365 3.638-2.365s-.094.656-.214 1.101c3.261-2.46 2.713-5.537 2.7-5.64.026.039.351.429.523.643.523-5.417-3.887-7.17-3.887-7.17zM10.34 14.94c-.051.064-.274.261-.428.407-.159.146-.33.292-.459.42q-.08.083-.317.082h-.39c.197-.266.772-.87.969-1.003.235-.155.351-.313.21-.592-.146-.274-.527-.21-.527-.21s.222-.09.42-.09c-.249-.068-.562 0-.708.142-.154.145-.128.66-.197.985-.064.343-.287.515-.625.832-.185.171-.313.223-.42.223a4 4 0 0 1-.669-.172c-.129-.171-.326-.737-.377-.973.043-.128.197-.407.274-.565.159-.3.249-.472.274-.63.052-.223.223-1.607.288-2.186.171.227.407.591.355.831.377-.54.103-1.067-.025-1.277a1.45 1.45 0 0 1-.146-1.08c.128-.445.6-1.684.6-1.684s.158.279.386.227c.218-.056 2.014-2.764 2.014-2.764s.48 1.067-.03 1.843c-.523.771-1.033.921-1.033.921s.72.129 1.389-.356c.274.643.535 1.316.548 1.406-.043.094-.561 1.354-.617 1.436-.026.026-.206.077-.339.103-.222.068-.351.107-.407.145-.09.077-.51 1.239-.703 1.8a1.1 1.1 0 0 0-.642.463c.09-.064.377-.107.587-.128.184-.018.745.287.891.852v.026a.85.85 0 0 1-.146.566m-1.23.159c.12-.172.108-.463.12-.558.013-.085.039-.257.142-.287.107-.025.356.013.356.197 0 .172-.185.215-.313.33l-.3.317zm5.225-2.516a6.4 6.4 0 0 0 .102-1.723 4.8 4.8 0 0 1 .918 2.37c.012.103.115.21.223.317.09.077.197.184.197.249q.001.451-.082.908c-.013.039-.128.103-.223.154-.128.07-.248.133-.274.24a4.9 4.9 0 0 1-1.727 2.538c1.217-1.277 1.808-3.382.866-5.053m-.828 5.173a5.06 5.06 0 0 0 1.796-2.619c.013-.043.129-.107.21-.159.129-.064.257-.145.287-.248q.078-.464.078-.934c0-.12-.116-.236-.236-.356-.065-.077-.172-.171-.172-.236a5.15 5.15 0 0 0-1.071-2.618c-.261-1.577-1.307-2.066-1.333-2.079.026.043.703 1.029.236 2.186-.485 1.17-1.732.986-1.835.998-.102 0-.514.527-1.02 1.5a1.45 1.45 0 0 0-.655-.043q.287-.85.656-1.67c.025-.022.222-.078.351-.117.248-.064.368-.107.407-.158.026-.039.159-.343.287-.656.12 0 .42-.026.446-.043.026-.025.274-.668.274-.745 0-.069-.51-1.342-.707-1.83q.14-.162.274-.382a5.387 5.387 0 1 1 1.727 10.209"
          />
          <path
            fill="#1B314F"
            d="M10.029 10.65c.248-.287.12-.827-.343-.921.12-.275.291-.828.291-.828S8.64 11.006 8.52 11.044c-.116.043-.231-.42-.231-.42-.249.96.42 1.093.497.789.466-.158.89-.419 1.242-.763"
          />
          <path
            fill="#FFD923"
            d="m8.889 11.164.685-1.17s.386.197.193.515a2.6 2.6 0 0 1-.878.655"
          />
          <path
            fill="#D82122"
            d="M17.306 16.586c-.198.257-.42.535-.682.801 1.689-3.261.077-6.248.013-6.369.12.12.236.253.343.37a4.18 4.18 0 0 1 .326 5.198m1.568-4.2a7.9 7.9 0 0 0-3.27-4.166 6.64 6.64 0 0 0-3.797-1.08h-.026a.8.8 0 0 1 .197-.051c.408-.133.93-.24 1.453-.305a4.3 4.3 0 0 1 3.742 1.286l.03.03a6.22 6.22 0 0 1 1.671 4.286m-3.69-6.51c-1.95-.369-3.205-.185-4.11.158a4 4 0 0 0-.193-.488c-.278.33-.565.728-.75.977-.497.343-.702.668-.702.668a2.73 2.73 0 0 1 2.142-1.907c.292-.051.6-.077.943-.077a6.1 6.1 0 0 1 2.67.669M7.971 8.4c-1.53-.051-1.02-1.843-.99-1.946 0 .013.103 1.41.995 1.946zM9.48 5.181c-1.179.708-.943 2.405-.943 2.405-1.127-1.723.849-2.366.943-2.405"
          />
          <path
            fill="#fff"
            d="M7.543 8.876c.077.064.154.184.064.355-.051.09-.128.078-.248.026a31 31 0 0 1-1.95-1.2q1.065.368 2.108.793z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

Icon1INCH.displayName = '1INCH'
