import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconMNTC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M3.857 13.714v-.137c.172-.009.253-.021.253-.236v-1.907l-.767 2.28H3.12a98 98 0 0 0-.77-2.314v1.547c0 .3.055.621.428.621v.146H1.714v-.146c.386-.021.429-.257.429-.6V11.7c0-.266-.171-.394-.429-.412v-.145H2.88l.502 1.714.51-1.397a1.3 1.3 0 0 0 .077-.317h1.088v.137c-.163.017-.343.03-.343.227v1.817c0 .189.189.21.343.227v.163zm3.266-.086a.8.8 0 0 1-.352.086c-.222 0-.287-.073-.325-.231h-.009c-.141.158-.386.231-.6.231-.24 0-.428-.171-.428-.411 0-.463.673-.54 1.02-.665v-.154c0-.231-.146-.343-.292-.343a.3.3 0 0 0-.188.056c0 .073.051.146.051.223 0 .128-.086.201-.266.201-.171 0-.265-.081-.265-.236 0-.287.467-.385.685-.385.258 0 .446.043.549.128a.55.55 0 0 1 .154.412v.763c0 .184.095.197.249.197zm-.694-.835c-.215.073-.502.18-.502.433q-.001.239.185.24c.085 0 .257-.043.317-.125zm2.357.921v-.129c.128 0 .214-.042.214-.175v-.789c0-.231-.06-.351-.214-.351-.214 0-.557.068-.643.214v.9c0 .137.086.18.214.201v.13H7.47v-.13c.129-.008.244-.034.244-.184v-.977c0-.137-.085-.218-.27-.236v-.12L8.117 12l.026.025v.27h.008c.163-.17.523-.295.858-.295s.42.236.42.557v.836c0 .141.085.18.214.192v.13zm12.857 0v-.129c.128 0 .214-.042.214-.175v-.789c0-.231-.06-.351-.214-.351-.214 0-.557.068-.643.214v.9c0 .137.086.18.214.201v.13h-.887v-.13c.129-.008.244-.034.244-.184v-.977c0-.137-.085-.218-.27-.236v-.12l.673-.068.026.025v.27h.009c.163-.17.523-.295.857-.295s.42.236.42.557v.836c0 .141.085.18.214.192v.13zm-10.071-.446a.88.88 0 0 1-.793.446c-.292 0-.523-.086-.678-.231a.84.84 0 0 1-.244-.635.857.857 0 0 1 .883-.848c.407 0 .832.248.832.698v.159h-1.286c0 .454.33.634.681.634.189 0 .343-.098.48-.3zm-.43-.617c0-.343-.265-.527-.428-.527-.18 0-.42.172-.428.527zm5.572.382q-.359.681-1.174.681c-.746 0-1.397-.48-1.397-1.264 0-.802.69-1.307 1.453-1.307q.387-.001.715.158l.116-.098h.163l.017.891h-.158c-.099-.27-.215-.471-.339-.6a.65.65 0 0 0-.484-.193c-.459 0-.84.373-.84 1.089 0 .527.317 1.071.925 1.071.335 0 .622-.171.85-.523zm-3.72.565a1.4 1.4 0 0 1-.501.116c-.322 0-.493-.159-.493-.48v-1.02h-.291V12H12v-.429h.429V12h.428v.214h-.428v.891c0 .172.102.386.321.386q.13-.002.227-.017l.017.129zM17.773 9l.587.523.737-.287-.317.715.506.604-.785-.08-.428.668-.163-.768-.767-.192.686-.399zm-1.899-1.714.48.63.789-.138-.459.63.373.69-.758-.235-.57.565-.009-.771-.724-.351.763-.245.111-.775zm-2.258 0 .377.3.42-.21-.163.454.322.343-.472-.017-.227.415-.124-.458-.463-.099.39-.257-.06-.476zm-1.402.428.258.197.278-.128-.111.291.218.227-.317-.008-.15.278-.086-.308-.304-.06.257-.172zm5.769 6a.823.823 0 0 1-.84-.853c0-.497.351-.861.857-.861.497 0 .857.343.857.844 0 .51-.368.87-.874.87m.013-1.586c-.21 0-.424.232-.424.699 0 .214.102.746.428.746.214 0 .429-.245.429-.738-.009-.467-.223-.702-.429-.702zm1.461-.373c-.154 0-.257-.158-.257-.3 0-.14.094-.312.249-.312.162 0 .265.162.265.308s-.098.3-.257.3zm-.377 1.826c.086 0 .142-.025.167-.051a.2.2 0 0 0 .039-.129v-1.007q0-.195-.232-.236v-.115l.643-.043.017.025v1.363q-.001.083.043.133c.022.034.077.052.154.069v.124h-.83z"
          />
        </>
      ) : (
        <>
          <path
            fill="#181B1E"
            d="M3.857 13.714v-.137c.171-.009.253-.021.253-.236v-1.907l-.768 2.28H3.12a98 98 0 0 0-.772-2.314v1.547c0 .3.056.621.429.621v.146H1.714v-.146c.386-.021.428-.257.428-.6V11.7c0-.266-.171-.394-.428-.412v-.145H2.88l.501 1.714.51-1.397a1.3 1.3 0 0 0 .077-.317h1.089v.137c-.163.017-.343.03-.343.227v1.817c0 .189.188.21.343.227v.163zm3.265-.086a.8.8 0 0 1-.351.086c-.223 0-.287-.073-.326-.231h-.008c-.142.158-.386.231-.6.231-.24 0-.429-.171-.429-.411 0-.463.673-.54 1.02-.665v-.154c0-.231-.146-.343-.291-.343a.3.3 0 0 0-.189.056c0 .073.052.146.052.223 0 .128-.086.201-.266.201-.172 0-.266-.081-.266-.236 0-.287.467-.385.686-.385.257 0 .446.043.548.128a.55.55 0 0 1 .155.412v.763c0 .184.094.197.248.197zm-.694-.835c-.214.073-.501.18-.501.433q-.001.239.184.24c.086 0 .257-.043.317-.125zm2.357.921v-.129c.129 0 .215-.042.215-.175v-.789c0-.231-.06-.351-.215-.351-.214 0-.557.068-.643.214v.9c0 .137.086.18.215.201v.13H7.47v-.13c.128-.008.244-.034.244-.184v-.977c0-.137-.086-.218-.27-.236v-.12L8.117 12l.025.025v.27h.009c.163-.17.523-.295.857-.295s.42.236.42.557v.836c0 .141.086.18.214.192v.13zm12.857 0v-.129c.129 0 .215-.042.215-.175v-.789c0-.231-.06-.351-.215-.351-.214 0-.557.068-.642.214v.9c0 .137.085.18.214.201v.13h-.887v-.13c.128-.008.244-.034.244-.184v-.977c0-.137-.086-.218-.27-.236v-.12l.673-.068.026.025v.27h.008c.163-.17.523-.295.857-.295.335 0 .42.236.42.557v.836c0 .141.086.18.215.192v.13zm-10.071-.446a.88.88 0 0 1-.793.446c-.291 0-.523-.086-.677-.231a.84.84 0 0 1-.244-.635.857.857 0 0 1 .883-.848c.407 0 .831.248.831.698v.159h-1.286c0 .454.33.634.682.634.188 0 .343-.098.48-.3zm-.429-.617c0-.343-.265-.527-.428-.527-.18 0-.42.172-.429.527zm5.572.382q-.359.681-1.174.681c-.746 0-1.398-.48-1.398-1.264 0-.802.69-1.307 1.453-1.307q.386-.001.716.158l.116-.098h.163l.017.891h-.159c-.098-.27-.214-.471-.338-.6a.65.65 0 0 0-.485-.193c-.458 0-.84.373-.84 1.089 0 .527.317 1.071.926 1.071.334 0 .621-.171.849-.523zm-3.72.565a1.4 1.4 0 0 1-.502.116c-.321 0-.492-.159-.492-.48v-1.02h-.292V12H12v-.429h.428V12h.429v.214h-.429v.891c0 .172.103.386.322.386q.129-.002.227-.017l.017.129z"
          />
          <path
            fill="#38A632"
            d="m17.772 9 .588.523.737-.287-.317.715.505.604-.784-.08-.429.668-.162-.768-.768-.192.686-.399z"
          />
          <path
            fill="#B2E0AF"
            d="m15.874 7.286.48.63.788-.138-.458.63.373.69-.759-.235-.57.565-.008-.771-.725-.351.763-.245.112-.775z"
          />
          <path
            fill="#A4E3A0"
            d="m13.615 7.286.377.3.42-.21-.162.454.321.343-.471-.017-.228.415-.124-.458-.463-.099.39-.257-.06-.476z"
          />
          <path
            fill="#8FE68B"
            d="m12.214 7.714.257.197.279-.128-.112.291.219.227-.317-.008-.15.278-.086-.308-.304-.06.257-.172z"
          />
          <path
            fill="#181B1E"
            d="M17.982 13.714a.823.823 0 0 1-.84-.853c0-.497.352-.861.858-.861.497 0 .857.343.857.844 0 .51-.369.87-.875.87m.013-1.586c-.21 0-.424.232-.424.699 0 .214.103.746.429.746.214 0 .428-.245.428-.738-.008-.467-.223-.702-.428-.702zm1.462-.373c-.155 0-.257-.158-.257-.3 0-.14.094-.312.248-.312.163 0 .266.162.266.308s-.099.3-.257.3zm-.377 1.826c.085 0 .141-.025.167-.051a.2.2 0 0 0 .038-.129v-1.007q0-.195-.231-.236v-.115l.643-.043.017.025v1.363q-.001.083.043.133c.021.034.077.052.154.069v.124h-.831z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconMNTC.displayName = 'MNTC'
