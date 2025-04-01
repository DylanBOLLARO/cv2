import {
    GB,
    FR,
    ES,
    DE,
    IT,
    FI,
    NO,
    SE,
    DK,
} from 'country-flag-icons/react/3x2'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { useLocale } from 'next-intl'
import { redirect } from 'next/navigation'
import { cn } from '@/lib/utils'

export const LangSelector = ({ className }: any) => {
    const locale = useLocale()

    return (
        <Select
            defaultValue={locale}
            onValueChange={(lang) => {
                redirect(`/${lang}`)
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
                <SelectItem value="es">
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
                </SelectItem>
            </SelectContent>
        </Select>
    )
}
