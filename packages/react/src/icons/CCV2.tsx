import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconCCV2 = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M10.714 4.714c0 .112-.008.797 0 .96.039.592.557 1.144 1.14 1.312.96.274 1.71.823 2.104 1.757v.008c.45 1.132 1.235 2.229 2.328 2.803v1.085c0 .514-.468.934-.913 1.075h-.947c-.635-.917-1.83-1.393-2.889-1.526a6.6 6.6 0 0 0-.823 3.172c0 1.414.446 2.443 1.286 3.497h-.592c-1.765 0-3.505-1.02-4.637-2.498a5.66 5.66 0 0 1-1.2-3.46c0-3.492 2.439-5.27 3.9-5.828a4 4 0 0 1-.043-.505c-.008-.33.095-.6.228-.827.162-.266.784-.823 1.058-1.025m-1.11 2.953a5.51 5.51 0 0 0-3.39 5.233c0 .9.202 1.736.617 2.464a4.62 4.62 0 0 1 1.796-2.743 5.6 5.6 0 0 1 1.594-.814A2.49 2.49 0 0 1 9 9.857h.643c.034.977.891 1.62 1.804 1.714 1.89.197 2.906 1.063 3.279 1.5h.548c.159-.06.369-.231.369-.432v-.73c-.6-.376-1.607-1.34-2.237-2.93-.326-.772-.93-1.188-1.715-1.415a2.2 2.2 0 0 1-1.525-1.513c-.155.258-.185.617-.069 1.157q.048.22.129.43l-.558.213a4 4 0 0 1-.064-.184m1.209 4.603a5 5 0 0 0-1.835.831 4.09 4.09 0 0 0-1.662 2.983 5.82 5.82 0 0 0 3.475 2.087c-.428-.685-.72-1.564-.72-2.807 0-1.058.287-2.143.742-3.094"
          />
          <path
            fill="currentColor"
            d="m17.571 4.286-4.714 2.957c.41.215.763.524 1.033.9zm-3.428 14.571a.429.429 0 1 0 0-.857.429.429 0 0 0 0 .857m1.285 0a.429.429 0 1 0 0-.857.429.429 0 0 0 0 .857m-3.6-4.071h-.685v-.643h.561c.33 0 .622.193.742.484l.96 2.301h2.717l.3-.642h-2.709v-.643h2.944l.253-.643c.043-.103-.043-.214-.158-.214h-3.467v-.643h3.505c.549 0 .922.527.729 1.015l-.309.772-.497 1.213a.71.71 0 0 1-.656.428h-2.58a.71.71 0 0 1-.672-.441c-.326-.802-.652-1.543-.978-2.344"
          />
        </>
      ) : (
        <>
          <path
            fill="#FFFDFE"
            d="M10.714 4.714c0 .112-.008.797 0 .96.039.592.557 1.144 1.14 1.312.96.274 1.71.823 2.104 1.757v.008c.45 1.132 1.235 2.229 2.328 2.803v1.085c0 .514-.468.934-.913 1.075h-.947c-.635-.917-1.83-1.393-2.889-1.526a6.6 6.6 0 0 0-.823 3.172c0 1.414.446 2.443 1.286 3.497h-.592c-1.765 0-3.505-1.02-4.637-2.498a5.66 5.66 0 0 1-1.2-3.46c0-3.492 2.439-5.27 3.9-5.828a4 4 0 0 1-.043-.505c-.008-.33.095-.6.228-.827.162-.266.784-.823 1.058-1.025m-1.11 2.953a5.51 5.51 0 0 0-3.39 5.233c0 .9.202 1.736.617 2.464a4.62 4.62 0 0 1 1.796-2.743 5.6 5.6 0 0 1 1.594-.814A2.49 2.49 0 0 1 9 9.857h.643c.034.977.891 1.62 1.804 1.714 1.89.197 2.906 1.063 3.279 1.5h.548c.159-.06.369-.231.369-.432v-.73c-.6-.376-1.607-1.34-2.237-2.93-.326-.772-.93-1.188-1.715-1.415a2.2 2.2 0 0 1-1.525-1.513c-.155.258-.185.617-.069 1.157q.048.22.129.43l-.558.213a4 4 0 0 1-.064-.184m1.209 4.603a5 5 0 0 0-1.835.831 4.09 4.09 0 0 0-1.662 2.983 5.82 5.82 0 0 0 3.475 2.087c-.428-.685-.72-1.564-.72-2.807 0-1.058.287-2.143.742-3.094"
          />
          <path
            fill="#FFFDFE"
            d="m17.571 4.286-4.714 2.957c.41.215.763.524 1.033.9zm-3.428 14.571a.429.429 0 1 0 0-.857.429.429 0 0 0 0 .857m1.285 0a.429.429 0 1 0 0-.857.429.429 0 0 0 0 .857m-3.6-4.071h-.685v-.643h.561c.33 0 .622.193.742.484l.96 2.301h2.717l.3-.642h-2.709v-.643h2.944l.253-.643c.043-.103-.043-.214-.158-.214h-3.467v-.643h3.505c.549 0 .922.527.729 1.015l-.309.772-.497 1.213a.71.71 0 0 1-.656.428h-2.58a.71.71 0 0 1-.672-.441c-.326-.802-.652-1.543-.978-2.344"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconCCV2.displayName = 'CCV2'
