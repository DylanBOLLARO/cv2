'use client'

import { BlogCard } from '@/components/blog-card'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { experiencesMoreData } from '@/data'
import { ProjectItem } from '@/types'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function Page() {
    const { more } = useParams() as { more: string }
    const experience = experiencesMoreData.find((item) => item.name === more)
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
        })) || []

    return (
        <>
            <Card>
                <CardHeader>
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
