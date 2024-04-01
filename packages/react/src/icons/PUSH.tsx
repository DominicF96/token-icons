import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconPUSH = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.909 16.286c-.16-.017-.48-.163-.48-.617 0-.459.377-.66.565-.669.926 0 1.127-.686 1.149-1.067v-3.369c0-2.185 1.868-3.205 2.768-3.441 0-.844.678-1.097 1.063-1.123h.052c.385.026 1.063.279 1.063 1.123.9.236 2.768 1.256 2.768 3.441v3.369c.022.386.223 1.067 1.149 1.067a.66.66 0 0 1 .565.669c0 .454-.321.6-.48.617zm5.09 2.143c-1.066 0-1.928-.772-1.928-1.715h3.858c0 .943-.862 1.715-1.93 1.715"
          />
          <path
            fill="currentColor"
            d="M6.909 16.286H17.09c.159-.017.48-.163.48-.617a.654.654 0 0 0-.565-.669c-.926 0-1.127-.686-1.149-1.067v-3.369c0-2.185-1.868-3.205-2.768-3.441 0-.844-.678-1.097-1.063-1.123h-.052c-.386.026-1.063.279-1.063 1.123-.9.236-2.768 1.256-2.768 3.441v3.369a1.25 1.25 0 0 1-1.286 1.144c-.189.009-.429.133-.429.592 0 .454.322.6.48.617m2.17-10.072a.107.107 0 0 1-.073.138c-1.757.527-2.048 2.014-1.975 2.69a.108.108 0 0 1-.215.022 2.8 2.8 0 0 1 2.13-2.918.105.105 0 0 1 .133.073z"
          />
          <path
            fill="currentColor"
            d="M8.979 5.113a.107.107 0 0 1-.073.129c-2.482.75-2.889 2.85-2.786 3.8a.108.108 0 1 1-.214.022c-.107-1.015.33-3.24 2.94-4.024a.11.11 0 0 1 .133.073m5.944 1.101a.11.11 0 0 0 .073.138c1.757.527 2.048 2.014 1.975 2.69a.107.107 0 1 0 .215.022 2.8 2.8 0 0 0-2.13-2.918.107.107 0 0 0-.133.073z"
          />
          <path
            fill="currentColor"
            d="M15.021 5.113a.1.1 0 0 0 .073.129c2.482.75 2.889 2.85 2.786 3.8a.107.107 0 0 0 .214.022c.107-1.015-.33-3.24-2.94-4.024a.107.107 0 0 0-.133.073"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#PUSH__a)"
            d="M6.909 16.286c-.159-.017-.48-.163-.48-.617 0-.459.377-.66.566-.669.925 0 1.127-.686 1.148-1.067v-3.369c0-2.185 1.869-3.205 2.769-3.441 0-.844.677-1.097 1.063-1.123h.051c.386.026 1.063.279 1.063 1.123.9.236 2.769 1.256 2.769 3.441v3.369c.021.386.222 1.067 1.148 1.067a.66.66 0 0 1 .566.669c0 .454-.322.6-.48.617zM12 18.429c-1.067 0-1.928-.772-1.928-1.715h3.857c0 .943-.861 1.715-1.929 1.715"
          />
          <path
            fill="url(#PUSH__b)"
            d="M6.909 16.286h10.183c.158-.017.48-.163.48-.617a.654.654 0 0 0-.566-.669c-.926 0-1.127-.686-1.148-1.067v-3.369c0-2.185-1.869-3.205-2.769-3.441 0-.844-.677-1.097-1.063-1.123h-.051c-.386.026-1.063.279-1.063 1.123-.9.236-2.769 1.256-2.769 3.441v3.369a1.25 1.25 0 0 1-1.285 1.144c-.189.009-.429.133-.429.592 0 .454.321.6.48.617"
          />
          <path
            fill="url(#PUSH__c)"
            d="M9.078 6.214a.107.107 0 0 1-.073.138c-1.757.527-2.049 2.014-1.976 2.69a.108.108 0 0 1-.214.022 2.8 2.8 0 0 1 2.13-2.918.105.105 0 0 1 .133.073z"
          />
          <path
            fill="url(#PUSH__d)"
            d="M8.979 5.113a.107.107 0 0 1-.073.129c-2.481.75-2.888 2.85-2.786 3.8a.107.107 0 1 1-.214.022c-.107-1.015.33-3.24 2.94-4.024a.11.11 0 0 1 .133.073"
          />
          <path
            fill="url(#PUSH__e)"
            d="M14.923 6.214a.11.11 0 0 0 .073.138c1.757.527 2.049 2.014 1.976 2.69a.108.108 0 0 0 .214.022 2.8 2.8 0 0 0-2.13-2.918.107.107 0 0 0-.133.073z"
          />
          <path
            fill="url(#PUSH__f)"
            d="M15.022 5.113a.1.1 0 0 0 .073.129c2.481.75 2.888 2.85 2.785 3.8a.107.107 0 0 0 .215.022c.107-1.015-.33-3.24-2.94-4.024a.107.107 0 0 0-.133.073"
          />
          <defs>
            <linearGradient
              id="PUSH__a"
              x1="6.366"
              x2="14.81"
              y1="15.492"
              y2="15.492"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E20882" />
              <stop offset="1" stopColor="#664DA0" />
            </linearGradient>
            <linearGradient
              id="PUSH__b"
              x1="12"
              x2="12"
              y1="9.059"
              y2="18.429"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#34C5F2" />
              <stop offset=".82" stopColor="#34C5F2" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="PUSH__c"
              x1="11.982"
              x2="11.982"
              y1="5.513"
              y2="17.942"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5FB5CE" />
              <stop offset="1" stopColor="#51A5D8" />
            </linearGradient>
            <linearGradient
              id="PUSH__d"
              x1="12.014"
              x2="12.014"
              y1="5.384"
              y2="18.072"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5FB5CE" />
              <stop offset="1" stopColor="#51A5D8" />
            </linearGradient>
            <linearGradient
              id="PUSH__e"
              x1="12.017"
              x2="12.017"
              y1="5.511"
              y2="17.942"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5FB5CE" />
              <stop offset="1" stopColor="#51A5D8" />
            </linearGradient>
            <linearGradient
              id="PUSH__f"
              x1="16.56"
              x2="16.56"
              y1="5.143"
              y2="9.051"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5FB5CE" />
              <stop offset="1" stopColor="#51A5D8" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconPUSH.displayName = 'PUSH'
