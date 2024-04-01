import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconAERGO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.17 9.879a1.85 1.85 0 0 0-1.474.42 1.83 1.83 0 0 0-.553 1.38v2.464H12v-2.477a.904.904 0 0 1 .703-.922c.197-.051.386-.021.583-.004v-.844zm6.973-.022a2.04 2.04 0 0 0-1.492.604 2.25 2.25 0 0 0-.65 1.539c.024.572.26 1.114.663 1.521a2.1 2.1 0 0 0 1.479.622c.553 0 1.08-.223 1.479-.622.402-.407.639-.949.664-1.521a2.25 2.25 0 0 0-.652-1.539 2.04 2.04 0 0 0-1.491-.6zm0 3.429a1.285 1.285 0 1 1 0-2.572c.69 0 1.268.497 1.286 1.286.017.789-.587 1.286-1.286 1.286m-10.714-.287a1.2 1.2 0 0 1-.857.287c-.348 0-.665-.219-.858-.429l3-1.183v-.013a2.25 2.25 0 0 0-.75-1.307 2.07 2.07 0 0 0-1.38-.497 2.06 2.06 0 0 0-1.5.604A2.25 2.25 0 0 0 6.43 12a2.25 2.25 0 0 0 .655 1.539 2.15 2.15 0 0 0 2.979.021zm-2.143-.883c0-.806.591-1.415 1.286-1.402.355 0 .814.215 1.05.493zc0 .034 0-.03 0 0M6 12a2.25 2.25 0 0 0-.651-1.534 2.04 2.04 0 0 0-1.492-.609 2.04 2.04 0 0 0-1.491.604c-.406.41-.64.962-.652 1.539.012.577.246 1.128.652 1.539a2.04 2.04 0 0 0 1.491.6l1.247-.009H6zm-.857 1.286H3.857A1.285 1.285 0 0 1 2.571 12c0-.729.558-1.299 1.286-1.286A1.33 1.33 0 0 1 5.143 12zm10.35-2.499c.33.004.647.142.887.386a1.285 1.285 0 0 1-.107 1.834l.63.66c.365-.331.613-.772.707-1.256a2.157 2.157 0 0 0-2.73-2.464c-.364.103-.699.3-.969.574l.66.699c.112-.141.258-.257.416-.33a1.14 1.14 0 0 1 .506-.103m1.41 2.884-.63-.664a2 2 0 0 1-.257.202 7 7 0 0 1-1.059.492l-.861.348-.172.068c-.475.189-1.268.497-1.688 1.08-.25.31-.396.69-.416 1.089h.93c.013-.257.099-.335.24-.553.257-.36.917-.617 1.273-.754l.287-.116.866-.347c.36-.15.715-.326 1.054-.523.154-.09.3-.197.429-.322z"
          />
          <path
            fill="currentColor"
            d="M15.686 15.017a14 14 0 0 0-.27-.501l-.459-.815c-.06-.111-.553-.775-.643-1.461a1.47 1.47 0 0 1 .258-1.02l-.66-.699a2.23 2.23 0 0 0-.536 1.813c.085.892.677 1.646.716 1.715l.458.814.321.583c.172.308.275.48.283.84h.93a2.46 2.46 0 0 0-.394-1.269z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#AERGO__a)"
            d="M13.17 9.879a1.85 1.85 0 0 0-1.475.42 1.83 1.83 0 0 0-.553 1.38v2.464H12v-2.477a.904.904 0 0 1 .702-.922c.198-.051.386-.021.583-.004v-.844z"
          />
          <path
            fill="url(#AERGO__b)"
            d="M20.142 9.857a2.04 2.04 0 0 0-1.491.604A2.25 2.25 0 0 0 18 12c.024.572.261 1.114.664 1.521a2.1 2.1 0 0 0 1.478.622c.553 0 1.08-.223 1.479-.622.403-.407.64-.949.664-1.521a2.25 2.25 0 0 0-.651-1.539 2.04 2.04 0 0 0-1.492-.6zm0 3.429a1.285 1.285 0 1 1 0-2.572c.69 0 1.269.497 1.286 1.286s-.587 1.286-1.286 1.286"
          />
          <path
            fill="url(#AERGO__c)"
            d="M9.428 12.999a1.2 1.2 0 0 1-.857.287c-.347 0-.664-.219-.857-.429l3-1.183v-.013a2.25 2.25 0 0 0-.75-1.307 2.07 2.07 0 0 0-1.38-.497 2.06 2.06 0 0 0-1.5.604A2.25 2.25 0 0 0 6.428 12a2.25 2.25 0 0 0 .656 1.539 2.15 2.15 0 0 0 2.978.021zm-2.143-.883c0-.806.592-1.415 1.286-1.402.356 0 .814.215 1.05.493zc0 .034 0-.03 0 0"
          />
          <path
            fill="url(#AERGO__d)"
            d="M6 12a2.25 2.25 0 0 0-.652-1.534 2.04 2.04 0 0 0-1.491-.609 2.04 2.04 0 0 0-1.492.604A2.25 2.25 0 0 0 1.714 12c.012.577.245 1.128.651 1.539a2.04 2.04 0 0 0 1.492.6l1.247-.009H6zm-.858 1.286H3.857A1.285 1.285 0 0 1 2.57 12c0-.729.557-1.299 1.286-1.286A1.33 1.33 0 0 1 5.142 12z"
          />
          <path
            fill="#FF33B2"
            d="M15.492 10.787c.33.004.648.142.888.386a1.285 1.285 0 0 1-.108 1.834l.63.66c.365-.331.613-.772.708-1.256a2.156 2.156 0 0 0-2.73-2.464c-.365.103-.699.3-.969.574l.66.699c.111-.141.257-.257.416-.33a1.14 1.14 0 0 1 .505-.103"
          />
          <path
            fill="url(#AERGO__e)"
            d="m16.902 13.671-.63-.664a2 2 0 0 1-.257.202 7 7 0 0 1-1.058.492l-.862.348-.171.068c-.476.189-1.269.497-1.689 1.08-.25.31-.396.69-.415 1.089h.93c.012-.257.098-.335.24-.553.257-.36.917-.617 1.272-.754l.288-.116.865-.347c.36-.15.716-.326 1.055-.523.154-.09.3-.197.428-.322z"
          />
          <path
            fill="url(#AERGO__f)"
            d="M15.685 15.017a14 14 0 0 0-.27-.501l-.458-.815c-.06-.111-.553-.775-.643-1.461a1.47 1.47 0 0 1 .257-1.02l-.66-.699a2.23 2.23 0 0 0-.536 1.813c.086.892.677 1.646.716 1.715l.459.814.321.583c.171.308.274.48.283.84h.93a2.46 2.46 0 0 0-.394-1.269z"
          />
          <defs>
            <linearGradient
              id="AERGO__a"
              x1="28.371"
              x2="16.815"
              y1="15.836"
              y2="-3.978"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".25" stopColor="#A9A9A9" />
              <stop offset=".76" stopColor="#595959" />
            </linearGradient>
            <linearGradient
              id="AERGO__b"
              x1="21.956"
              x2="18.558"
              y1="16.344"
              y2="4.919"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D2D2D2" />
              <stop offset=".25" stopColor="#A9A9A9" />
              <stop offset=".76" stopColor="#595959" />
              <stop offset="1" stopColor="#393939" />
            </linearGradient>
            <linearGradient
              id="AERGO__c"
              x1="21.894"
              x2="18.603"
              y1="16.278"
              y2="5.256"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D2D2D2" />
              <stop offset=".25" stopColor="#A9A9A9" />
              <stop offset=".76" stopColor="#595959" />
              <stop offset="1" stopColor="#393939" />
            </linearGradient>
            <linearGradient
              id="AERGO__d"
              x1="23.293"
              x2="19.756"
              y1="16.787"
              y2="4.904"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D2D2D2" />
              <stop offset=".25" stopColor="#A9A9A9" />
              <stop offset=".76" stopColor="#595959" />
              <stop offset="1" stopColor="#393939" />
            </linearGradient>
            <linearGradient
              id="AERGO__e"
              x1="10.924"
              x2="11.12"
              y1="23.387"
              y2="7.807"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".25" stopColor="#A9A9A9" />
              <stop offset=".76" stopColor="#595959" />
              <stop offset="1" stopColor="#393939" />
            </linearGradient>
            <linearGradient
              id="AERGO__f"
              x1="14.717"
              x2="14.717"
              y1="16.311"
              y2="10.851"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D2D2D2" />
              <stop offset=".25" stopColor="#A9A9A9" />
              <stop offset=".76" stopColor="#595959" />
              <stop offset="1" stopColor="#393939" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAERGO.displayName = 'AERGO'
