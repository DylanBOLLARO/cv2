'use client'

import { BlogCard } from '@/components/blog-card'
import { BlogCardContainer } from '@/components/blog-card-container'
import { HeaderCard } from '@/components/card-title'
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
            learnMore: t('learn-more'),
            moreUrl: `/${locale}/experiences/universite-cote-d-azur-ulysseus`,
        },
    ]

    return (
        <>
            <HeaderCard title={t('experiences.name')} />
            <BlogCardContainer list={dataExperiences} />
        </>
    )
}
