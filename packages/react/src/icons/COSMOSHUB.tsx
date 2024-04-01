import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconCOSMOSHUB = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.108 4.9c-.069-.064-.104-.065-.11-.065-.005 0-.04.001-.109.064-.07.064-.153.175-.243.346-.18.342-.351.858-.5 1.524-.166.75-.298 1.665-.38 2.69q.602.291 1.232.632.63-.34 1.234-.632a20 20 0 0 0-.382-2.69c-.148-.666-.32-1.182-.5-1.524a1.3 1.3 0 0 0-.242-.346m-.46 5.383a31 31 0 0 0-.91-.464q-.033.495-.052 1.019a35 35 0 0 1 .961-.555m-1.206-.978c.24-2.81.847-4.805 1.556-4.805s1.317 1.994 1.557 4.805c2.556-1.197 4.588-1.67 4.942-1.055.355.614-1.07 2.136-3.385 3.75 2.315 1.614 3.74 3.136 3.385 3.75-.354.614-2.386.142-4.942-1.055-.24 2.81-.847 4.805-1.557 4.805s-1.316-1.994-1.556-4.805c-2.557 1.197-4.588 1.67-4.943 1.055-.355-.614 1.07-2.136 3.386-3.75-2.316-1.614-3.74-3.136-3.386-3.75s2.386-.142 4.943 1.055M9.18 11.797a20 20 0 0 1-2.14-1.675c-.504-.461-.865-.868-1.071-1.195a1.3 1.3 0 0 1-.179-.383c-.02-.09-.004-.121 0-.126.002-.005.02-.035.11-.063s.228-.045.421-.037c.386.015.92.125 1.57.33.733.23 1.593.574 2.522 1.015a31 31 0 0 0-.069 1.382q-.61.376-1.164.752m0 .406a20 20 0 0 0-2.14 1.675c-.504.461-.865.868-1.071 1.195a1.3 1.3 0 0 0-.179.383c-.02.09-.004.121 0 .126.002.005.02.035.11.063a1.3 1.3 0 0 0 .421.037c.386-.015.92-.125 1.57-.33a20 20 0 0 0 2.522-1.015 31 31 0 0 1-.069-1.382q-.61-.376-1.164-.752m1.155.352q-.444-.277-.857-.555.413-.277.857-.555a34 34 0 0 0 0 1.11m.34.209a34 34 0 0 1 0-1.528 34 34 0 0 1 1.323-.764 34 34 0 0 1 1.324.764 34 34 0 0 1 0 1.528 34 34 0 0 1-1.324.764 34 34 0 0 1-1.323-.764m.011.398q.019.524.052 1.019.447-.219.91-.464a35 35 0 0 1-.962-.555m1.312.747q-.63.34-1.233.632c.083 1.025.215 1.94.381 2.69.149.666.32 1.182.5 1.524.09.17.173.282.243.346.068.063.104.064.11.064.005 0 .04-.001.108-.064.07-.064.154-.175.244-.346.18-.342.351-.858.5-1.524.166-.75.297-1.665.38-2.69a31 31 0 0 1-1.233-.632m1.586.428c.93.441 1.788.785 2.52 1.015.652.205 1.186.315 1.572.33.193.008.33-.009.421-.037.089-.028.107-.058.11-.063s.02-.036 0-.126a1.3 1.3 0 0 0-.18-.383c-.205-.327-.567-.734-1.07-1.195a20 20 0 0 0-2.14-1.675q-.555.376-1.164.752a31 31 0 0 1-.07 1.383m1.233-2.54a20 20 0 0 0 2.14-1.675c.503-.461.865-.868 1.07-1.195.104-.163.159-.29.18-.383.02-.09.003-.121 0-.126s-.021-.035-.11-.063a1.3 1.3 0 0 0-.422-.037c-.385.015-.919.125-1.57.33a20 20 0 0 0-2.521 1.014q.048.668.069 1.383.61.376 1.163.752m-1.155-.352q.443.277.856.555-.412.277-.856.555a35 35 0 0 0 0-1.11m-.351-.607q-.018-.524-.053-1.019-.446.219-.909.464a35 35 0 0 1 .962.555m-.053 3.343q-.446-.219-.909-.464a35 35 0 0 0 .962-.555q-.018.524-.053 1.019"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M7.205 9.9a.528.528 0 1 1 0 1.055.528.528 0 0 1 0-1.055m8.382-1.807a.528.528 0 1 1 0 1.055.528.528 0 0 1 0-1.055m-4.651 8.282a.528.528 0 1 1 0 1.055.528.528 0 0 1 0-1.055m1.033-5.272a.893.893 0 1 1 0 1.786.893.893 0 0 1 0-1.786"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#COSMOSHUB__a)"
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
          />
          <path
            fill="url(#COSMOSHUB__b)"
            d="M12.835 17.678c.275-1.201.466-2.883.513-4.784l.421.01c-.046 1.92-.24 3.631-.523 4.868-.141.617-.308 1.127-.495 1.488a1.7 1.7 0 0 1-.317.444.64.64 0 0 1-.434.192c-.194 0-.357-.105-.486-.244a2.1 2.1 0 0 1-.346-.561c-.207-.46-.386-1.11-.533-1.892l.415-.078c.144.769.316 1.381.503 1.797.093.208.186.355.27.447.086.093.145.11.177.11.028 0 .076-.013.145-.078.07-.067.15-.175.231-.332.164-.315.32-.785.459-1.387"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#COSMOSHUB__c)"
            d="M11.297 5.805c-.252.883-.453 2.14-.563 3.617l-.42-.032c.11-1.491.314-2.78.578-3.7.13-.46.28-.839.447-1.108.16-.257.376-.478.661-.478.17 0 .315.08.434.192.118.11.223.264.316.444.188.361.355.871.496 1.488.283 1.237.477 2.948.523 4.868l-.421.01c-.047-1.901-.238-3.583-.513-4.784-.138-.602-.295-1.072-.459-1.387a1.3 1.3 0 0 0-.23-.332c-.07-.065-.118-.077-.146-.077-.05 0-.156.044-.302.278q-.209.335-.4 1.001"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#COSMOSHUB__d)"
            d="M10.734 9.422A35 35 0 0 0 10.642 12c0 1.976.156 3.773.408 5.121l-.415.078c-.257-1.38-.415-3.203-.415-5.199 0-.915.033-1.794.094-2.61z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#COSMOSHUB__e)"
            d="M10.538 12.717c-1.369-.836-2.551-1.683-3.43-2.432l-.273.321c.899.767 2.1 1.627 3.483 2.47z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#COSMOSHUB__f)"
            d="M16.491 15.562c-1.178-.362-2.73-1.037-4.399-1.948l-.202.37c1.686.92 3.264 1.608 4.477 1.981.605.186 1.13.297 1.536.315.203.008.388-.005.543-.052a.64.64 0 0 0 .383-.28c.143-.247.059-.547-.085-.814-.151-.281-.407-.602-.742-.947-.671-.693-1.694-1.518-2.939-2.364l-.237.349c1.232.837 2.23 1.644 2.873 2.308.323.334.549.622.673.853.132.246.117.361.092.404-.014.024-.048.06-.14.087a1.3 1.3 0 0 1-.403.034c-.354-.015-.84-.115-1.43-.296"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#COSMOSHUB__g)"
            d="M12.67 10.824c.772.445 1.497.9 2.156 1.348l.237-.349a35 35 0 0 0-2.182-1.365c-1.846-1.066-3.613-1.878-4.978-2.33-.68-.227-1.271-.367-1.726-.402a1.9 1.9 0 0 0-.604.036c-.17.044-.329.132-.42.29-.098.17-.087.365-.03.547s.17.38.318.586c.3.412.78.898 1.394 1.421l.274-.32c-.603-.514-1.055-.975-1.326-1.35a1.7 1.7 0 0 1-.258-.463c-.038-.123-.023-.182-.007-.21.015-.026.054-.065.162-.093s.262-.039.465-.023c.405.03.958.159 1.625.38 1.33.442 3.071 1.24 4.9 2.297"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#COSMOSHUB__h)"
            d="M12.15 10.364c1.416-.77 2.748-1.37 3.836-1.753l-.14-.398c-1.114.391-2.466 1.002-3.899 1.78z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#COSMOSHUB__i)"
            d="M6.665 14.125c.896-.835 2.247-1.836 3.86-2.824l-.22-.36c-1.629.997-3.005 2.016-3.928 2.875-.46.429-.816.826-1.033 1.168-.108.17-.188.337-.225.494a.64.64 0 0 0 .052.47c.142.247.444.324.746.333.318.01.723-.051 1.188-.168.933-.234 2.156-.705 3.509-1.358l-.184-.38c-1.338.646-2.533 1.104-3.427 1.329-.45.113-.811.164-1.073.155-.277-.008-.37-.08-.394-.122-.014-.024-.027-.071-.006-.164q.031-.14.17-.363c.19-.298.515-.667.965-1.085"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#COSMOSHUB__j)"
            d="M12.688 13.177c-.776.448-1.537.85-2.258 1.198l.184.38c.73-.353 1.5-.76 2.285-1.213 1.847-1.066 3.433-2.19 4.508-3.146.536-.476.953-.918 1.21-1.295.129-.188.224-.37.271-.54s.05-.35-.041-.51c-.097-.167-.269-.255-.452-.297a2.1 2.1 0 0 0-.656-.02c-.498.05-1.147.217-1.893.479l.14.398c.732-.258 1.345-.413 1.795-.458q.338-.031.52.012c.122.028.165.07.18.098.016.026.03.08 0 .186a1.5 1.5 0 0 1-.212.414c-.23.336-.617.751-1.142 1.218-1.048.931-2.61 2.04-4.439 3.096"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#fff"
            d="M10.91 17.693a.551.551 0 1 0 0-1.103.551.551 0 0 0 0 1.103m-4.394-7.595a.551.551 0 1 1 .955.551.551.551 0 0 1-.955-.551m9.878-1.888a.551.551 0 1 1-.955.55.551.551 0 0 1 .955-.55"
          />
          <path
            fill="#fff"
            d="M12 11.04a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="COSMOSHUB__b"
              x1="12"
              x2="14.508"
              y1="21"
              y2="2.137"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".377" stopColor="#fff" stopOpacity=".6" />
              <stop offset=".992" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="COSMOSHUB__c"
              x1="12"
              x2="15.715"
              y1="3"
              y2="22.037"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".635" stopColor="#fff" stopOpacity=".81" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="COSMOSHUB__d"
              x1="20.823"
              x2="20.823"
              y1="3"
              y2="21.021"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity=".81" />
              <stop offset=".646" stopColor="#fff" />
            </linearGradient>
            <linearGradient
              id="COSMOSHUB__e"
              x1="4.386"
              x2="23.952"
              y1="2.648"
              y2="13.053"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity=".6" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="COSMOSHUB__f"
              x1="21.843"
              x2="1.903"
              y1="19.54"
              y2="17.43"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".607" stopColor="#fff" stopOpacity=".81" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="COSMOSHUB__g"
              x1="20.631"
              x2=".823"
              y1="19.296"
              y2="16.02"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity=".81" />
              <stop offset=".478" stopColor="#fff" />
            </linearGradient>
            <linearGradient
              id="COSMOSHUB__h"
              x1="21.352"
              x2=".239"
              y1="6.577"
              y2="11.804"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity=".6" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="COSMOSHUB__i"
              x1="2.491"
              x2="19.946"
              y1="19.968"
              y2="2.345"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".545" stopColor="#fff" stopOpacity=".81" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="COSMOSHUB__j"
              x1="21.295"
              x2=".98"
              y1="3.355"
              y2="17.36"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".519" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity=".81" />
            </linearGradient>
            <radialGradient
              id="COSMOSHUB__a"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(0 9 -9 0 12 12)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".091" stopColor="#7C7C7C" />
              <stop offset=".234" stopColor="#3E3E3E" />
              <stop offset=".817" />
            </radialGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconCOSMOSHUB.displayName = 'COSMOSHUB'
