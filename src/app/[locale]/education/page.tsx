'use client'

import { BlogCard } from '@/components/blog-card'
import { BlogCardContainer } from '@/components/blog-card-container'
import { HeaderCard } from '@/components/card-title'
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
            <HeaderCard title={t('education.name')} />
            <BlogCardContainer list={dataEducation} />
        </>
    )
}
