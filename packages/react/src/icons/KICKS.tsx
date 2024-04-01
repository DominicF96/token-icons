import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconKICKS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m7.941 8.447.202-.733H5.048a1.37 1.37 0 0 0-1.35 1.093l-.252 1.256a.91.91 0 0 0 .9 1.08h2.91l.458-1.714H6.471l-.227.643H5.138a.257.257 0 0 1-.257-.318l.197-.775a.26.26 0 0 1 .258-.197h2.16a.46.46 0 0 0 .445-.335m5.567 4.286.206-.733h-2.657a1.38 1.38 0 0 0-1.359 1.093l-.252 1.256a.908.908 0 0 0 .904 1.08h2.64l.231-1.072h-2.078a.257.257 0 0 1-.258-.317l.202-.776a.26.26 0 0 1 .257-.197h1.714a.45.45 0 0 0 .446-.334z"
          />
          <path
            fill="currentColor"
            d="M8.409 8.807a1.41 1.41 0 0 1 1.397-1.093h1.573c.6 0 1.05.523.934 1.08l-.227 1.063H9.643a.214.214 0 1 0 0 .429H12l-.176.857H9.163c-.643 0-1.123-.558-.999-1.158zm1.448-.022c0-.12.094-.214.214-.214h.857a.214.214 0 0 1 0 .429h-.857a.214.214 0 0 1-.214-.215"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="m13.286 8.786-.313 1.585a.642.642 0 0 0 .625.772h1.972l.287-1.072h-1.5l.283-1.285h.27c.364 0 .806-.335.878-.699l.069-.373h-1.02l.094-.428H13.56l-.086.428h-.428l-.189 1.072zM8.023 12h1.405l-.737 3.428H7.286zm7.393.93.18-.93h-1.278l-.672 3.428h1.277l.145-.728.429-.437.771 1.165h1.475l-1.252-1.94L18 12a4.3 4.3 0 0 0-2.584.93M3.244 12h1.282l-.258 1.286h.408L5.944 12h1.363l-1.491 1.749 1.041 1.68h-.476c-.651-.266-1.5-.78-1.697-1.552a6 6 0 0 0-.48.129 1 1 0 0 0-.218.115c-.095.065-.172.116-.232.077-.077-.05-.116-.192-.128-.257.085.043.265.116.291.065.03-.065-.034-.326-.291-.326-.258 0-.386.424-.386.78s.257.45.386.45h.025c.176 0 .819-.009 1.029.42l-.064-.026a2.2 2.2 0 0 0-.763-.197 1.9 1.9 0 0 1-.609-.128c.052.085.206.257.386.257.197 0 .578.025.771.192h-1.83zm18.956.446.086-.446h-2.752a1.12 1.12 0 0 0-1.106 1.123v.236c0 .394.3.728.678.784l1.74.265h-2.088a.71.71 0 0 0-.694.61l-.064.41h2.91c.54 0 .887-.432.921-.985l.026-.407c.026-.395-.171-.737-.557-.759l-1.337-.086a.086.086 0 0 1-.077-.085c0-.043.038-.086.085-.086h1.552a.7.7 0 0 0 .681-.574z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#KICKS__a)"
            d="m7.942 8.447.201-.733H5.05A1.37 1.37 0 0 0 3.7 8.807l-.253 1.256a.91.91 0 0 0 .9 1.08h2.91l.459-1.714H6.472l-.227.643H5.139a.257.257 0 0 1-.257-.318l.197-.775a.26.26 0 0 1 .257-.197h2.16a.46.46 0 0 0 .446-.335m5.567 4.286.206-.733h-2.658A1.38 1.38 0 0 0 9.7 13.093l-.253 1.256a.908.908 0 0 0 .904 1.08h2.64l.232-1.072h-2.079a.257.257 0 0 1-.257-.317l.201-.776a.26.26 0 0 1 .258-.197h1.714a.45.45 0 0 0 .446-.334z"
          />
          <path
            fill="url(#KICKS__b)"
            d="M8.409 8.807a1.41 1.41 0 0 1 1.397-1.093h1.573c.6 0 1.05.523.934 1.08l-.227 1.063H9.643a.214.214 0 1 0 0 .429H12l-.176.857H9.163c-.643 0-1.123-.558-.999-1.158zm1.448-.022c0-.12.094-.214.214-.214h.857a.214.214 0 0 1 0 .429h-.857a.214.214 0 0 1-.214-.215"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#KICKS__c)"
            d="m13.286 8.786-.313 1.585a.642.642 0 0 0 .625.772h1.972l.287-1.072h-1.5l.283-1.285h.27c.364 0 .806-.335.878-.699l.069-.373h-1.02l.094-.428H13.56l-.086.428h-.428l-.189 1.072zM8.023 12h1.405l-.737 3.428H7.286zm7.393.93.18-.93h-1.278l-.672 3.428h1.277l.145-.728.429-.437.771 1.165h1.475l-1.252-1.94L18 12a4.3 4.3 0 0 0-2.584.93M3.244 12h1.282l-.258 1.286h.408L5.944 12h1.363l-1.491 1.749 1.041 1.68h-.476c-.651-.266-1.5-.78-1.697-1.552a6 6 0 0 0-.48.129 1 1 0 0 0-.218.115c-.095.065-.172.116-.232.077-.077-.05-.116-.192-.128-.257.085.043.265.116.291.065.03-.065-.034-.326-.291-.326-.258 0-.386.424-.386.78s.257.45.386.45h.025c.176 0 .819-.009 1.029.42l-.064-.026a2.2 2.2 0 0 0-.763-.197 1.9 1.9 0 0 1-.609-.128c.052.085.206.257.386.257.197 0 .578.025.771.192h-1.83zm18.956.446.086-.446h-2.752a1.12 1.12 0 0 0-1.106 1.123v.236c0 .394.3.728.678.784l1.74.265h-2.088a.71.71 0 0 0-.694.61l-.064.41h2.91c.54 0 .887-.432.921-.985l.026-.407c.026-.395-.171-.737-.557-.759l-1.337-.086a.086.086 0 0 1-.077-.085c0-.043.038-.086.085-.086h1.552a.7.7 0 0 0 .681-.574z"
          />
          <defs>
            <linearGradient
              id="KICKS__a"
              x1="8.572"
              x2="8.572"
              y1="7.714"
              y2="15.429"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF5959" />
              <stop offset="1" stopColor="#E72324" />
            </linearGradient>
            <linearGradient
              id="KICKS__b"
              x1="10.238"
              x2="10.238"
              y1="7.714"
              y2="11.143"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF5959" />
              <stop offset="1" stopColor="#E72324" />
            </linearGradient>
            <linearGradient
              id="KICKS__c"
              x1="12.428"
              x2="12.428"
              y1="7.286"
              y2="15.428"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF5959" />
              <stop offset="1" stopColor="#E72324" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconKICKS.displayName = 'KICKS'
