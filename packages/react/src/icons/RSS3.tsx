import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconRSS3 = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.714 10.851c-.004.759-.565 1.372-1.341 1.363l1.26 1.929h.51v.428H6.429v-.428h.557l-1.192-1.929h-1.08v1.929h.429v.428H3.857v-.428h.429V9.857h-.429v-.429H6.27c.814 0 1.436.596 1.444 1.423M6.24 9.857H4.714v1.929h1.629a.977.977 0 0 0 .943-.93c.021-.528-.514-.999-1.046-.999m4.432 1.787c.527.133 1.225.339 1.542.78q.131.187.172.412c.043.141.051.291.034.441a1.42 1.42 0 0 1-.489.853c-.374.303-.846.46-1.328.441h-.034A2.64 2.64 0 0 1 9 13.993v.578h-.428v-1.714H9v.42c.347.557 1.132.866 1.74.866.566-.009 1.38-.485 1.26-1.14-.12-.549-.964-.802-1.431-.913l-.249-.069-.047-.013c-.694-.18-1.513-.39-1.487-1.285-.017-.905.801-1.295 1.573-1.295.514.013.801.176 1.213.476v-.476H12v1.715h-.428v-.557c-.37-.515-.716-.72-1.213-.729-.48 0-1.102.304-1.145.866.035.535.575.677 1.05.797.15.043.292.077.408.124m8.7.172c.484.167.77.608.77 1.255 0 .922-.8 1.5-1.76 1.5a2.33 2.33 0 0 1-1.668-.715l.322-.408.03.035a1.84 1.84 0 0 0 1.32.66c.703 0 1.303-.459 1.333-1.106 0-.579-.532-1.037-1.175-1.037H18v-.429h.51c.514 0 .99-.3.99-.814 0-.544-.48-.9-1.153-.9-.544 0-.831.287-1.024.557l-.386-.236a1.56 1.56 0 0 1 1.415-.75c.925 0 1.577.399 1.577 1.286 0 .407-.137.857-.557 1.097zm-2.872.608c-.317-.441-1.016-.643-1.543-.78a3 3 0 0 0-.407-.124c-.471-.12-1.016-.262-1.05-.797.043-.557.664-.866 1.144-.866.498.009.845.214 1.213.729v.557h.429V9.428h-.429v.476c-.411-.3-.698-.463-1.213-.476-.771 0-1.585.386-1.572 1.295-.026.895.792 1.105 1.487 1.285l.047.013.248.069c.472.111 1.312.364 1.432.913.12.655-.695 1.131-1.26 1.14-.609 0-1.393-.313-1.74-.866v-.42h-.429v1.714h.429v-.578c.446.357.997.56 1.568.578h.035c.278 0 .874-.034 1.328-.441q.195-.16.317-.377a1.4 1.4 0 0 0 .172-.476c.017-.15.004-.3-.034-.441a1 1 0 0 0-.172-.412m-14.786-.853H3v.857H1.714zm19.286 0h1.286v.857H21z"
          />
        </>
      ) : (
        <>
          <path
            fill="#0B70FF"
            d="M7.714 10.851c-.004.759-.566 1.372-1.342 1.363l1.26 1.929h.51v.428H6.428v-.428h.557l-1.191-1.929h-1.08v1.929h.428v.428H3.857v-.428h.428V9.857h-.428v-.429H6.27c.814 0 1.435.596 1.444 1.423M6.24 9.857H4.714v1.929h1.628a.977.977 0 0 0 .943-.93c.022-.528-.514-.999-1.045-.999m4.431 1.787c.527.133 1.226.339 1.543.78.086.124.146.262.171.412.043.141.052.291.035.441a1.42 1.42 0 0 1-.489.853 2 2 0 0 1-1.329.441h-.034A2.64 2.64 0 0 1 9 13.993v.578h-.43v-1.714H9v.42c.347.557 1.131.866 1.74.866.565-.009 1.38-.485 1.26-1.14-.12-.549-.965-.802-1.432-.913l-.248-.069-.048-.013c-.694-.18-1.512-.39-1.487-1.285-.017-.905.802-1.295 1.573-1.295.514.013.802.176 1.213.476v-.476H12v1.715h-.429v-.557c-.369-.515-.716-.72-1.213-.729-.48 0-1.101.304-1.144.866.034.535.574.677 1.05.797.15.043.291.077.407.124m8.7.172c.484.167.771.608.771 1.255 0 .922-.801 1.5-1.761 1.5a2.33 2.33 0 0 1-1.667-.715l.321-.408.03.035a1.84 1.84 0 0 0 1.32.66c.703 0 1.303-.459 1.333-1.106 0-.579-.531-1.037-1.174-1.037H18v-.429h.51c.514 0 .99-.3.99-.814 0-.544-.48-.9-1.153-.9-.545 0-.832.287-1.025.557l-.385-.236a1.56 1.56 0 0 1 1.414-.75c.926 0 1.577.399 1.577 1.286 0 .407-.137.857-.557 1.097zm-2.871.608c-.318-.441-1.016-.643-1.543-.78a3 3 0 0 0-.407-.124c-.472-.12-1.016-.262-1.05-.797.042-.557.664-.866 1.144-.866.497.009.844.214 1.213.729v.557h.428V9.428h-.428v.476c-.412-.3-.699-.463-1.213-.476-.772 0-1.586.386-1.573 1.295-.026.895.793 1.105 1.487 1.285l.047.013.249.069c.471.111 1.311.364 1.431.913.12.655-.694 1.131-1.26 1.14-.608 0-1.393-.313-1.74-.866v-.42h-.428v1.714h.428v-.578c.447.357.997.56 1.569.578h.034c.279 0 .874-.034 1.329-.441q.193-.16.317-.377a1.4 1.4 0 0 0 .171-.476c.017-.15.005-.3-.034-.441a1 1 0 0 0-.171-.412m-14.786-.853H3v.857H1.714zm19.286 0h1.285v.857H21z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconRSS3.displayName = 'RSS3'
