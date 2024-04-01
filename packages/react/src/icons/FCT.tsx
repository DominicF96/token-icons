import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconFCT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.309 8.317c-.028.151-.02.26.061.343-.102.178-.185.315-.26.466.075-.15.158-.288.26-.439.234.288.96.288 1.948-.027.117-.035.117.226.117.226 0 .15-.028.35-1.283.528-.343.055-.843.027-1.07-.233a.6.6 0 0 1-.089-.35c0-.027 0-.055.028-.116a.5.5 0 0 1 .061-.144c.028-.09.083-.144.138-.233a1 1 0 0 1-.138.233.6.6 0 0 1 .138-.233zm.171-.37a1 1 0 0 1 .151-.192l-.09.117-.013.013.103-.13-.09.117a1 1 0 0 0-.06.068zm0 0-.11.158-.013.013-.069.11zm.617-.7.26-.219a.9.9 0 0 0-.17.35c-.035.089-.035.178.027.233l-.02.014c.191.22.822.15 1.618-.185q.389-.165.754-.378c.09-.034.206.117.233.138.027.034.055.123 0 .178-.288.178-.61.35-.96.466-1.001.425-1.803.494-2.023.22l-.007.013c-.034-.089-.061-.144-.034-.26 0-.035 0-.062.034-.09a1 1 0 0 1 .083-.095q-.062.058-.117.123c0-.027.034-.082.034-.117.055-.116.117-.205.206-.315l.055-.048c.09-.123.22-.233.343-.363l.35-.288a1 1 0 0 1 .082-.069l-.028.027c.083-.068.165-.123.254-.184h.014l.048-.042a7.5 7.5 0 0 1 1.316-.686c.076-.047.151-.081.227-.116l-.124.048a5 5 0 0 1-.22.09c-.116.034-.116.034-.342.15-.124.055-.123.055-.322.172l-.295.178-.24.171c1.9-.939 1.769-.898 1.632-.843a6 6 0 0 0-2.229 1.29 2 2 0 0 0-.178.19c-.09.09-.185.165-.26.248m-1.645 6.74q0 .037.02.068.031.119.117.206l-.158-.48c0 .192.055.357.158.48a3 3 0 0 1-.151-.548c.528.726 2.503.548 5.026-.521 3.223-1.372 6.165-3.689 6.57-5.204.089-.377.027-.638-.172-.843.138.144.288.322.432.466.179.206.206.466.116.816-.41 1.536-3.4 3.887-6.713 5.279-2.88 1.255-5.04 1.31-5.252.28-.048-.164-.096-.383-.151-.534.027.083.062.172.116.261l.021.061v.007-.007zm4.704-8.597.04-.014c.872-.233 1.427-.117 1.31.377-.027.172-.143.343-.322.521-.137.062-.46 0-.52-.055q.216-.266.26-.438c.089-.384-.33-.48-1.008-.309l-.028.014zm-.048.02.116-.034-.068.014zm-4.82 7.556v.02c-.083-.082-.11-.192-.118-.322a1 1 0 0 1 0-.178q.003.082 0 .164a1 1 0 0 1 0-.171 6 6 0 0 1-.027-.453c0 .178.062.288.117.412l.013.274c-.013-.096-.013-.192-.013-.274 1.947 2.057 10.697-3.291 10.78-5.554.027-.411-.207-.548-.323-.637l.233.143.295.206c.233.206.315.494.233.871-.384 1.453-3.223 3.689-6.336 4.998-2.469 1.056-4.368 1.2-4.855.5m-.015-2.215.041-.178c-.054.233-.027.439.09.548v.014a.7.7 0 0 0 .233.165c.089.116.027.411.027.411-.027.082-.055.206-.116.172-.288-.145-.405-.378-.378-.728a.67.67 0 0 0 .117.494v-.014a.67.67 0 0 1-.09-.452l.015-.069a.3.3 0 0 0-.014.069l.062-.412.054-.226v-.054zm.425-.713a1.6 1.6 0 0 0-.116.363c-.09-.116-.117-.26-.09-.438q.087-.33.234-.638a.64.64 0 0 0 .055.521l-.014.048c.363.48 1.687.357 3.388-.363 2.18-.96 4.182-2.53 4.443-3.517.09-.377-.028-.61-.343-.727.055-.028.055-.028.226.027.117.035.206.062.26.062.378.144.529.411.412.816-.295 1.097-2.468 2.81-4.855 3.832-1.885.782-3.339.926-3.716.377zm4.485 8.364c-.29.021-.58-.014-.857-.103-.171-.089-.412-.171-.549-.26.35.144.823.185 1.351.13 3.065-.302 8.435-3.517 8.73-5.622l-.028.09a3 3 0 0 0-.062.52c0 .035 0 .062-.027.09-.343 1.247-2.812 3.194-5.52 4.353a9 9 0 0 1-3.038.81zm.343-1.193q.72-.204 1.42-.48c.315-.082.431.117.431.117.028.034.028.15-.144.233a13 13 0 0 1-1.988.617l-.02.02.013-.02c-1.029.213-1.81.185-2.222-.096-.137-.117-.343-.26-.494-.377.474.405 1.55.398 3.004-.014m-3.634-.617c-.124-.15-.268-.295-.357-.439.117.137.295.343.412.494a.07.07 0 0 0-.062-.062zM11.507 5.17c.17 0 .41-.027.582-.027.61 0 .899.233.782.7-.144.548-.926 1.336-1.947 2.029-.206.089-.412-.172-.343-.288 0-.028.027-.028.027-.028.899-.617 1.564-1.282 1.714-1.775.117-.467-.26-.666-.932-.61zm3.483.672c.35.172.494.467.384.898-.35 1.303-2.908 3.312-5.698 4.504a13 13 0 0 1-1.509.549c-.267.027-.295-.316-.178-.493.034-.055.061-.055.089-.09.439-.116.898-.288 1.392-.493 2.647-1.132 5.06-3.044 5.376-4.264.117-.44-.055-.727-.432-.871.171.082.405.171.576.26m3.024 2.88.09.137c.089.233.089.233.089.35v.027c-.09-.028-.268-.377-.295-.521a.62.62 0 0 0-.117-.412l.233.412zm.617 1.535c.02.138.02.316-.034.521-.35 1.275-2.53 3.168-5.17 4.525-.295.124-.467-.082-.412-.288a.3.3 0 0 1 .15-.171c2.675-1.392 4.91-3.312 5.26-4.62.058-.2.058-.412 0-.611.083.233.172.466.206.644m.2 1.22v.227c0 .116 0 .205-.028.35-.206.788-1.166 1.803-2.469 2.79-.205.144-.322-.055-.295-.206a.53.53 0 0 1 .144-.233c1.372-1.014 2.352-2.057 2.558-2.873.027-.144.062-.287.027-.432zm-12.035-3.4c-.028-.089-.055-.144-.028-.26-.027.116 0 .171.034.26zM6.07 9.174a.6.6 0 0 1-.082-.342c0 .143 0 .232.089.342zm10.464 2.242a.4.4 0 0 1-.062.377 19.1 19.1 0 0 1-5.143 3.167c-2.935 1.22-5.143 1.303-5.348.261-.02-.089 0-.027.034-.055 0 .028 0 .172.116.343-.027-.055-.054-.082-.089-.137-.027-.034-.027-.069-.054-.096-.062-.082-.09-.206-.145-.288.55.727 2.586.583 5.198-.549a20 20 0 0 0 5.143-3.167c.233-.117.322.055.35.144M9.19 16.729c.027.062.055.178-.062.206-1.042.171-1.797.09-2.146-.288-.117-.15-.288-.35-.412-.494.323.405 1.111.521 2.243.343.205 0 .343.178.377.233m9.154-2.118c.083-.172.172-.439.233-.61-.35 1.131-2.585 2.88-5.026 3.921-1.509.638-2.764.87-3.429.665.172.062.432.117.638.151 1.858.288 6.562-2.036 7.584-4.127m-1.509 2.091c0 .027-.068.116-.178.206-.637.52-1.508 1.041-2.413 1.418-.755.323-1.42.494-1.92.529h-.72c.575.027 1.419-.179 2.44-.583.982-.41 1.9-.958 2.73-1.625.027 0 .027-.034.055-.034 0 0 0 .034.034.034 0 0 0 .027-.034.055zM5.5 9.846c0-.028.027-.083.027-.117l.234-.61c0 .089-.028.15-.062.233-.082.144-.137.322-.206.494z"
          />
        </>
      ) : (
        <>
          <path
            fill="#16486F"
            d="M6.308 8.317c-.027.151-.02.26.062.343-.103.178-.185.315-.26.466.075-.15.157-.288.26-.439.233.288.96.288 1.947-.027.117-.035.117.226.117.226 0 .15-.027.35-1.282.528-.343.055-.844.027-1.07-.233a.6.6 0 0 1-.09-.35c0-.027 0-.055.028-.116a.5.5 0 0 1 .062-.144c.027-.09.082-.144.137-.233a1 1 0 0 1-.137.233.6.6 0 0 1 .137-.233zm.172-.37a1 1 0 0 1 .15-.192l-.089.117-.013.013.103-.13-.09.117a1 1 0 0 0-.061.068zm0 0-.11.158-.014.013-.068.11zm.617-.7.26-.219a.9.9 0 0 0-.171.35c-.034.089-.034.178.027.233l-.02.014c.192.22.823.15 1.618-.185q.39-.165.754-.378c.09-.034.206.117.234.138.027.034.054.123 0 .178-.288.178-.61.35-.96.466-1.002.425-1.804.494-2.023.22l-.007.013c-.034-.089-.062-.144-.034-.26 0-.035 0-.062.034-.09a1 1 0 0 1 .082-.095q-.062.058-.116.123c0-.027.034-.082.034-.117.055-.116.116-.205.206-.315l.054-.048c.09-.123.22-.233.343-.363l.35-.288a1 1 0 0 1 .082-.069l-.027.027c.082-.068.164-.123.254-.184h.013l.048-.042A7.5 7.5 0 0 1 9.45 5.67c.075-.047.15-.081.226-.116l-.123.048a5 5 0 0 1-.22.09c-.116.034-.116.034-.343.15-.123.055-.123.055-.322.172l-.295.178-.24.171c1.9-.939 1.77-.898 1.632-.843a6 6 0 0 0-2.228 1.29 2 2 0 0 0-.179.19c-.089.09-.185.165-.26.248m-1.646 6.74q0 .037.02.068.033.119.117.206l-.157-.48c0 .192.054.357.157.48a3 3 0 0 1-.15-.548c.527.726 2.502.548 5.026-.521 3.223-1.372 6.164-3.689 6.57-5.204.088-.377.027-.638-.172-.843.137.144.288.322.432.466.178.206.206.466.116.816-.411 1.536-3.401 3.887-6.713 5.279-2.88 1.255-5.04 1.31-5.253.28-.048-.164-.096-.383-.15-.534.027.083.061.172.116.261l.02.061v.007-.007zm4.704-8.597.041-.014c.871-.233 1.427-.117 1.31.377-.027.172-.144.343-.322.521-.137.062-.46 0-.521-.055q.218-.266.26-.438c.09-.384-.329-.48-1.008-.309l-.027.014zm-.048.02.117-.034-.069.014zm-4.82 7.556v.02c-.083-.082-.11-.192-.117-.322a1 1 0 0 1 0-.178q.003.082 0 .164a1 1 0 0 1 0-.171 6 6 0 0 1-.027-.453c0 .178.061.288.116.412l.014.274c-.014-.096-.014-.192-.014-.274 1.948 2.057 10.697-3.291 10.78-5.554.027-.411-.206-.548-.323-.637l.233.143.295.206c.233.206.316.494.233.871-.384 1.453-3.222 3.689-6.336 4.998-2.468 1.056-4.368 1.2-4.854.5m-.014-2.215.041-.178c-.055.233-.027.439.09.548v.014a.7.7 0 0 0 .232.165c.09.116.028.411.028.411-.028.082-.055.206-.117.172-.288-.145-.404-.378-.377-.728a.67.67 0 0 0 .117.494v-.014a.67.67 0 0 1-.09-.452l.014-.069a.3.3 0 0 0-.014.069l.062-.412.055-.226v-.054zm.425-.713a1.6 1.6 0 0 0-.117.363c-.089-.116-.116-.26-.089-.438a3.6 3.6 0 0 1 .233-.638.64.64 0 0 0 .055.521l-.013.048c.363.48 1.686.357 3.387-.363 2.18-.96 4.183-2.53 4.443-3.517.09-.377-.027-.61-.342-.727.054-.028.054-.028.226.027.116.035.206.062.26.062.378.144.528.411.412.816-.295 1.097-2.469 2.81-4.855 3.832-1.886.782-3.34.926-3.717.377zm4.485 8.364a2.3 2.3 0 0 1-.858-.103c-.171-.089-.411-.171-.548-.26.35.144.823.185 1.35.13 3.066-.302 8.435-3.517 8.73-5.622l-.027.09a3 3 0 0 0-.062.52c0 .035 0 .062-.028.09-.343 1.247-2.811 3.194-5.52 4.353a9 9 0 0 1-3.037.81zm.342-1.193q.722-.204 1.42-.48c.315-.082.432.117.432.117.027.034.027.15-.144.233a13 13 0 0 1-1.989.617l-.02.02.013-.02c-1.028.213-1.81.185-2.221-.096-.137-.117-.343-.26-.494-.377.473.405 1.55.398 3.003-.014m-3.634-.617c-.123-.15-.267-.295-.356-.439.116.137.294.343.411.494a.07.07 0 0 0-.062-.062zM11.506 5.17c.171 0 .411-.027.583-.027.61 0 .898.233.782.7-.144.548-.926 1.336-1.948 2.029-.206.089-.411-.172-.343-.288 0-.028.028-.028.028-.028.898-.617 1.563-1.282 1.714-1.775.117-.467-.26-.666-.933-.61zm3.483.672c.35.172.494.467.384.898-.35 1.303-2.907 3.312-5.698 4.504a13 13 0 0 1-1.508.549c-.268.027-.295-.316-.179-.493.035-.055.062-.055.09-.09.438-.116.898-.288 1.391-.493 2.647-1.132 5.061-3.044 5.376-4.264.117-.44-.054-.727-.432-.871.172.082.405.171.576.26m3.024 2.88.09.137c.09.233.09.233.09.35v.027c-.09-.028-.268-.377-.296-.521a.62.62 0 0 0-.117-.412l.233.412zm.618 1.535c.02.138.02.316-.035.521-.35 1.275-2.53 3.168-5.17 4.525-.295.124-.466-.082-.411-.288a.3.3 0 0 1 .15-.171c2.675-1.392 4.91-3.312 5.26-4.62.058-.2.058-.412 0-.611.082.233.171.466.206.644m.199 1.22v.227c0 .116 0 .205-.028.35-.205.788-1.165 1.803-2.468 2.79-.206.144-.323-.055-.295-.206a.53.53 0 0 1 .144-.233c1.371-1.014 2.352-2.057 2.557-2.873.028-.144.062-.287.028-.432zm-12.034-3.4c-.028-.089-.056-.144-.028-.26-.028.116 0 .171.034.26zm-.728 1.097a.6.6 0 0 1-.082-.342c0 .143 0 .232.09.342zm10.464 2.242a.4.4 0 0 1-.061.377 19.1 19.1 0 0 1-5.143 3.167c-2.935 1.22-5.143 1.303-5.349.261-.02-.089 0-.027.034-.055 0 .028 0 .172.117.343-.027-.055-.055-.082-.09-.137-.027-.034-.027-.069-.054-.096-.062-.082-.09-.206-.144-.288.549.727 2.585.583 5.198-.549a20 20 0 0 0 5.143-3.167c.233-.117.322.055.35.144m-7.344 5.313c.028.062.055.178-.061.206-1.043.171-1.797.09-2.147-.288-.116-.15-.288-.35-.411-.494.322.405 1.11.521 2.242.343.206 0 .343.178.377.233m9.155-2.118c.082-.172.171-.439.233-.61-.35 1.131-2.585 2.88-5.027 3.921-1.508.638-2.763.87-3.428.665.171.062.432.117.638.151 1.858.288 6.562-2.036 7.584-4.127m-1.509 2.091c0 .027-.069.116-.178.206-.638.52-1.509 1.041-2.414 1.418-.754.323-1.42.494-1.92.529h-.72c.576.027 1.42-.179 2.441-.583.982-.41 1.9-.958 2.73-1.625.027 0 .027-.034.054-.034 0 0 0 .034.034.034 0 0 0 .027-.034.055zM5.5 9.846c0-.028.027-.083.027-.117l.233-.61c0 .089-.027.15-.062.233-.082.144-.137.322-.205.494z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconFCT.displayName = 'FCT'
