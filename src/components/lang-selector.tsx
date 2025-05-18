import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { usePathname } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import {
    DE,
    DK,
    ES,
    FI,
    FR,
    GB,
    IT,
    NO,
    SE,
} from 'country-flag-icons/react/3x2'
import { useLocale } from 'next-intl'
import { redirect } from 'next/navigation'

export const LangSelector = ({ className }: any) => {
    const locale = useLocale()
    const pathname = usePathname()
    return (
        <Select
            defaultValue={locale}
            onValueChange={(lang) => {
                redirect(`/${lang}${pathname}`)
            }}
        >
            <SelectTrigger className={cn('w-full', className)}>
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="en">
                    <GB />
                    English
                </SelectItem>
                <SelectItem value="fr">
                    <FR />
                    Français
                </SelectItem>
                {/* <SelectItem value="es">
                    <ES />
                    Español
                </SelectItem>
                <SelectItem value="de">
                    <DE />
                    Deutsch
                </SelectItem>
                <SelectItem value="it">
                    <IT />
                    Italiano
                </SelectItem>
                <SelectItem value="fi">
                    <FI />
                    Suomi
                </SelectItem>
                <SelectItem value="no">
                    <NO />
                    Norsk
                </SelectItem>
                <SelectItem value="se">
                    <SE />
                    Svenska
                </SelectItem>
                <SelectItem value="dk">
                    <DK />
                    Dansk
                </SelectItem> */}
            </SelectContent>
        </Select>
    )
}
