'use client'

import { BlogCardContainer } from '@/components/blog-card-container'
import { HeaderCard } from '@/components/card-title'
import { useLocale, useTranslations } from 'next-intl'
import { useParams, useRouter } from 'next/navigation'
import { skeleton } from '../../../../../skeleton'

export default function Page() {
    const { page } = useParams() as { page: string }
    const { projectsExperience } = useParams() as { projectsExperience: string }
    const locale = useLocale()
    const router = useRouter()

    const t = useTranslations()

    return (
        <>
            <HeaderCard
                title={t(`${page}.${projectsExperience}.name`)}
                backButton={() => router.push(`/${locale}/${page}`)}
            />
            <BlogCardContainer
                skeleton={skeleton[page][projectsExperience].projects}
                intl={`${page}.${projectsExperience}.projects`}
            />
        </>
    )
}
