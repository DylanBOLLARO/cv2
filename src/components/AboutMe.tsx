'use client'

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const AboutMe = () => {
    const t = useTranslations()

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="text-center font-bold text-2xl md:text-4xl">
                        BOLLARO Dylan
                    </CardTitle>
                    <CardDescription className="text-md text-center md:text-xl">
                        {t('about-me.job')}
                    </CardDescription>
                </CardHeader>
            </Card>
            <div className="flex flex-col gap-5 md:flex-row">
                <Image
                    className="rounded-2xl border-2 p-1 self-center w-60 h-60"
                    src="/me.jpg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
                <p className="text-justify text-md md:text-xl">
                    {t('about-me.presentation')}
                </p>
            </div>
        </>
    )
}
