import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconZAT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.002 4.714v2.67c-.005.545-1.792.922-2.14.866-.47-.077-.916-.291-1.362-.471a.8.8 0 0 0-.197-.065c-.27-.064-.266-.428-.266-.66v-2.34zm-4.381.262c.043-.005.06.034.043.115a.4.4 0 0 0-.017.116V7.56c-.043.069-.077.129-.128.189q-.733.795-1.47 1.585a.02.02 0 0 1-.022-.004l-.004-.013a11 11 0 0 1-.034-.647q-.001-.237-.086-.459a.82.82 0 0 0-.356-.398l-.557-.326a.1.1 0 0 1-.043-.043v-.021h.004l.013-.004zm4.78.008c.042.022.085.043.11.077L17.08 7.42q.037.036-.009.06c-.283.15-.759.377-.887.711-.09.232-.129.472-.12.729.009.128-.013.24-.034.355a.1.1 0 0 1-.043-.025 37 37 0 0 0-.797-.815 7.4 7.4 0 0 1-.815-.955l.022-.236q.008-.275.008-.549a57 57 0 0 0-.008-1.714zm-6.858 8.988a.13.13 0 0 1-.022.064.1.1 0 0 1-.05.038l-.575.172-.013-.022c-.004-.004-.026-.013-.026-.021V7.984c.004-.017 0-.03 0-.03h.013l.017-.004c.21.086.373.197.484.343.138.167.172.36.172.579zm9.574-5.988a.06.06 0 0 1 .026.052v6.146c0 .047-.026.068-.069.06a.9.9 0 0 1-.385-.142c-.189-.128-.219-.411-.215-.639V9.514q-.004-.451.005-.857a.4.4 0 0 1 .043-.171l.085-.163c.103-.171.27-.232.433-.309l.077-.025zm-5.828.57c.008.013.025.018.043.013a.05.05 0 0 1 .042 0 .1.1 0 0 1 .052.065q-1.134.012-2.255 0-.014 0-.02-.018l.466-.484a.11.11 0 0 1 .112-.03zm3.595.082h-1.958c-.009-.013-.005-.026.004-.043l1.402-.497a.07.07 0 0 1 .072.021l.48.515z"
          />
          <path
            fill="currentColor"
            d="M6.429 12.429v.008a.01.01 0 0 1-.009.005h-.009a1.2 1.2 0 0 1-.698-.463 1.7 1.7 0 0 1-.154-.377 14 14 0 0 0-.296-1.016c-.24-.729-.099-1.449.214-2.135a.15.15 0 0 1 .103-.08c.257-.065.544-.052.814-.078.017 0 .035.009.035.03v4.11zm12.347-1.663-.064.24c-.155.57-.528 1.191-1.123 1.448a.01.01 0 0 1-.013 0l-.004-.006V9.064c.017-.188-.03-.411.085-.531.236-.249.575-.201.892-.176.012 0 .025.009.03.022.287.78.351 1.572.197 2.387M9.15 8.614c0 .013.013.018.021.018q1.12.012 2.255 0 .538.062 1.088.042.052-.002.206-.03a.7.7 0 0 1 .206-.008h1.958q-.02-.001.018-.022l.66.725-.335-.343a.07.07 0 0 0-.051-.017H8.833c-.013 0-.017 0-.017-.018z"
          />
          <path
            fill="currentColor"
            d="M8.833 8.979h6.343c.021 0 .038.004.051.021l.335.339q.001.018.02.038l-.016.013H8.499c-.013 0-.03-.004-.056-.021a.1.1 0 0 0 .026-.026z"
          />
          <path
            fill="currentColor"
            d="M8.503 9.369c.026.017.043.025.06.025h6.93l.021-.004.018-.013c.012 0 .02 0 .03.009l.274.3c.021.021.025.043.013.056h-7.68c-.009 0-.009 0-.009-.01z"
          />
          <path
            fill="currentColor"
            d="M15.857 9.742v.385H8.143v-.386zm-7.714.385h7.714v.356H8.143zm0 .356h7.714v.45H8.143zm0 .45h7.714v.351H8.143zm0 .351h3l-.06.086-.283.326a.2.2 0 0 1-.146.068H8.143zm4.706 0h3.008v.472h-2.391c-.043 0-.082 0-.124-.009a.07.07 0 0 1-.04-.021l-.312-.356a.1.1 0 0 1-.043-.017.3.3 0 0 1-.038-.043.1.1 0 0 0-.06-.026m3.261 1.436c.021.386.017.759-.017 1.136-.034.398.171.643.54.685.15.018.3.082.463.19q.012.01 0 .02l-1.487 1.826q-.028.027-.022-.008c.06-.446-.02-.9-.227-1.299a9 9 0 0 0-.424-.707c-.236-.373-.167-.793.051-1.157q.097-.154.386-.399.37-.302.729-.617l.004.004v.326zm-8.597 1.804c.3-.128.454-.372.458-.72 0-.214-.008-.445-.034-.698-.016-.187 0-.376.047-.557a.02.02 0 0 1 .017 0q.393.194.742.458c.398.305.608.725.463 1.235-.12.428-.377.77-.609 1.13a1.1 1.1 0 0 0-.158.562q-.01.244-.099.472a.02.02 0 0 1-.03 0l-1.414-1.723c-.017-.026-.013-.034.017-.034q.31 0 .6-.129zm6.63-1.212v1.22l.394 1.18a.22.22 0 0 1 .034.137v1.294H9.43V15.92c0-.077.025-.17.068-.24l.343-1.19c.021-.035.017-.078.017-.117v-.913c0-.038.03-.077.052-.107l.685-.874a.08.08 0 0 1 .06-.039c.065 0 .12-.012.18-.012h2.619c.008 0 .013.012.017.012l.009.013z"
          />
          <path
            fill="currentColor"
            d="m11.614 14.13-.548-.287v-.004l-.005-.009-.004-.527v-.009q0-.004.004-.009a.01.01 0 0 1 .01-.004l.008.004a.01.01 0 0 1 .004.01l.553.814a.014.014 0 0 1 .008.017.014.014 0 0 1-.017.008h-.008zm1.402-.836-.005.536v.009h-.008l-.557.291h-.009l-.006-.005-.002-.008v-.008l.557-.823h.008a.013.013 0 0 1 .018 0v.008zm1.483 4.32c-.159.399-.3.789-.472 1.179-.047.111-.128.227-.244.257-1.157.287-2.37.351-3.476-.03-.24-.086-.364-.343-.458-.583a25 25 0 0 0-.352-.835q-.012-.029.013-.03h4.98l.009.012a.03.03 0 0 1 0 .03"
          />
        </>
      ) : (
        <>
          <path
            fill="#B9FF01"
            d="M14.001 4.714v2.67c-.004.545-1.791.922-2.139.866-.471-.077-.917-.291-1.362-.471a.8.8 0 0 0-.198-.065c-.27-.064-.265-.428-.265-.66v-2.34z"
          />
          <path
            fill="#000"
            d="M9.621 4.976c.043-.005.06.034.043.115a.4.4 0 0 0-.017.116V7.56c-.043.069-.077.129-.129.189q-.732.795-1.47 1.585a.02.02 0 0 1-.021-.004l-.005-.013a11 11 0 0 1-.034-.647q-.001-.237-.086-.459a.82.82 0 0 0-.355-.398l-.557-.326a.1.1 0 0 1-.043-.043v-.021h.004l.013-.004zm4.779.008c.042.022.085.043.111.077l2.567 2.358q.038.036-.008.06c-.283.15-.759.377-.888.711-.09.232-.128.472-.12.729.009.128-.012.24-.034.355a.1.1 0 0 1-.043-.025 37 37 0 0 0-.797-.815 7.4 7.4 0 0 1-.814-.955l.021-.236q.008-.275.009-.549a57 57 0 0 0-.009-1.714zm-6.858 8.988a.13.13 0 0 1-.021.064.1.1 0 0 1-.051.038l-.575.172-.013-.022c-.004-.004-.025-.013-.025-.021V7.984c.004-.017 0-.03 0-.03h.013l.017-.004c.21.086.373.197.484.343.137.167.171.36.171.579zm9.575-5.988a.06.06 0 0 1 .025.052v6.146q-.002.071-.068.06a.9.9 0 0 1-.386-.142c-.188-.128-.218-.411-.214-.639V9.514q-.004-.451.004-.857a.4.4 0 0 1 .043-.171l.086-.163c.103-.171.27-.232.433-.309l.077-.025zm-5.829.57q.016.02.043.013a.05.05 0 0 1 .043 0 .1.1 0 0 1 .051.065q-1.133.012-2.254 0-.014 0-.021-.018l.467-.484a.11.11 0 0 1 .111-.03zm3.596.082h-1.959q-.01-.018.005-.043l1.401-.497a.07.07 0 0 1 .073.021l.48.515z"
          />
          <path
            fill="#B9FF01"
            d="M6.428 12.429v.008l-.008.005h-.01a1.2 1.2 0 0 1-.699-.463 1.7 1.7 0 0 1-.154-.377 14 14 0 0 0-.296-1.016c-.24-.729-.098-1.449.215-2.135a.15.15 0 0 1 .103-.08c.257-.065.544-.052.814-.078.017 0 .034.009.034.03v4.11zm12.347-1.663-.064.24c-.154.57-.527 1.191-1.123 1.448a.01.01 0 0 1-.013 0l-.004-.006V9.064c.017-.188-.03-.411.086-.531.235-.249.574-.201.891-.176.013 0 .026.009.03.022.287.78.352 1.572.197 2.387M9.15 8.614c0 .013.012.018.021.018q1.121.012 2.254 0c.36.042.72.055 1.089.042q.051-.002.206-.03a.7.7 0 0 1 .205-.008h1.959q-.02-.001.017-.022l.66.725-.334-.343a.07.07 0 0 0-.052-.017H8.832c-.012 0-.017 0-.017-.018z"
          />
          <path
            fill="#000"
            d="M8.832 8.979h6.343c.022 0 .039.004.052.021l.334.339q.002.018.021.038l-.017.013H8.498c-.013 0-.03-.004-.056-.021a.1.1 0 0 0 .026-.026z"
          />
          <path
            fill="#B9FF01"
            d="M8.502 9.369c.026.017.043.025.06.025h6.93l.022-.004.017-.013c.013 0 .021 0 .03.009l.274.3c.022.021.026.043.013.056h-7.68c-.008 0-.008 0-.008-.01z"
          />
          <path fill="#000" d="M15.857 9.742v.385H8.142v-.386z" />
          <path fill="#B9FF01" d="M8.142 10.127h7.715v.356H8.142z" />
          <path fill="#000" d="M8.142 10.483h7.715v.45H8.142z" />
          <path fill="#B9FF01" d="M8.142 10.933h7.715v.351H8.142z" />
          <path
            fill="#000"
            d="M8.142 11.284h3l-.06.086-.282.326a.2.2 0 0 1-.146.068H8.142zm4.706 0h3.009v.472h-2.392c-.043 0-.081 0-.124-.009a.07.07 0 0 1-.039-.021l-.312-.356a.1.1 0 0 1-.043-.017.3.3 0 0 1-.039-.043.1.1 0 0 0-.06-.026"
          />
          <path
            fill="#B9FF01"
            d="M16.11 12.72c.021.386.017.759-.018 1.136-.034.398.172.643.54.685.15.018.3.082.463.19q.014.01 0 .02l-1.487 1.826q-.027.027-.021-.008c.059-.446-.02-.9-.227-1.299a9 9 0 0 0-.425-.707c-.235-.373-.167-.793.052-1.157q.097-.154.385-.399.37-.302.729-.617l.004.004v.326zm-8.598 1.804c.3-.128.455-.372.459-.72q.002-.32-.034-.698c-.016-.187 0-.376.047-.557a.02.02 0 0 1 .017 0q.393.194.741.458c.399.305.609.725.463 1.235-.12.428-.377.77-.608 1.13a1.1 1.1 0 0 0-.159.562q-.01.244-.098.472a.02.02 0 0 1-.03 0l-1.415-1.723c-.017-.026-.013-.034.017-.034q.31 0 .6-.129z"
          />
          <path
            fill="#000"
            d="M14.142 13.312v1.22l.395 1.18a.22.22 0 0 1 .034.137v1.294H9.428V15.92c0-.077.026-.17.069-.24l.343-1.19c.021-.035.017-.078.017-.117v-.913c0-.038.03-.077.051-.107l.686-.874a.08.08 0 0 1 .06-.039c.064 0 .12-.012.18-.012h2.618c.009 0 .013.012.018.012l.008.013z"
          />
          <path
            fill="#B9FF01"
            d="m11.614 14.13-.549-.287v-.004l-.004-.009-.004-.527v-.009l.003-.009a.01.01 0 0 1 .01-.004q.004 0 .009.004a.01.01 0 0 1 .003.01l.553.814a.014.014 0 0 1 .009.017.014.014 0 0 1-.017.008h-.009zm1.401-.836-.004.536v.009h-.009l-.557.291h-.008l-.007-.005-.002-.008v-.008l.557-.823h.009a.013.013 0 0 1 .017 0v.008zm1.483 4.32c-.158.399-.3.789-.471 1.179-.047.111-.129.227-.245.257-1.157.287-2.37.351-3.475-.03-.24-.086-.365-.343-.459-.583a25 25 0 0 0-.351-.835q-.014-.029.013-.03h4.98l.008.012a.03.03 0 0 1 0 .03"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconZAT.displayName = 'ZAT'
