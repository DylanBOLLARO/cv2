import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Input } from './ui/input'
import { useTranslations } from 'next-intl'

export const ContactMe = () => {
    const t = useTranslations()

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-md text-center md:text-2xl">
                    {t('contact-me.name')}
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
                <div className="space-y-3">
                    <Label htmlFor="name"> {t('contact-me.email')}</Label>
                    <Input id="name" />
                </div>
                <div className="space-y-3">
                    <Label htmlFor="username"> {t('contact-me.subject')}</Label>
                    <Input id="username" />
                </div>
                <div className="space-y-3">
                    <Label htmlFor="username"> {t('contact-me.message')}</Label>
                    <Textarea />
                </div>
            </CardContent>
        </Card>
    )
}
