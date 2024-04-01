import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconEVMOS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M10.192 7.551c-2.816 1.016-3.073 3.613-3.88 4.822-.813 1.23-2.686 2.143-2.43 2.768.087.215.374.279.772.279h1.637c.403 0 .96.009 1.2.073 1.115.3 2.572 1.23 4.45 1.221.582 0 1.208-.068 1.872-.308a4.77 4.77 0 0 0 2.888-2.842.2.2 0 0 0 .013-.081.223.223 0 0 0-.214-.21.24.24 0 0 0-.223.12 3.77 3.77 0 0 1-2.083 1.817c-.448.15-.92.222-1.392.214A4.1 4.1 0 0 1 9.767 14.2a3 3 0 0 1-.54-.806A3.6 3.6 0 0 1 9 12.836c.844-.369 1.744-.832 2.85-1.23 1.084-.386 2.503-.707 3.386-.96.514-.15 1.23-.399 1.774-.395.124 0 .15.12.184.215.099.257.172.673.215.938a.19.19 0 0 0 .265.12c.407-.205.776-.437 1.106-.625 1.097-.635 1.757-1.183 1.791-1.535a.26.26 0 0 0-.017-.124c-.081-.193-.411-.24-.938-.24-.407 0-.939.017-1.56.124-3.069.527-6.437 1.38-9.3 2.606-.009-1.521.968-2.807 2.571-3.386a4.2 4.2 0 0 1 1.5-.201c.476.008.986.051 1.427.214.09.03.193.009.258-.056a.2.2 0 0 0 .06-.145.22.22 0 0 0-.125-.197c-1.251-.635-2.82-.922-4.255-.408"
          />
        </>
      ) : (
        <>
          <path
            fill="#DBD4C5"
            d="M10.191 7.551c-2.816 1.016-3.073 3.613-3.879 4.822-.814 1.23-2.687 2.143-2.43 2.768.086.215.373.279.772.279H6.29c.403 0 .96.009 1.2.073 1.114.3 2.571 1.23 4.449 1.221.582 0 1.208-.068 1.872-.308a4.77 4.77 0 0 0 2.889-2.842.2.2 0 0 0 .013-.081.223.223 0 0 0-.214-.21.24.24 0 0 0-.223.12 3.77 3.77 0 0 1-2.083 1.817c-.449.15-.92.222-1.393.214A4.1 4.1 0 0 1 9.767 14.2a3 3 0 0 1-.54-.806A3.6 3.6 0 0 1 9 12.836c.844-.369 1.744-.832 2.85-1.23 1.084-.386 2.502-.707 3.385-.96.515-.15 1.23-.399 1.775-.395.124 0 .15.12.184.215.098.257.171.673.214.938a.19.19 0 0 0 .266.12c.407-.205.776-.437 1.106-.625 1.097-.635 1.757-1.183 1.791-1.535a.26.26 0 0 0-.017-.124c-.082-.193-.412-.24-.939-.24-.407 0-.938.017-1.56.124-3.068.527-6.437 1.38-9.3 2.606-.008-1.521.969-2.807 2.572-3.386a4.2 4.2 0 0 1 1.5-.201c.475.008.985.051 1.427.214.09.03.193.009.257-.056a.2.2 0 0 0 .06-.145.22.22 0 0 0-.124-.197c-1.252-.635-2.82-.922-4.256-.408"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconEVMOS.displayName = 'EVMOS'
