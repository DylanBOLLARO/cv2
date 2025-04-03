'use client'

import { BlogCard } from '@/components/blog-card'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { ProjectItem } from '@/types'
import { useLocale, useTranslations } from 'next-intl'

export default function Page() {
    const t = useTranslations()
    const locale = useLocale()

    const dataExperiences: Array<ProjectItem> = [
        {
            name: t('experiences.universite-cote-d-azur-ulysseus.name'),
            description: t(
                'experiences.universite-cote-d-azur-ulysseus.description'
            ),
            imageSrc: '/universite-cote-dazur.png',
            startDate: t(
                'experiences.universite-cote-d-azur-ulysseus.start-date'
            ),
            endDate: t('experiences.universite-cote-d-azur-ulysseus.end-date'),
            knowMore: t('know-more'),
            moreUrl: `/${locale}/experiences/universite-cote-d-azur-ulysseus`,
        },
    ]

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="text-md text-center md:text-2xl">
                        {t('experiences.name')}
                    </CardTitle>
                </CardHeader>
            </Card>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {dataExperiences.map((data) => {
                    return <BlogCard key={data.name} data={data} />
                })}
            </div>
        </>
    )
}
