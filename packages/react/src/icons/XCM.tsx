import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconXCM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M10.149 12.188a.274.274 0 0 0 0-.373 252 252 0 0 0-3.557-3.72 1.05 1.05 0 0 1-.313-1.032c.107-.42.613-.849.925-1.153.536-.523 1.11-.236 1.552.24q1.69 1.8 3.343 3.531.212.219.424 0l3.664-3.878a.6.6 0 0 1 .163-.12q.387-.205.729-.03c.261.141.291.325.077.548a599 599 0 0 0-4.131 4.342c-.425.45-1 .471-1.445 0a910 910 0 0 0-3.5-3.686c-.137-.146-.283-.15-.433-.022a2 2 0 0 0-.257.27q-.168.215.017.408l3.536 3.728c.381.399.475.999.064 1.436q-2.12 2.238-4.227 4.443c-.206.215-.373.189-.501-.09-.017-.043-.035-.081-.043-.12a.77.77 0 0 1 .184-.81zm6.84 4.955.188-.202c.163-.171.159-.343 0-.514a476 476 0 0 1-3.505-3.677c-.386-.407-.429-1.012-.052-1.41 1.432-1.5 2.842-2.996 4.239-4.474q.313-.342.48.107l.034.094q.165.451-.159.793l-3.711 3.917a.32.32 0 0 0 0 .437 730 730 0 0 0 3.544 3.737c.343.364.429.9.116 1.307-.489.656-1.299 1.629-2.134.75l-3.514-3.72a.275.275 0 0 0-.4 0L8.363 18.24a.6.6 0 0 1-.382.184.86.86 0 0 1-.454-.081c-.274-.133-.3-.313-.086-.536q2.046-2.103 4.007-4.226c.476-.514 1.05-.698 1.582-.141l3.501 3.703q.226.237.459 0"
          />
          <path
            fill="currentColor"
            d="M7.637 11.987a.17.17 0 0 0-.043-.09Q6.48 10.71 5.353 9.536a.68.68 0 0 1-.141-.793l.03-.065c.158-.278.342-.304.561-.077l2.974 3.146q.239.244 0 .489l-3 3.128c-.21.214-.385.193-.535-.077l-.035-.082c-.115-.3-.064-.57.159-.797l2.241-2.331a.1.1 0 0 0 .026-.043.1.1 0 0 0 0-.047z"
          />
        </>
      ) : (
        <>
          <path
            fill="#40D8C8"
            d="M10.148 12.188a.275.275 0 0 0 0-.373 253 253 0 0 0-3.557-3.72 1.05 1.05 0 0 1-.313-1.032c.107-.42.613-.849.926-1.153.536-.523 1.11-.236 1.551.24q1.692 1.8 3.343 3.531.213.219.425 0l3.664-3.878a.6.6 0 0 1 .163-.12q.386-.205.728-.03c.262.141.292.325.077.548a601 601 0 0 0-4.131 4.342c-.424.45-.999.471-1.444 0a910 910 0 0 0-3.502-3.686c-.137-.146-.283-.15-.433-.022a2 2 0 0 0-.257.27q-.168.215.017.408l3.536 3.728c.381.399.476.999.064 1.436q-2.12 2.238-4.225 4.444c-.206.215-.373.189-.502-.09q-.027-.063-.043-.12a.77.77 0 0 1 .185-.81zm6.84 4.955.189-.202c.163-.171.158-.343 0-.514a476 476 0 0 1-3.506-3.677c-.386-.407-.428-1.012-.051-1.41 1.431-1.5 2.841-2.996 4.238-4.474q.314-.342.48.107l.034.094c.112.3.056.566-.158.793l-3.711 3.917a.32.32 0 0 0 0 .437 730 730 0 0 0 3.544 3.737c.343.364.428.9.116 1.307-.489.656-1.299 1.629-2.135.75l-3.514-3.72a.275.275 0 0 0-.399 0L8.361 18.24a.6.6 0 0 1-.381.184.86.86 0 0 1-.455-.081q-.41-.2-.085-.536 2.045-2.103 4.007-4.226c.476-.514 1.05-.698 1.581-.141l3.502 3.703q.226.237.458 0"
          />
          <path
            fill="#40D8C8"
            d="M7.637 11.987a.17.17 0 0 0-.043-.09Q6.479 10.71 5.353 9.536a.68.68 0 0 1-.142-.793l.03-.065c.159-.278.343-.304.562-.077l2.974 3.146q.237.244 0 .489l-3 3.128c-.21.214-.386.193-.536-.077l-.034-.082c-.116-.3-.064-.57.158-.797l2.242-2.331a.1.1 0 0 0 .026-.043.1.1 0 0 0 0-.047z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconXCM.displayName = 'XCM'
