import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconQRL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M19.5 15.428c.154 0 .214.133.214.283v1.432H15V15.9c0-.116.064-.215.15-.279 2.134-1.448 3.043-4.127 2.048-6.514-.994-2.383-3.728-3.947-6.257-3.437-2.528.501-4.513 2.858-4.513 5.443 0 1.77.892 3.428 2.345 4.431A.43.43 0 0 1 9 15.9v1.243H4.286v-1.44c0-.159.055-.275.214-.275s.214.116.214.275v1.011h3.853l.004-.857c-2.13-1.5-3.081-4.071-2.297-6.561A5.98 5.98 0 0 1 12 5.143a6 6 0 0 1 5.734 4.153c.789 2.485-.171 5.057-2.301 6.56v.858h3.857v-1.003c0-.15.06-.278.214-.283zm-3.9-3.887c.643.793.836 1.5.557 1.963-.214.36-.664.557-1.324.557a5.4 5.4 0 0 1-1.222-.18c-.36 1.23-.943 2.015-1.611 2.015-.664 0-1.247-.785-1.603-2.015a5 5 0 0 1-1.221.18c-.656 0-1.115-.197-1.325-.557-.343-.578.048-1.479.935-2.4a6 6 0 0 1-.377-.428c-.643-.79-.836-1.483-.558-1.968.215-.36.669-.557 1.329-.557a5 5 0 0 1 1.217.176c.364-1.226.943-2.014 1.611-2.014.67 0 1.252.788 1.603 2.023a5 5 0 0 1 1.222-.172c.66 0 1.114.193 1.328.557.275.48.082 1.179-.557 1.967-.12.15-.244.292-.381.429.137.133.261.274.381.428zm-.754-3.034a5.3 5.3 0 0 0-1.14.154q.148.663.214 1.337.545.397 1.046.857c.128-.128.248-.27.36-.398.527-.66.724-1.226.527-1.573-.172-.313-.647-.377-1.007-.377m-2.04 4.003c.27-.159.531-.326.771-.493.026-.3.034-.596.034-.913 0-.313-.017-.621-.034-.909q-.755-.51-1.577-.9a10 10 0 0 0-1.573.9c-.03.288-.038.596-.038.91 0 .316.02.625.038.912a12.5 12.5 0 0 0 1.573.909q.415-.186.806-.416m.733-.03-.545.334q-.281.166-.557.309c.3.128.617.248.934.343.065-.31.12-.635.168-.986m-1.955.643-.557-.309q-.274-.165-.544-.334c.034.334.085.66.167.986q.477-.15.934-.343m-1.513-1.38a16 16 0 0 1-.021-.643c0-.223.013-.429.021-.643q-.405.302-.771.643c.244.227.501.446.771.643m.416-1.997q.533-.352 1.101-.643a10 10 0 0 0-.934-.343q-.095.46-.171.986zm1.946-.643q.275.141.557.308l.544.335a7 7 0 0 0-.167-.986q-.477.148-.934.343m1.526 1.367c.008.214.02.42.02.643 0 .218-.012.433-.02.643.27-.215.527-.43.758-.643a7.5 7.5 0 0 0-.758-.643m-1.946-3.81c-.472 0-.952.651-1.269 1.757.437.129.857.296 1.269.48q.616-.275 1.273-.48c-.317-1.106-.81-1.757-1.273-1.757m-3.84 2.22c-.206.343-.009.921.527 1.56.111.141.231.27.36.411q.495-.463 1.046-.857.065-.675.214-1.337a5 5 0 0 0-1.14-.154c-.36 0-.823.064-1.007.377m.998 4.834c.386-.004.772-.06 1.14-.167a11 11 0 0 1-.214-1.337 8.4 8.4 0 0 1-1.054-.857c-.797.831-1.114 1.572-.879 1.984.172.313.643.377 1.007.377m2.833 1.843c.463 0 .956-.652 1.273-1.757a10 10 0 0 1-1.273-.485c-.411.19-.831.352-1.268.485.317 1.105.805 1.757 1.268 1.757m3.853-2.22c.197-.339 0-.913-.527-1.573a7 7 0 0 0-.36-.398q-.495.462-1.046.857-.065.674-.214 1.337c.373.094.754.15 1.14.154.36 0 .823-.064 1.007-.377M12 9.857a1.24 1.24 0 0 1 1.286 1.286c0 .745-.54 1.285-1.286 1.285a1.243 1.243 0 0 1-1.286-1.285A1.243 1.243 0 0 1 12 9.857M12 12a.846.846 0 0 0 .857-.857.84.84 0 0 0-.857-.857.84.84 0 0 0-.857.857c0 .462.343.87.857.857"
          />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="M19.5 15.428c.155 0 .215.133.215.283v1.432H15V15.9c0-.116.065-.215.15-.279 2.135-1.448 3.043-4.127 2.049-6.514-.994-2.383-3.729-3.947-6.257-3.437-2.529.501-4.513 2.858-4.513 5.443 0 1.77.891 3.428 2.344 4.431A.43.43 0 0 1 9 15.9v1.243H4.286v-1.44c0-.159.056-.275.214-.275.159 0 .215.116.215.275v1.011h3.853l.004-.857c-2.13-1.5-3.082-4.071-2.297-6.561A5.98 5.98 0 0 1 12 5.143a6 6 0 0 1 5.735 4.153c.788 2.485-.172 5.057-2.302 6.56v.858h3.857v-1.003c0-.15.06-.278.215-.283zm-3.9-3.887c.643.793.836 1.5.558 1.963-.215.36-.665.557-1.325.557a5.4 5.4 0 0 1-1.221-.18c-.36 1.23-.943 2.015-1.612 2.015-.664 0-1.247-.785-1.602-2.015a5 5 0 0 1-1.222.18c-.656 0-1.114-.197-1.324-.557-.343-.578.047-1.479.934-2.4a6 6 0 0 1-.377-.428c-.643-.79-.836-1.483-.557-1.968.214-.36.668-.557 1.328-.557a5 5 0 0 1 1.218.176c.364-1.226.942-2.014 1.611-2.014s1.251.788 1.603 2.023a5 5 0 0 1 1.221-.172c.66 0 1.115.193 1.329.557.274.48.081 1.179-.557 1.967q-.178.224-.382.429.204.198.382.428zm-.754-3.034a5.3 5.3 0 0 0-1.14.154q.15.663.214 1.337.546.397 1.046.857c.129-.128.249-.27.36-.398.527-.66.724-1.226.527-1.573-.171-.313-.647-.377-1.007-.377m-2.04 4.003c.27-.159.532-.326.772-.493.025-.3.034-.596.034-.913 0-.313-.017-.621-.034-.909q-.755-.51-1.578-.9a10 10 0 0 0-1.572.9c-.03.288-.039.596-.039.91 0 .316.021.625.039.912a12.5 12.5 0 0 0 1.572.909q.417-.186.806-.416m.733-.03-.544.334q-.282.166-.557.309c.3.128.617.248.934.343.064-.31.12-.635.167-.986m-1.954.643-.557-.309a36 36 0 0 1-.545-.334c.035.334.086.66.167.986q.477-.15.935-.343m-1.513-1.38c-.013-.215-.017-.429-.022-.643 0-.223.013-.429.022-.643q-.405.302-.772.643c.245.227.502.446.772.643m.416-1.997q.533-.352 1.101-.643a10 10 0 0 0-.934-.343q-.096.46-.172.986zm1.945-.643q.276.141.557.308l.545.335a7 7 0 0 0-.167-.986q-.477.148-.935.343m1.526 1.367c.009.214.021.42.021.643 0 .218-.012.433-.021.643.27-.215.527-.43.759-.643a7.5 7.5 0 0 0-.759-.643m-1.946-3.81c-.471 0-.951.651-1.268 1.757.437.129.857.296 1.268.48q.618-.275 1.273-.48c-.317-1.106-.81-1.757-1.273-1.757m-3.84 2.22c-.205.343-.008.921.527 1.56.112.141.232.27.36.411q.495-.463 1.046-.857.066-.675.214-1.337a5 5 0 0 0-1.14-.154c-.36 0-.822.064-1.007.377m.999 4.834c.386-.004.771-.06 1.14-.167a11 11 0 0 1-.214-1.337 8.4 8.4 0 0 1-1.055-.857c-.797.831-1.114 1.572-.878 1.984.171.313.643.377 1.007.377m2.833 1.843c.463 0 .955-.652 1.273-1.757a10 10 0 0 1-1.273-.485c-.412.19-.832.352-1.269.485.317 1.105.806 1.757 1.269 1.757m3.853-2.22c.197-.339 0-.913-.528-1.573a7 7 0 0 0-.36-.398q-.495.462-1.045.857-.066.674-.215 1.337c.373.094.755.15 1.14.154.36 0 .823-.064 1.008-.377M12 9.857a1.24 1.24 0 0 1 1.286 1.286c0 .745-.54 1.285-1.286 1.285a1.243 1.243 0 0 1-1.285-1.285A1.243 1.243 0 0 1 12 9.857M12 12a.846.846 0 0 0 .858-.857.84.84 0 0 0-.858-.857.84.84 0 0 0-.857.857c0 .462.343.87.857.857"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconQRL.displayName = 'QRL'
