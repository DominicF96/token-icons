import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconADAPAD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.857 17.357c0 .592-3.068 1.072-6.857 1.072-3.788 0-6.857-.48-6.857-1.072 0-.591 3.069-1.071 6.857-1.071s6.857.48 6.857 1.071m-11.404.094c0 .03-.189.06-.429.06-.23 0-.42-.03-.42-.06 0-.034.19-.064.425-.064s.424.03.424.064m.591.455c.236 0 .43-.026.43-.06 0-.035-.194-.06-.43-.06-.23 0-.424.025-.424.06s.193.06.429.06zm1.972-.27c0 .034-.232.064-.514.064s-.515-.03-.515-.064c0-.035.232-.065.515-.065.282 0 .514.03.514.065m-.322-.536c.223 0 .403-.017.403-.043s-.18-.043-.402-.043c-.228 0-.408.017-.408.043s.18.043.407.043m1.003-.171c0 .025-.115.042-.257.042-.141 0-.257-.017-.257-.042s.116-.043.257-.043.257.017.257.043m-1.56.471c.27 0 .493-.03.493-.064 0-.035-.223-.065-.493-.065s-.492.03-.492.065c0 .034.222.064.492.064m2.799-.064c0 .06-.386.107-.857.107-.472 0-.853-.047-.853-.107 0-.026.064-.043.171-.065h-.085c-.425 0-.772-.038-.772-.085s.347-.086.772-.086c.428 0 .771.039.771.086 0 .017-.043.03-.107.043h.107c.472 0 .857.047.857.107zm.107.664c.27 0 .493-.039.493-.086s-.223-.085-.493-.085-.493.038-.493.085.223.086.493.086m3.227-.386c0 .047-.231.086-.514.086s-.514-.039-.514-.086.231-.085.514-.085.514.038.514.085m.917.3c.223 0 .407-.03.407-.064s-.184-.064-.407-.064-.407.03-.407.064.184.064.407.064m-.621-.578c0 .034-.227.064-.514.064-.279 0-.51-.03-.51-.064 0-.035.231-.065.514-.065s.514.03.514.065zm1.671.15c.232 0 .425-.017.425-.043s-.193-.043-.429-.043-.428.017-.428.043.192.043.428.043zm.553-.343c0 .026-.116.043-.257.043s-.257-.017-.257-.043.116-.043.257-.043.257.017.257.043m-5.725.471c.33 0 .6-.03.6-.064s-.27-.064-.6-.064-.6.03-.6.064.27.064.6.064m-.13-.578c0 .034-.303.064-.685.064-.377 0-.681-.03-.681-.064 0-.035.304-.065.685-.065.378 0 .682.03.682.065m1.158.407c.472 0 .853-.047.853-.107 0-.026-.069-.047-.18-.065h.116c.411 0 .745-.047.745-.107s-.334-.107-.745-.107c-.416 0-.75.047-.75.107 0 .026.064.047.171.069l-.214-.004c-.472 0-.857.047-.857.107s.385.107.857.107zm-.214-.343c.373 0 .681-.03.681-.064 0-.035-.308-.065-.686-.065-.377 0-.685.03-.685.065 0 .034.308.064.685.064zm-.429-.171c0 .025-.171.042-.385.042-.215 0-.386-.017-.386-.042s.171-.043.386-.043c.214 0 .385.017.385.043m3.609.3c.201 0 .364-.018.364-.043 0-.026-.163-.043-.364-.043-.202 0-.365.017-.365.043s.163.043.365.043m-7.929 0c.214 0 .386-.018.386-.043 0-.026-.172-.043-.386-.043-.21 0-.381.017-.381.043s.171.043.385.043zm.557-.258c0 .026-.103.043-.231.043-.129 0-.236-.017-.236-.043s.103-.042.236-.042c.128 0 .231.017.231.042m-1.963.258c.142 0 .258-.018.258-.043 0-.026-.116-.043-.258-.043-.14 0-.257.017-.257.043s.116.043.257.043"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M12 9.917a.306.306 0 1 0 0-.613.307.307 0 0 0-.308.309c0 .171.137.304.308.304"
          />
          <path
            fill="currentColor"
            d="M10.055 6.416a2.156 2.156 0 0 1 3.934.008l3.068 7.115c.3.694-.218 1.461-.985 1.461h-1.389c-.107-.703-.686-1.007-1.264-.921-.073-.54-.472-.635-.665-.613-.128-.21-.3-.789-.377-1.037h-.754c-.073.248-.253.827-.377 1.037-.193-.022-.591.073-.664.613-.579-.086-1.158.218-1.265.921H7.93c-.772 0-1.286-.771-.986-1.461zM12 7.727c-.325.6-.925 1.924-.818 2.52l.06.364.094.532-.266-.634-.514 1.435.81-.347a.3.3 0 0 1 .124-.026h1.02q.065 0 .129.026l.801.343-.51-1.431-.265.634.094-.527.06-.369c.107-.6-.493-1.92-.819-2.52"
          />
          <path
            fill="currentColor"
            d="M11.015 14.563a1.27 1.27 0 0 0-1.003.197 1.13 1.13 0 0 1 .921-.347c.034-.33.399-.527.574-.587a.89.89 0 0 0-.488.737zm2.228 0c.471-.103.866.086.999.197a1.13 1.13 0 0 0-.918-.347c-.034-.33-.398-.527-.578-.587a.89.89 0 0 1 .493.737z"
          />
        </>
      ) : (
        <>
          <path
            fill="#0437AD"
            d="M18.857 17.357c0 .592-3.069 1.072-6.857 1.072s-6.857-.48-6.857-1.072c0-.591 3.068-1.071 6.857-1.071 3.788 0 6.857.48 6.857 1.071m-11.404.094c0 .03-.189.06-.429.06-.231 0-.42-.03-.42-.06 0-.034.189-.064.424-.064.236 0 .425.03.425.064m.591.455c.236 0 .429-.026.429-.06 0-.035-.193-.06-.429-.06-.231 0-.424.025-.424.06s.193.06.428.06zm1.971-.27c0 .034-.231.064-.514.064s-.514-.03-.514-.064c0-.035.231-.065.514-.065s.514.03.514.065m-.321-.536c.223 0 .403-.017.403-.043s-.18-.043-.403-.043c-.227 0-.407.017-.407.043s.18.043.407.043m1.003-.171c0 .025-.116.042-.257.042s-.257-.017-.257-.042.115-.043.257-.043c.141 0 .257.017.257.043m-1.56.471c.27 0 .493-.03.493-.064 0-.035-.223-.065-.493-.065s-.493.03-.493.065c0 .034.223.064.493.064m2.798-.064c0 .06-.385.107-.857.107-.471 0-.853-.047-.853-.107 0-.026.065-.043.172-.065h-.086c-.424 0-.771-.038-.771-.085s.347-.086.771-.086c.429 0 .772.039.772.086 0 .017-.043.03-.108.043h.108c.471 0 .857.047.857.107zm.108.664c.27 0 .492-.039.492-.086s-.222-.085-.492-.085-.493.038-.493.085.223.086.493.086m3.227-.386c0 .047-.232.086-.515.086-.282 0-.514-.039-.514-.086s.232-.085.514-.085.515.038.515.085m.917.3c.223 0 .407-.03.407-.064s-.184-.064-.407-.064-.407.03-.407.064.184.064.407.064m-.622-.578c0 .034-.227.064-.514.064-.278 0-.51-.03-.51-.064 0-.035.232-.065.514-.065s.515.03.515.065zm1.672.15c.231 0 .424-.017.424-.043s-.193-.043-.428-.043c-.236 0-.429.017-.429.043s.193.043.429.043zm.553-.343c0 .026-.116.043-.257.043s-.258-.017-.258-.043.116-.043.258-.043c.141 0 .257.017.257.043m-5.726.471c.33 0 .6-.03.6-.064s-.27-.064-.6-.064-.6.03-.6.064.27.064.6.064m-.129-.578c0 .034-.304.064-.685.064-.377 0-.682-.03-.682-.064 0-.035.305-.065.686-.065.377 0 .681.03.681.065m1.158.407c.471 0 .852-.047.852-.107 0-.026-.068-.047-.18-.065h.116c.412 0 .746-.047.746-.107s-.334-.107-.746-.107c-.416 0-.75.047-.75.107 0 .026.064.047.172.069l-.215-.004c-.471 0-.857.047-.857.107s.386.107.857.107zm-.215-.343c.373 0 .682-.03.682-.064 0-.035-.309-.065-.686-.065s-.686.03-.686.065c0 .034.309.064.686.064zm-.428-.171c0 .025-.172.042-.386.042s-.386-.017-.386-.042.172-.043.386-.043.386.017.386.043m3.608.3c.202 0 .365-.018.365-.043 0-.026-.163-.043-.365-.043s-.364.017-.364.043.163.043.364.043m-7.928 0c.214 0 .385-.018.385-.043 0-.026-.171-.043-.385-.043-.21 0-.382.017-.382.043s.172.043.386.043zm.557-.258c0 .026-.103.043-.232.043-.128 0-.235-.017-.235-.043s.103-.042.235-.042c.129 0 .232.017.232.042m-1.963.258c.141 0 .257-.018.257-.043 0-.026-.116-.043-.257-.043s-.257.017-.257.043.116.043.257.043"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#0437AD"
            d="M12 9.917a.306.306 0 1 0 0-.613.307.307 0 0 0-.309.309c0 .171.137.304.309.304"
          />
          <path
            fill="#0437AD"
            d="M10.054 6.416a2.156 2.156 0 0 1 3.934.008l3.069 7.115c.3.694-.219 1.461-.986 1.461h-1.388c-.108-.703-.686-1.007-1.265-.921-.073-.54-.471-.635-.664-.613-.129-.21-.3-.789-.377-1.037h-.754c-.073.248-.253.827-.378 1.037-.192-.022-.591.073-.664.613-.578-.086-1.157.218-1.264.921H7.928c-.771 0-1.285-.771-.985-1.461zM12 7.727c-.326.6-.926 1.924-.819 2.52l.06.364.094.532-.265-.634-.515 1.435.81-.347a.3.3 0 0 1 .125-.026h1.02q.064 0 .128.026l.802.343-.51-1.431-.266.634.094-.527.06-.369c.107-.6-.493-1.92-.818-2.52"
          />
          <path
            fill="#0437AD"
            d="M11.014 14.563a1.27 1.27 0 0 0-1.003.197 1.13 1.13 0 0 1 .922-.347c.034-.33.398-.527.574-.587a.89.89 0 0 0-.489.737zm2.229 0c.471-.103.865.086.998.197a1.13 1.13 0 0 0-.917-.347c-.034-.33-.399-.527-.579-.587a.89.89 0 0 1 .493.737z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconADAPAD.displayName = 'ADAPAD'
