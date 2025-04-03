'use client'

import { BlogCard } from '@/components/blog-card'
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
            knowMore: t('know-more'),
            moreUrl: `/${locale}/experiences/${projectsExperience}/${project.slug}`,
        })) || []

    return (
        <>
            <Card>
                <CardHeader className="flex relative flex-col sm:flex-row items-center justify-center gap-y-5">
                    <Button
                        className="sm:absolute ml-5 left-0 z-10 cursor-pointer"
                        onClick={() => router.push(`/${locale}/experiences`)}
                    >
                        <ChevronLeft />
                        Back
                    </Button>
                    <CardTitle className="text-md text-center md:text-2xl">
                        {t(`experiences.${experience?.name}.name`)}
                    </CardTitle>
                </CardHeader>
            </Card>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {translatedProjects.map((project: ProjectItem) => {
                    return <BlogCard key={project.name} data={project} />
                })}
            </div>
        </>
    )
}
