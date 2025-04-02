'use client'

import { BlogCard } from '@/components/blog-card'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranslations } from 'next-intl'

export default function Page() {
    const t = useTranslations()

    const dataEducation = [
        {
            imageSrc: '/licence.webp',
            name: t('education.licence.name'),
            description: t('education.licence.description'),
            startDate: `2021`,
            endDate: `2022`,
        },
        {
            imageSrc: '/bts.jpg',
            name: t('education.bts.name'),
            description: t('education.bts.description'),
            startDate: `2018`,
            endDate: `2020`,
        },
    ]

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="text-md text-center md:text-2xl">
                        {t('education.name')}
                    </CardTitle>
                </CardHeader>
            </Card>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {dataEducation.map((data) => {
                    return <BlogCard key={data.name} data={data} />
                })}
            </div>
        </>
    )
}
