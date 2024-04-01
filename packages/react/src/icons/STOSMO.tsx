import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconSTOSMO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.586 4.658c.87.438 1.727 1.218 2.044 1.865.257.518.274.613.163.973a1.24 1.24 0 0 1-1.221.93c-.446 0-.463-.013-.433-.283.025-.215.098-.292.291-.317.326-.043.519-.202.519-.416 0-.266-1.187-1.307-1.886-1.654-.921-.459-1.436-.403-1.436.154a.53.53 0 0 1-.167.36c-.244.206-.454-.129-.454-.729 0-1.234 1.114-1.62 2.58-.883m-1.337.973c0 .129-.3.365-.378.292-.107-.107.052-.382.22-.382.085 0 .158.043.158.09m1.804.952.428.377-.278.557c-.514 1.02-.514 1.016-.12 1.637a6.5 6.5 0 0 1 .823 4.423 6.59 6.59 0 0 1-4.744 5.109c-.858.222-2.336.222-3.193 0a6.68 6.68 0 0 1-4.642-4.599c-.278-1.037-.235-2.52.103-3.574A6.54 6.54 0 0 1 11.627 6c.63 0 1.269.167 1.899.364l.716.227.685-.471.682-.463.51.274c.278.15.703.446.934.652m-6.42.098c-4.817.797-6.699 6.566-3.24 9.93a5.927 5.927 0 0 0 8.336.005c1.543-1.5 2.125-3.523 1.602-5.555a5.6 5.6 0 0 0-1.457-2.627 5.99 5.99 0 0 0-5.241-1.753m7.11.767c0 .155-.189.309-.279.223-.03-.03-.021-.15.018-.27.072-.227.257-.193.257.043zm-3.609.622c.673.664.215 1.8-.728 1.8-.844 0-1.264-1.072-.69-1.744a.965.965 0 0 1 1.414-.056zm1.157 1.624c.4.287-.008 1.097-.424.836-.334-.21-.394-.416-.206-.703.198-.3.356-.334.63-.133m.866 1.77c.356.099.772.296.926.433.257.244.27.287.214 1.046a5.7 5.7 0 0 1-3.248 4.671c-.695.322-1.835.596-2.486.596-1.187 0-2.871-.634-3.801-1.432a6.9 6.9 0 0 1-1.663-2.43c-.125-.342-.245-.972-.275-1.401-.042-.711-.025-.81.18-1.016.228-.223.258-.227 2.225-.154 1.92.073 2.027.064 3.025-.189 1.479-.372 1.423-.368 2.906-.338.909.021 1.564.086 1.997.214m-3.398.429c-.142.03-.729.158-1.303.3-1.213.287-2.014.334-3.746.21-1.371-.099-1.538-.043-1.243.403.557.848 2.769 1.414 4.672 1.187 1.071-.129 1.615-.266 3.227-.832a37 37 0 0 1 1.765-.574l.626-.171-.42-.189c-.745-.33-2.571-.497-3.578-.33z"
          />
        </>
      ) : (
        <>
          <path
            fill="#E91179"
            d="M16.585 4.658c.87.438 1.727 1.218 2.045 1.865.257.518.274.613.163.973a1.24 1.24 0 0 1-1.222.93c-.446 0-.463-.013-.433-.283.026-.215.099-.292.292-.317.325-.043.518-.202.518-.416 0-.266-1.187-1.307-1.886-1.654-.92-.459-1.435-.403-1.435.154a.53.53 0 0 1-.167.36c-.245.206-.455-.129-.455-.729 0-1.234 1.115-1.62 2.58-.883m-1.337.973c0 .129-.3.365-.377.292-.107-.107.051-.382.219-.382.085 0 .158.043.158.09m1.804.952.43.377-.28.557c-.514 1.02-.514 1.016-.12 1.637a6.5 6.5 0 0 1 .823 4.423 6.59 6.59 0 0 1-4.744 5.109c-.857.222-2.336.222-3.193 0a6.68 6.68 0 0 1-4.641-4.599c-.279-1.037-.236-2.52.103-3.574A6.54 6.54 0 0 1 11.627 6c.63 0 1.268.167 1.898.364l.716.227.686-.471.681-.463.51.274c.279.15.703.446.934.652m-6.42.098c-4.817.797-6.698 6.566-3.24 9.93a5.927 5.927 0 0 0 8.336.005c1.543-1.5 2.126-3.523 1.603-5.555a5.6 5.6 0 0 0-1.457-2.627 5.99 5.99 0 0 0-5.241-1.753m7.11.767c0 .155-.188.309-.278.223-.03-.03-.021-.15.017-.27.073-.227.257-.193.257.043zm-3.608.622c.673.664.214 1.8-.729 1.8-.844 0-1.264-1.072-.69-1.744a.965.965 0 0 1 1.415-.056zm1.157 1.624c.399.287-.008 1.097-.424.836-.335-.21-.395-.416-.206-.703.197-.3.356-.334.63-.133m.866 1.77c.355.099.771.296.925.433.258.244.27.287.215 1.046a5.7 5.7 0 0 1-3.249 4.671c-.694.322-1.834.596-2.485.596-1.188 0-2.872-.634-3.802-1.432a6.9 6.9 0 0 1-1.663-2.43c-.124-.342-.244-.972-.274-1.401-.043-.711-.026-.81.18-1.016.227-.223.257-.227 2.224-.154 1.92.073 2.027.064 3.026-.189 1.479-.372 1.423-.368 2.906-.338.908.021 1.564.086 1.997.214m-3.399.429c-.141.03-.728.158-1.303.3-1.213.287-2.014.334-3.745.21-1.372-.099-1.539-.043-1.243.403.557.848 2.768 1.414 4.671 1.187 1.072-.129 1.616-.266 3.227-.832a37 37 0 0 1 1.766-.574l.626-.171-.42-.189c-.746-.33-2.572-.497-3.579-.33z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconSTOSMO.displayName = 'STOSMO'
