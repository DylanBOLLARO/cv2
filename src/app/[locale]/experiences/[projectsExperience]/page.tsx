'use client'

import { BlogCard } from '@/components/blog-card'
import { BlogCardContainer } from '@/components/blog-card-container'
import { HeaderCard } from '@/components/card-title'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { experiencesMoreData } from '@/data'
import { ProjectItem } from '@/types'
import { ChevronLeft } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { useParams, useRouter } from 'next/navigation'

export default function Page() {
    const { projectsExperience } = useParams() as { projectsExperience: string }
    const locale = useLocale()
    const router = useRouter()
    const experience = experiencesMoreData.find(
        (item) => item.name === projectsExperience
    )
    const t = useTranslations()

    const translatedProjects: ProjectItem[] =
        experience?.projects?.map((project) => ({
            name: t(
                `experiences.${experience.name}.projects.${project.slug}.name`
            ),
            imageSrc: project?.imageSrc || '',
            description: t(
                `experiences.${experience.name}.projects.${project.slug}.description`
            ),
            slug: project.slug,
            learnMore: t('learn-more'),
            moreUrl: `/${locale}/experiences/${projectsExperience}/${project.slug}`,
        })) || []

    if (!experience) return <></>

    return (
        <>
            <HeaderCard
                title={t('experiences.name')}
                backButton={() => router.push(`/${locale}/experiences`)}
            />
            <BlogCardContainer list={translatedProjects} />
        </>
    )
}
