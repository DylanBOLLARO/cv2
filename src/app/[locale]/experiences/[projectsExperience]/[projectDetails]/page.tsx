'use client'

import { HeaderCard } from '@/components/card-title'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { experiencesMoreData } from '@/data'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'

export default function Page() {
    const { projectDetails } = useParams() as { projectDetails: string }
    const { projectsExperience } = useParams() as { projectsExperience: string }
    const t = useTranslations()
    const router = useRouter()
    const locale = useLocale()

    const project = experiencesMoreData
        .find((item) => item.name === projectsExperience)
        ?.projects.find((item) => item.slug === projectDetails)

    if (!project) return <></>

    return (
        <>
            <HeaderCard
                title={t(
                    `experiences.${projectsExperience}.projects.${projectDetails}.name`
                )}
                backButton={() =>
                    router.push(`/${locale}/experiences/${projectsExperience}`)
                }
            />

            <div className="flex gap-5 flex-col md:flex-row">
                <Image
                    className="bg-muted w-full rounded-xl md:flex-1"
                    src={project.imageSrc}
                    width={500}
                    height={500}
                    alt={project.slug}
                />
                <p className="flex-2 text-lg">
                    {t(
                        `experiences.${projectsExperience}.projects.${projectDetails}.description`
                    )}
                </p>
            </div>
            <Card className="xl:flex-1 w-full">
                <CardHeader>
                    <CardTitle className="text-md text-center md:text-xl">
                        Objectifs du projet
                    </CardTitle>
                </CardHeader>
            </Card>
            <Card className="xl:flex-1 w-full">
                <CardHeader>
                    <CardTitle className="text-md text-center md:text-xl">
                        Technologies utilisées
                    </CardTitle>
                </CardHeader>
            </Card>
            <Card className="xl:flex-1 w-full">
                <CardHeader>
                    <CardTitle className="text-md text-center md:text-xl">
                        Fonctionnalités principales
                    </CardTitle>
                </CardHeader>
            </Card>
            <Card className="xl:flex-1 w-full">
                <CardHeader>
                    <CardTitle className="text-md text-center md:text-xl">
                        Résultats & Perspectives
                    </CardTitle>
                </CardHeader>
            </Card>
        </>
    )
}
