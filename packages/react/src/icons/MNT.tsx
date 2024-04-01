import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconMNT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m12.707 7.492.352-2.268A7 7 0 0 0 12 5.144h-.004v4.628H12q.293 0 .575.072l.6-2.254a4 4 0 0 0-.468-.098m-1.821 2.58L9.729 8.087a4 4 0 0 0-.39.257L7.963 6.46a6.5 6.5 0 0 1 .913-.566l1.05 2.044a4.6 4.6 0 0 1 .656-.274L9.87 5.477q.513-.165 1.046-.248l.368 2.305a4 4 0 0 0-.462.1l.6 2.215a2 2 0 0 0-.536.223M5.884 8.893l2.083 1.059a4.6 4.6 0 0 0-.274.655l-2.22-.72a7 7 0 0 1 .411-.994m10.03.836-1.985 1.157q.146.25.223.531l2.215-.6q.066.232.099.463l2.306-.364a7 7 0 0 0-.253-1.05l-2.186.716a4 4 0 0 0-.27-.66l2.04-1.05a7 7 0 0 0-.561-.913l-1.886 1.376q.141.19.257.394m-1.805-4.256q.516.168.994.411l-1.059 2.08a4.5 4.5 0 0 0-.65-.27zm.167 2.571-1.166 2.023q.258.146.463.356l3.266-3.278a6.6 6.6 0 0 0-.814-.7l-1.35 1.86a4 4 0 0 0-.4-.256zm-4.209 2.846L8.044 9.725q.125-.206.262-.4l-1.86-1.35c.214-.29.446-.565.699-.813l3.278 3.265a2.2 2.2 0 0 0-.356.463m-2.477-.064 2.254.6a2.3 2.3 0 0 0-.072.574H5.143c0-.355.026-.716.086-1.063l2.263.352a5 5 0 0 1 .098-.463m8.443 3.223 2.083 1.058q.244-.483.411-.994l-2.22-.72a4.6 4.6 0 0 1-.274.656m-2.914-.12 1.148 1.984a4 4 0 0 0 .395-.257l1.375 1.886a6.5 6.5 0 0 1-.912.565l-1.05-2.044a4.5 4.5 0 0 1-.66.274l.715 2.186a7 7 0 0 1-1.05.249l-.364-2.306a4 4 0 0 0 .463-.099l-.6-2.215q.283-.077.535-.223zm-5.032.343 1.985-1.158a2 2 0 0 1-.223-.53l-2.216.6a4 4 0 0 1-.099-.464l-2.305.364q.084.535.253 1.05l2.185-.715q.11.339.27.66l-2.04 1.05c.163.317.352.626.562.913l1.885-1.376a4 4 0 0 1-.257-.394m1.805 4.255a7 7 0 0 1-.995-.411l1.055-2.079q.32.162.655.27zm-.167-2.571 1.165-2.023a2.2 2.2 0 0 1-.463-.351L7.162 16.86a7 7 0 0 0 .814.695l1.35-1.856q.192.135.399.257m4.208-2.846 2.019 1.166a4 4 0 0 1-.258.403l1.856 1.345q-.315.438-.694.82l-3.279-3.27q.207-.206.356-.464m-2.507 1.046-.6 2.254c.154.043.308.073.467.099l-.351 2.267a7 7 0 0 0 1.058.081h.005V14.23H12q-.29-.001-.574-.073m2.73-1.582q.072-.277.073-.574h4.628c0 .356-.025.716-.085 1.063l-2.263-.351c-.026.154-.06.313-.099.463z"
          />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="m12.707 7.492.351-2.268A7 7 0 0 0 12 5.144h-.005v4.628H12c.197 0 .385.025.574.072l.6-2.254a4 4 0 0 0-.467-.098m-1.822 2.58L9.728 8.087a4 4 0 0 0-.39.257L7.963 6.46a6.5 6.5 0 0 1 .912-.566l1.05 2.044c.215-.107.429-.201.656-.274L9.87 5.477a7 7 0 0 1 1.045-.248l.369 2.305a4 4 0 0 0-.463.1l.6 2.215a2 2 0 0 0-.536.223M5.884 8.893l2.083 1.059a4.6 4.6 0 0 0-.274.655l-2.22-.72q.167-.514.411-.994m10.029.836-1.985 1.157q.148.25.223.531l2.216-.6q.066.232.098.463l2.306-.364a7 7 0 0 0-.253-1.05l-2.185.716a4 4 0 0 0-.27-.66l2.04-1.05a7 7 0 0 0-.562-.913l-1.886 1.376q.142.19.258.394m-1.805-4.256q.516.168.995.411l-1.059 2.08a4.5 4.5 0 0 0-.651-.27zm.167 2.571-1.165 2.023q.256.146.463.356l3.265-3.278a6.6 6.6 0 0 0-.814-.7l-1.35 1.86a4 4 0 0 0-.399-.256zm-4.208 2.846L8.044 9.725c.081-.138.171-.27.261-.4l-1.86-1.35a7 7 0 0 1 .699-.813l3.279 3.265a2.2 2.2 0 0 0-.356.463m-2.477-.064 2.254.6a2.3 2.3 0 0 0-.073.574H5.143c0-.355.025-.716.085-1.063l2.263.352c.026-.155.06-.313.099-.463m8.443 3.223 2.082 1.058q.244-.483.412-.994l-2.22-.72a4.6 4.6 0 0 1-.274.656m-2.915-.12 1.149 1.984a4 4 0 0 0 .394-.257l1.376 1.886a6.5 6.5 0 0 1-.913.565l-1.05-2.044a4.5 4.5 0 0 1-.66.274l.716 2.186a7 7 0 0 1-1.05.249l-.365-2.306a4 4 0 0 0 .463-.099l-.6-2.215q.285-.077.536-.223zm-5.031.343 1.984-1.158a2 2 0 0 1-.223-.53l-2.215.6a4 4 0 0 1-.099-.464l-2.306.364q.085.535.253 1.05l2.186-.715q.11.339.27.66l-2.04 1.05c.163.317.351.626.561.913l1.886-1.376a4 4 0 0 1-.257-.394m1.804 4.255a7 7 0 0 1-.994-.411l1.054-2.079q.321.162.656.27zm-.167-2.571 1.166-2.023a2.2 2.2 0 0 1-.463-.351L7.16 16.86c.253.249.527.485.814.695l1.35-1.856q.194.135.399.257m4.209-2.846 2.018 1.166a4 4 0 0 1-.257.403l1.856 1.345q-.315.438-.695.82l-3.278-3.27q.207-.206.356-.464m-2.508 1.046-.6 2.254c.155.043.309.073.468.099l-.352 2.267c.347.056.703.081 1.059.081h.004V14.23H12q-.29-.001-.575-.073m2.73-1.582q.072-.277.073-.574h4.629c0 .356-.026.716-.086 1.063l-2.263-.351c-.025.154-.06.313-.098.463z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconMNT.displayName = 'MNT'
