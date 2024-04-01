import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconCARAT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.857 7.286c-3.853.805-5.85 4.62-6.428 6.428.308-.643 2.314-2.143 3.274-2.811l-.274.668 1.238-.27-.771.403c.463-.158 2.374-.064 3.274 0-1.543 0-2.828.523-3.274.724 1.5-.24 2.803-.342 3.87-.39l-1.337 3.176h.655l.352-1.071h.694l.172 1.071H12l-1.204-3.18C11.632 12 12.322 12 12.857 12l.587-.296 1.342.296.09.004c.163.013.437.035.686-.098.308-.159.9-.043 1.152.094H15.43s.214.107.214.274c0 .172-.57.772-.857 1.055v-.42c0-.34.141-.562.214-.635h-.857V14.8c0 .334-.141.42-.214.42H15l-.214-.42v-.84c.141.137.471.5.643.84.171.334.073.42 0 .42l1.285.21h.802l.197-.922.801.193.343.943.857.214L18.116 12l-1.402 3.428-1.285-1.68L16.714 12l.583-.9c-.128-.064-.27-.197.193-.197s2.246 1.868 3.082 2.811c-.618-3.536-4.869-5.76-6.858-6.428l.429 1.285s2.383.926 2.383 1.127c0 .1-.047.198-.094.3a.7.7 0 0 0-.099.3c0 .07.073.116.171.18.129.086.296.198.408.425l-1.158-.806h-.385c-.129 0-.36-.291-.553-.536a4 4 0 0 0-.214-.265c-.155-.163-.708.201-.965.398-.385-.6-1.23-1.337-1.423-1.337-.154 0-.822.669-1.08.939h-.578c-.099 0-.193.098-.287.201-.099.099-.193.197-.292.197-.094 0-.193-.098-.287-.197-.098-.103-.193-.201-.291-.201-.155 0-.45.265-.579.398h-.386l-.771.604-.189-.402C7.32 9.416 8.657 8.84 9.43 8.57zM12 8.893l-.866 1.003.386.402.96-.8H12zm-2.794.805v.6l-.193-.2zm-.579.4-1.341.805 1.346-.403v-.403zm-.574 1.208 2.503-1.41-.386.604h.964l-1.157.6-.385-.197-1.543.398zm4.813-1.607 1.35 1.2-.964-.4-.386-.805zm1.543 0-.579.197.579.201.193.202zm.578.6.772.6-.772-.198zm-2.7.2-1.731.807 1.731-.605.772.6h.193l-.193-.398h-.193zM5.4 15.665l-.686.193L6.086 12l1.2 3.428H6.6l-.171-.92-.686.192zm1.886-.236 1.928-.2.215-.798c-.172.159-.93.33-1.286.399v-1.8c0-.322.141-.532.214-.6H7.286c.214.214.214.3.214.47v1.93c0 .32-.141.53-.214.6m-1.372-1.5.172-.578.171.579zm12.202-.578.197.579h-.399zm-4.402-.441c-.072-.142-.282-.48-.642-.48-.215 0-.429.055-.429.27 0 .072.171.235.39.44.377.357.896.84.896 1.24 0 .63-.592.84-1.072.84-.27 0-.484-.086-.643-.146A.7.7 0 0 0 12 15.01v-.63l.154.116c.172.142.378.3.703.3.36 0 .429-.206.429-.415 0-.138-.227-.343-.489-.588-.364-.33-.797-.728-.797-1.093 0-.844 1.286-.844 1.714-.424zm-2.965.42-.193.488h.386z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#CARAT__a)"
            d="M9.857 7.286c-3.853.805-5.85 4.62-6.428 6.428.308-.643 2.314-2.143 3.274-2.811l-.274.668 1.238-.27-.771.403c.463-.158 2.374-.064 3.274 0-1.543 0-2.828.523-3.274.724 1.5-.24 2.803-.342 3.87-.39l-1.337 3.176h.655l.352-1.071h.694l.172 1.071H12l-1.204-3.18C11.632 12 12.322 12 12.857 12l.587-.296 1.342.296.09.004c.163.013.437.035.686-.098.308-.159.9-.043 1.152.094H15.43s.214.107.214.274c0 .172-.57.772-.857 1.055v-.42c0-.34.141-.562.214-.635h-.857V14.8c0 .334-.141.42-.214.42H15l-.214-.42v-.84c.141.137.471.5.643.84.171.334.073.42 0 .42l1.285.21h.802l.197-.922.801.193.343.943.857.214L18.116 12l-1.402 3.428-1.285-1.68L16.714 12l.583-.9c-.128-.064-.27-.197.193-.197s2.246 1.868 3.082 2.811c-.618-3.536-4.869-5.76-6.858-6.428l.429 1.285s2.383.926 2.383 1.127c0 .1-.047.198-.094.3a.7.7 0 0 0-.099.3c0 .07.073.116.171.18.129.086.296.198.408.425l-1.158-.806h-.385c-.129 0-.36-.291-.553-.536a4 4 0 0 0-.214-.265c-.155-.163-.708.201-.965.398-.385-.6-1.23-1.337-1.423-1.337-.154 0-.822.669-1.08.939h-.578c-.099 0-.193.098-.287.201-.099.099-.193.197-.292.197-.094 0-.193-.098-.287-.197-.098-.103-.193-.201-.291-.201-.155 0-.45.265-.579.398h-.386l-.771.604-.189-.402C7.32 9.416 8.657 8.84 9.43 8.57zM12 8.893l-.866 1.003.386.402.96-.8H12zm-2.794.805v.6l-.193-.2zm-.579.4-1.341.805 1.346-.403v-.403zm-.574 1.208 2.503-1.41-.386.604h.964l-1.157.6-.385-.197-1.543.398zm4.813-1.607 1.35 1.2-.964-.4-.386-.805zm1.543 0-.579.197.579.201.193.202zm.578.6.772.6-.772-.198zm-2.7.2-1.731.807 1.731-.605.772.6h.193l-.193-.398h-.193zM5.4 15.665l-.686.193L6.086 12l1.2 3.428H6.6l-.171-.92-.686.192zm1.886-.236 1.928-.2.215-.798c-.172.159-.93.33-1.286.399v-1.8c0-.322.141-.532.214-.6H7.286c.214.214.214.3.214.47v1.93c0 .32-.141.53-.214.6m-1.372-1.5.172-.578.171.579zm12.202-.578.197.579h-.399zm-4.402-.441c-.072-.142-.282-.48-.642-.48-.215 0-.429.055-.429.27 0 .072.171.235.39.44.377.357.896.84.896 1.24 0 .63-.592.84-1.072.84-.27 0-.484-.086-.643-.146A.7.7 0 0 0 12 15.01v-.63l.154.116c.172.142.378.3.703.3.36 0 .429-.206.429-.415 0-.138-.227-.343-.489-.588-.364-.33-.797-.728-.797-1.093 0-.844 1.286-.844 1.714-.424zm-2.965.42-.193.488h.386z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="CARAT__a"
              x1="12"
              x2="11.893"
              y1="7.286"
              y2="15.45"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#665420" />
              <stop offset=".2" stopColor="#FBF0B8" />
              <stop offset=".46" stopColor="#98763B" />
              <stop offset=".71" stopColor="#FEF2C0" />
              <stop offset=".86" stopColor="#AEA16D" />
              <stop offset="1" stopColor="#F2E4B8" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconCARAT.displayName = 'CARAT'
